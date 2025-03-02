import {
  Filter,
  FilterSystem,
  GlProgram,
  Matrix,
  Sprite,
  Texture,
  TextureMatrix,
  UniformGroup,
} from "pixi.js";

const vertex = `
in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
    vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;

    position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
    position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

    return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
    return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
    return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

void main(void)
{
    gl_Position = filterVertexPosition(aPosition);
    vTextureCoord = filterTextureCoord(aPosition);
    vMaskCoord = getFilterCoord(aPosition);
}`;

const fragment = `
precision mediump float;

in vec2 vTextureCoord;
in vec2 vMaskCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;
uniform float strength;

vec3 desaturate(vec3 color, float strength) {
  float gray = dot(color, vec3(0.299, 0.587, 0.114));
  return mix(color, vec3(gray), strength);
}

vec3 setContrast(vec3 color, float contrast) {
  return ((color - 0.5) * contrast) + 0.5;
}

void main() {
  vec4 color = texture2D(uTexture, vTextureCoord);
  vec4 mask = texture2D(uMaskTexture, vMaskCoord);

  if (mask.r < 0.5) {
    vec3 outColor = desaturate(color.rgb, 1.0 * strength);
    outColor = setContrast(outColor, 1.0 - 0.5 * strength);
    gl_FragColor = vec4(outColor, color.a);
  } else {
    gl_FragColor = color;
  }
}`;

export class GrayscaleFilter extends Filter {
  private readonly _textureMatrix: TextureMatrix;
  sprite: Sprite;
  private _strength = 1;
  uniformsGroup: UniformGroup<{
    uFilterMatrix: {
      value: Matrix;
      type: "mat3x3<f32>";
    };
    strength: {
      value: number;
      type: "f32";
    };
  }>;

  constructor({ sprite }: { sprite: Sprite }) {
    const textureMatrix = new TextureMatrix(sprite.texture);
    const uniformsGroup = new UniformGroup({
      uFilterMatrix: { value: new Matrix(), type: "mat3x3<f32>" },
      strength: { value: 1, type: "f32" },
    });

    super({
      glProgram: GlProgram.from({
        fragment,
        vertex,
      }),
      resources: {
        filterUniforms: uniformsGroup,
        uMaskTexture: sprite.texture.source,
      },
    });

    this.uniformsGroup = uniformsGroup;

    this._textureMatrix = textureMatrix;
    this.sprite = sprite;
  }

  get strength() {
    return this._strength;
  }

  set strength(value: number) {
    this.uniformsGroup.uniforms.strength = value;
    this._strength = value;
  }

  public override apply(
    filterManager: FilterSystem,
    input: Texture,
    output: Texture,
    clearMode: boolean
  ): void {
    filterManager
      .calculateSpriteMatrix(
        (this.resources as any).filterUniforms.uniforms.uFilterMatrix as Matrix,
        this.sprite
      )
      .prepend(this._textureMatrix.mapCoord);

    filterManager.applyFilter(this, input, output, clearMode);
  }
}

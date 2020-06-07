import * as PIXI from "pixi.js";

const FRAG_PROGRAM = `
precision mediump float;

#define FILTER_SIZE 2
#define COLOR_LEVELS 30.0
#define EDGE_FILTER_SIZE 3
#define EDGE_THRESHOLD 0.5

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;
uniform sampler2D maskSampler;

vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return (blendNormal(base, blend) * opacity + base * (1.0 - opacity));
}

vec3 setContrast(in vec3 color, in float contrast) {
  return ((color - 0.5) * contrast) + 0.5;
}

vec3 makeSepia(in vec3 color, in float strength) { 
  vec3 sepia;

  sepia.r = dot(color, vec3(0.393, 0.769, 0.189));
  sepia.g = dot(color, vec3(0.349, 0.686, 0.168));   
  sepia.b = dot(color, vec3(0.272, 0.534, 0.131));

  vec3 diff = (color - sepia) * strength;

  return color - diff;
}

void main() {
  vec4 color = texture2D(uSampler, vTextureCoord);
  vec4 mask = texture2D(maskSampler, vTextureCoord);

  if (mask.r < 0.5) {
    vec3 outColor = makeSepia(color.rgb, 0.6);
    // outColor = setContrast(outColor, 0.4); 
    outColor = blendNormal(outColor, vec3(0.0, 0.0, 0.0), 0.5);
    gl_FragColor = vec4(outColor, color.a);
  } else {
    gl_FragColor = color;
  }
}`;

export class FogOfWarFilter extends PIXI.Filter {
  constructor(mask: PIXI.Texture) {
    super(undefined, FRAG_PROGRAM, {
      maskSampler: mask,
    });
  }
}

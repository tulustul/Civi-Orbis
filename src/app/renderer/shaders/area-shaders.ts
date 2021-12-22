import * as PIXI from "pixi.js";

const VS_BORDER_PROGRAM = `
precision mediump float;

attribute vec2 aVertexPosition;
attribute float aUvs;

uniform mat3 translationMatrix;
uniform mat3 projectionMatrix;

varying float vUvs;

void main() {
  vUvs = aUvs;
  gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
}`;

const FRAG_BORDER_PROGRAM = `
precision mediump float;

varying float vUvs;

uniform vec4 color;
uniform float borderSize;
uniform float borderShadow;
uniform float borderShadowStrength;

void main() {
  vec4 c = color;
  float a = 1.0;
  if (vUvs < borderSize) {
    a = 0.0;
  } else if (vUvs < (1.0 - borderSize)) {
    a = (vUvs - (1.0 - borderShadow)) * borderShadowStrength;
  }

  gl_FragColor = vec4(c.r * a, c.g * a, c.b * a, a);
}`;

const VS_BACKGROUND_PROGRAM = `
precision mediump float;

attribute vec2 aVertexPosition;

uniform mat3 translationMatrix;
uniform mat3 projectionMatrix;

void main() {
  gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
}`;

const FRAG_BACKGROUND_PROGRAM = `
precision mediump float;

uniform vec4 color;
uniform float opacity;

void main() {
  float a = 0.5;
  gl_FragColor = vec4(color.r * opacity, color.g * opacity, color.b * opacity, opacity);
}`;

const border = PIXI.Program.from(VS_BORDER_PROGRAM, FRAG_BORDER_PROGRAM);
const background = PIXI.Program.from(
  VS_BACKGROUND_PROGRAM,
  FRAG_BACKGROUND_PROGRAM,
);

export const programs = { border, background };

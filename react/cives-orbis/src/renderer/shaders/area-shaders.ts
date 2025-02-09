import { ShaderFromResources } from "pixi.js";

const VERTEX_BORDER = `
precision mediump float;

attribute vec2 aVertexPosition;
attribute float aUvs;

uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;

out float vUvs;

void main() {
  vUvs = aUvs;
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
}`;

const FRAGMENT_BORDER = `
precision mediump float;

in float vUvs;

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

  // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  gl_FragColor = vec4(c.r * a, c.g * a, c.b * a, a);
}`;

const VERTEX_BACKGROUND = `
precision mediump float;

attribute vec2 aVertexPosition;

uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform mat3 uTransformMatrix;

void main() {
  mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
  gl_Position = vec4((mvp * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
}`;

const FRAGMENT_BACKGROUND = `
precision mediump float;

uniform vec4 color;
uniform float opacity;

void main() {
  float a = 0.5;
  gl_FragColor = vec4(color.r * opacity, color.g * opacity, color.b * opacity, opacity);
}`;

const border: ShaderFromResources = {
  gl: { vertex: VERTEX_BORDER, fragment: FRAGMENT_BORDER },
};
const background: ShaderFromResources = {
  gl: { vertex: VERTEX_BACKGROUND, fragment: FRAGMENT_BACKGROUND },
};

export const programs = { border, background };

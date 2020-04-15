import { SimplexMapGenerator } from '../map-generators/simplex';
import { Renderer } from '../renderer';
import { Camera } from '../renderer/camera';

export class Game {
  map = new SimplexMapGenerator().generate(40, 30);

  camera: Camera;

  renderer = new Renderer(this);

  constructor() {}
}

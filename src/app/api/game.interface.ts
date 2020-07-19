export interface MapGeneratorOptions {
  width: number;
  height: number;
  uniformity: number;
  seaLevel: number;
  resources: number;
  humanPlayersCount: number;
  aiPlayersCount: number;
  seed: string | undefined;
}

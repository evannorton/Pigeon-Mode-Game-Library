import { CollisionData } from "../types/CollisionData";

export interface Entity {
  readonly collidableLayers: string[];
  readonly collisionLayers: string[];
  readonly height: number;
  readonly id: string;
  isCollidable: boolean;
  readonly onCollision: ((data: CollisionData) => void) | null;
  readonly spriteInstanceID: string | null;
  readonly width: number;
  x: number;
  xVelocity: number;
  y: number;
  yVelocity: number;
  readonly zIndex: number;
}
export interface Layer {
  readonly entities: Map<string, Entity>;
  readonly id: string;
  readonly tileSize: number;
  readonly tiles: {
    readonly id: number;
    readonly x: number;
    readonly y: number;
  }[];
  readonly tilesetID: string | null;
}
export interface Level {
  readonly height: number;
  readonly layers: Layer[];
  readonly width: number;
}
export interface Tileset {
  readonly height: number;
  readonly imageSourceID: string;
  readonly tileSize: number;
  readonly tiles: WorldTilesetTile[];
  readonly width: number;
}
export interface WorldTilesetTile {
  readonly id: number;
  readonly isCollidable: boolean;
}
export interface World {
  readonly levels: Map<string, Level>;
  readonly tilesets: Map<string, Tileset>;
}

export class SkiCam {
  name: string;
  cams: { name: string, url: string }[];

  constructor( obj?: any ) {
    this.name = obj && obj.name || null;
    this.cams = obj && obj.cams || null;
  }
}

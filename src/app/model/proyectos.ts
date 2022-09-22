export class Proyectos {
  id: number;
  nombre: string;
  descripcion: string;
  linkdeploy: string;
  linkgithub: string;

  constructor(nombre: string, descripcion:string, linkdeploy:string, linkgithub: string){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.linkdeploy = linkdeploy;
    this.linkgithub = linkgithub
  }
}

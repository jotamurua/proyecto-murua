export class persona{
  id?: number;
  nombre: string;
  apellido: string;
  img: string;
  banner: string;
  titulo: string;
  ubicacion: string;
  acercade: string;

  constructor (nombre: string, apellido: string, img: string, banner: string, titulo: string, ubicacion: string, acercade: string){
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.banner = banner;
    this.titulo= titulo;
    this.ubicacion = ubicacion;
    this.acercade = acercade
  }
}



export class persona{
  id?: number;
  nombre: String;
  apellido: String;
  img: String;
  banner: String;
  titulo: String;
  ubicacion: String;
  acercade: String;

  constructor (nombre: String, apellido: String, img: String, banner: String, titulo: String, ubicacion: String, acercade: String){
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
    this.banner = banner;
    this.titulo= titulo;
    this.ubicacion = ubicacion;
    this.acercade = acercade
  }
}



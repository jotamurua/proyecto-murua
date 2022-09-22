import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombre: string;
  descripcion: string;
  linkdeploy: string;
  linkgithub: string;
  constructor(private proyectosS:ProyectosService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const proyectos = new Proyectos(this.nombre, this.descripcion, this.linkdeploy, this.linkgithub);
    this.proyectosS.save(proyectos).subscribe(
      data =>{
        alert("Proyecto creado");
        this.router.navigate([''])
      }, err =>{
        alert("error");
        this.router.navigate([''])
      }
    );
  }

}

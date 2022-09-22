import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SwitchService } from 'src/app/service/switch.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfilmodal',
  templateUrl: './perfilmodal.component.html',
  styleUrls: ['./perfilmodal.component.css']
})
export class PerfilmodalComponent implements OnInit {
  persona: persona = null;
  imagen: string[];

  constructor(private storage:Storage, private modalSS: SwitchService,private personaService: PersonaService, private router:Router) {
    this.imagen = [];
   }
  uploadImage($event: any){
    const file = $event.target.files[0]

    const imgRef = ref(this.storage, `perfiles/perfil1`);

    uploadBytes(imgRef, file)
    .then(res => this.getImages())
    .catch(error => console.log(error))
  }
  getImages(){
    const imagesRef = ref(this.storage, 'perfiles')
    listAll(imagesRef)
    .then(async res =>{
      this.imagen = [];
      for (let item of res.items){
      const url =  await getDownloadURL(item);
      this.imagen.push(url);
      this.persona.img = url;
    }} )
    .catch(error => console.log(error));
  }
  ngOnInit(): void {
    const id = 1;
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al modificar");
        this.closeModal()
      }
    );
    this.getImages();
  }

  closeModal(){
    this.modalSS.$modal.emit(false)
  }
  onUpdate():void{
    const id = 1;
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.closeModal()
        this.router.navigate([''])
      }, err => {
        alert("Error al editar el perfil");
        this.router.navigate([''])
      }
    )

  }

}

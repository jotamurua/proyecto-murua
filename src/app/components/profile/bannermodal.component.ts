import { Component, OnInit } from '@angular/core';
import { SwitchService } from 'src/app/service/switch.service';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bannermodal',
  templateUrl: './bannermodal.component.html',
  styleUrls: ['./bannermodal.component.css']
})
export class BannermodalComponent implements OnInit {
  persona: persona = null;
  imagenbanner: string[];
  constructor(private storage:Storage, private modalSS: SwitchService,private personaService: PersonaService,     private router: Router) {
    this.imagenbanner = [];
   }
   uploadImage($event: any){
    const file = $event.target.files[0]

    const imgRef = ref(this.storage, `banners/perfil1`);

    uploadBytes(imgRef, file)
    .then(res => this.getImages())
    .catch(error => console.log(error))
  }
  getImages(){
    const imagesRef = ref(this.storage, 'banners')
    listAll(imagesRef)
    .then(async res =>{
      this.imagenbanner = [];
      for (let item of res.items){
      const url =  await getDownloadURL(item);
      this.imagenbanner.push(url);
      this.persona.banner = url;
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
      }
    )

  }


}

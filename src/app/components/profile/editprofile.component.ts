import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { Storage, ref, uploadBytes, listAll, getDownloadURL} from '@angular/fire/storage';


@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  persona: persona;
  imagen: string[];
  url: string;
  banners: string[];
  banurl: string;

  constructor(private storage:Storage, private personaService: PersonaService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.imagen = [];
    this.url = "";
    this.banners = [];
    this.banurl = "";

  }
  imagenbanner($event: any){
    const archivo = $event.target.files[0];
    const bannerRef = ref(this.storage, `banners/perfil1`);
    uploadBytes(bannerRef, archivo)
    .then(res => {this.getBanners();})
    .catch(error => console.log(error));

  }
  getBanners(){
    const banRef = ref(this.storage, 'banners');
    listAll(banRef)
    .then(async response => {
      this.banners = [];
      for (let item of response.items){
      const banurl = await getDownloadURL(item);
      this.banners.push(banurl);
      this.banurl = banurl;
    }})
    .catch(error => {console.log(error)})
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
      this.url = url;
    }} )
    .catch(error => console.log(error));
  }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert ("Error al modificar");
        this.router.navigate([''])
      }
    );
    this.getImages();
    this.getBanners();
  }
  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.personaService.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al editar el perfil");
        this.router.navigate(['']);
      }
    )

  }
}

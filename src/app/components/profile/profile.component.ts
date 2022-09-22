import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { SwitchService } from 'src/app/service/switch.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  persona: persona = new persona("","","", "", "", "", "");
  perfilswitch:boolean;
  bannerswitch:boolean;

  constructor(private switchSS:SwitchService,public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged=false;
  ngOnInit(): void {
    this.personaService.getPersona().subscribe( data => {
      this.persona = data
    });
    if(this.tokenService.getToken()){
      this.isLogged=true;

    }else {
      this.isLogged=false;
    }
    this.switchSS.$modal.subscribe(val=>this.perfilswitch=val)
    this.switchSS.$modal.subscribe(val=>this.bannerswitch=val)

  }
  openPerfil(){
    this.perfilswitch = true;
  }
  openBanner(){
    this.bannerswitch = true;
  }


}

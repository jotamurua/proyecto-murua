import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { interceptorProvider } from './service/interceptor-service';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { EditeducationComponent } from './components/education/editeducation.component';
import { NewEducationComponent } from './components/education/neweducation.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';
import { EditprofileComponent } from './components/profile/editprofile.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { PerfilmodalComponent } from './components/profile/perfilmodal.component';
import { BannermodalComponent } from './components/profile/bannermodal.component';
import { NewproyectoComponent } from './components/projects/newproyecto.component';
import { EditproyectoComponent } from './components/projects/editproyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    EditExperienceComponent,
    NewEducationComponent,
    EditeducationComponent,
    NewExperienciaComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditprofileComponent,
    PerfilmodalComponent,
    BannermodalComponent,
    NewproyectoComponent,
    EditproyectoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewEducationComponent } from './components/education/neweducation.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewExperienciaComponent } from './components/experience/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditprofileComponent } from './components/profile/editprofile.component';
import { EditproyectoComponent } from './components/projects/editproyecto.component';
import { NewproyectoComponent } from './components/projects/newproyecto.component';
import { EditSkillComponent } from './components/skills/edit-skill.component';
import { NewSkillComponent } from './components/skills/new-skill.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
{path:'login', component: LoginComponent},
{path:'nuevaexp', component: NewExperienciaComponent},
{path:'editexp/:id', component: EditExperienceComponent},
{path: 'nuevaedu', component: NewEducationComponent},
{path: 'editedu/:id', component: EditExperienceComponent},
{path: 'nuevaskill', component: NewSkillComponent},
{path: 'editskill/:id', component: EditSkillComponent},
{path: 'editar/:id', component: EditprofileComponent},
{path: 'nuevoproy', component: NewproyectoComponent},
{path: 'editproy/:id', component: EditproyectoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

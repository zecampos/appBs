import { MembrosComponent } from './membro/membros/membros.component';
import { MembroComponent } from './membro/membro.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },{
    path: 'membro',
    component: MembroComponent,
    children: []
  },
  {path:'membros/:id', component: MembrosComponent,
        children: [
            

        ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

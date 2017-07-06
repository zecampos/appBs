import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembroRoutingModule } from './membro-routing.module';
import { MembrosComponent } from './membros/membros.component';

@NgModule({
  imports: [
    CommonModule,
    MembroRoutingModule
  ],
  declarations: [MembrosComponent]
})
export class MembroModule { }

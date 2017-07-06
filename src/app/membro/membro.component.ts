import { MembroService } from './membro-service';
import { Membros } from './membros/membros.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membro',
  templateUrl: './membro.component.html',
  styleUrls: ['./membro.component.css']
})
export class MembroComponent implements OnInit {

  membros;



  constructor(private membrosService:MembroService) { 

    this.membrosService.getMembros().subscribe(data => this.membros=data)
  }

  ngOnInit() {
    
    
  }

}

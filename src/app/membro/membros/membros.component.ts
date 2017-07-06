import { MembroService } from './../membro-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-membros',
  templateUrl: './membros.component.html',
  styleUrls: ['./membros.component.css']
})
export class MembrosComponent implements OnInit {
membros;
  constructor(
    
    private route: ActivatedRoute,
    private membroService: MembroService

  ) { }

  ngOnInit() {
    this.membroService.getmembro(this.route.snapshot.params['id']).subscribe(membros => this.membros = membros)
    
  }

}

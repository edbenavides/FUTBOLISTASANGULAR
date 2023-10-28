import { Component } from '@angular/core';
import { Futbolistas, FutbolistasService } from 'src/app/servicio/futbolCarlosyEdd.service';

@Component({
  selector: 'app-ronaldo',
  templateUrl: './ronaldo.component.html',
  styleUrls: ['./ronaldo.component.css']
})
export class RonaldoComponent {
  futbolistas:Futbolistas[]=[];
  constructor (private _futbolistaService:FutbolistasService){    
  }
  ngOnInit(): void{
    this.futbolistas=this._futbolistaService.getFutbolitas();
    console.log(this.futbolistas);
  }
}


  




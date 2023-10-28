import { Component } from '@angular/core';
import { Futbolistas, FutbolistasService } from 'src/app/servicio/futbolCarlosyEdd.service';

@Component({
  selector: 'app-messi',
  templateUrl: './messi.component.html',
  styleUrls: ['./messi.component.css']
})
export class MessiComponent {
  futbolistas:Futbolistas[]=[];
  constructor (private _futbolistaService:FutbolistasService){    
  }
  ngOnInit(): void{
    this.futbolistas=this._futbolistaService.getFutbolitas();
    console.log(this.futbolistas);
  }
}



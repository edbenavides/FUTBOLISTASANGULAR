import { Component } from '@angular/core';
import { Futbolistas, FutbolistasService } from 'src/app/servicio/futbolCarlosyEdd.service';

@Component({
  selector: 'app-james',
  templateUrl: './james.component.html',
  styleUrls: ['./james.component.css']
})
export class JamesComponent {
  futbolistas:Futbolistas[]=[];
  constructor (private _futbolistaService:FutbolistasService){    
  }
  ngOnInit(): void{
    this.futbolistas=this._futbolistaService.getFutbolitas();
    console.log(this.futbolistas);
  }
  showInfo: boolean = false;
  toggleInfo() {
    this.showInfo = !this.showInfo;

}
}

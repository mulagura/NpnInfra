import { Component, OnInit } from '@angular/core';
import { WallService } from '../app.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  //public n:string;

  constructor(private _wallService:WallService) { }

  ngOnInit() {

  //  this.n = this._wallService.name;

  }

}

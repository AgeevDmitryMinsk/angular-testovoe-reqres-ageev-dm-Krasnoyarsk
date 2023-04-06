import {Component, Input, OnInit} from '@angular/core';
import {IColorData} from "../interfaces/global";

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit{
@Input() color: IColorData
  bgColor: string

  ngOnInit(): void {
  this.bgColor = this.color.color
    //console.log("this.bgColor = ", this.bgColor)
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

@Output() testChange:EventEmitter<string> = new EventEmitter<string>();
@Input() test: string

  constructor() { }

  ngOnInit() {
  }
  augry: string = "wtf"
  payload: any = "test";
  myString: string =  "test"
  clicked(){
    console.log(this.payload, this.testChange)
    if (this.payload === "test"){
      this.payload = "hello";
    }
    else  {
      this.payload = "test";
    }
    
    this.testChange.emit(this.payload);
   
    
  }
}

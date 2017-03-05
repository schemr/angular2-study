import { Component } from '@angular/core';

@Component({
  selector: 'fa-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent{
  stringInterpolation = 'this is string';
  numberInterpolation = 3;
  onTest(){
    return true;
  }
  onClicked(value: string){
    alert(value);
  }
}

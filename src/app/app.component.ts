import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name = 'Vinicius';
  elements: number[] = [];

  onChangeName(){
     this.name = "Vinicius Rafael Migliorança";
  }

  onAddElement(){
     this.elements.push(this.elements.length + 1);
  }

  getColor(element:number){
     return element % 2 == 0 ? 'red' : 'green';
  }

  onUserWasClicked(usrName: string){
     alert(`The username is ${usrName}`);
  }
}

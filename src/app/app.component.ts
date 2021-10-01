import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name: string = 'Vinicius';
  elements: number[] = [];
  message: string = '';
  hobbies: string[] = ['Sports', 'Cooking', 'Running'];
  inputHobby: string = '';
  hobbyDeleted: boolean = false;

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

  onAddHobby(){
     this.hobbies.push(this.inputHobby);
  }

  onRemoveHobby(hobby: string){
     const position = this.hobbies.indexOf(hobby);
     this.hobbies.splice(position, 1);
     this.hobbyDeleted = true;
  }
}

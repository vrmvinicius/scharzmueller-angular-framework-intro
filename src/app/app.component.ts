import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Vinicius';

  onChangeName(){
     this.name = "Vinicius Rafael Migliorança";
  }
}

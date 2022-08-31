import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice-angular-app';
  isOpen: boolean = true;
  onToggle():void{
    this.isOpen = !this.isOpen;
  }
}

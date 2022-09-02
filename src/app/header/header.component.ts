import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isOpen: boolean = false;

  @Output() newItemEvent = new EventEmitter<boolean>();

  addNewItem() {
    this.newItemEvent.emit();
  }

  constructor() { }



  ngOnInit(): void {
  }

}

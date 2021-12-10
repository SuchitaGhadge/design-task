import { Component, OnInit } from '@angular/core';
import {faFolder, faCalendar, faCommentAlt, faEdit, faAddressBook} from '@fortawesome/free-regular-svg-icons'
import {faAlignLeft} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  faFolder = faFolder;
  faCalendar = faCalendar;
  faCommentAlt = faCommentAlt;
  faEdit = faEdit;
  faAddressBook = faAddressBook;
  faAlignLeft = faAlignLeft;
  isExpanded: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log("clicked")
    this.isExpanded = !this.isExpanded;
  }
}

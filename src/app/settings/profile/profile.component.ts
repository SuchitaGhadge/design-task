import { Component, OnInit } from '@angular/core';
import {faListAlt, faBell} from '@fortawesome/free-regular-svg-icons'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  faListAlt = faListAlt;
  faBell = faBell;
  constructor() { }

  ngOnInit(): void {
  }

}

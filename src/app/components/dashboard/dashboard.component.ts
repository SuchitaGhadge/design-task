import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common'
import {faList} from '@fortawesome/free-solid-svg-icons'
import {faLongArrowAltRight, faSearch} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  faList = faList;
  faSearch = faSearch;
  faLongArrowAltRight = faLongArrowAltRight;
  currDate:any = new Date()
  constructor(public datePipe: DatePipe) { 
    this.currDate= this.datePipe.transform(this.currDate, "yyyy-MM-dd")
    console.log(this.currDate)
  }

  ngOnInit(): void {
  }

}

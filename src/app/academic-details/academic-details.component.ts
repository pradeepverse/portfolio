import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'academic-details',
  templateUrl: './academic-details.component.html',
  styleUrls: ['./academic-details.component.css']
})
export class AcademicDetailsComponent implements OnInit {

  faCalendar = faCalendarAlt;

  constructor() { }

  ngOnInit() {
  }

}

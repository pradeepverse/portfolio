import { Component, OnInit } from '@angular/core';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'professional-exp',
  templateUrl: './professional-exp.component.html',
  styleUrls: ['./professional-exp.component.css']
})
export class ProfessionalExpComponent implements OnInit {

  faCalendar = faCalendarAlt;

  constructor() { }

  ngOnInit() {
  }

}

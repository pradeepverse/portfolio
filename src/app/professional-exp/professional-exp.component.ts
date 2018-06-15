import { Component, OnInit } from '@angular/core';
import { faCalendarAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'professional-exp',
  templateUrl: './professional-exp.component.html',
  styleUrls: ['./professional-exp.component.css']
})
export class ProfessionalExpComponent implements OnInit {

  faCalendar = faCalendarAlt;
  faBuilding = faBuilding;

  constructor() { }

  ngOnInit() {
  }

}

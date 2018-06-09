import { Component, OnInit } from '@angular/core';
import { faBriefcase, faGraduationCap, faAngleDoubleDown, faGem, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  faBriefcase = faBriefcase;
  faGraduationCap = faGraduationCap;
  faAngleDoubleDown = faAngleDoubleDown;
  faGem = faGem;
  faClipboardList = faClipboardList;
  faGithub = faGithub;

  constructor() { }

  ngOnInit() {
  }

}

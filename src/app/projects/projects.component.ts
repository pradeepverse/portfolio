import { Component, OnInit } from '@angular/core';
import { faCode, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReadme } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  faCode = faCode;
  faPencilAlt = faPencilAlt;
  faReadme = faReadme;
  faGithub = faGithub;
  activeState = "dev";

  constructor() { }

  ngOnInit() {
  }

}

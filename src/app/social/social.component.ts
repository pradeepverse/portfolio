import { Component, OnInit } from '@angular/core';
import { faGithub, faTwitter, faDribbble, faLinkedin, faYoutube, faMedium } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  faGithub = faGithub;
  faTwitter = faTwitter;
  faDribbble = faDribbble;
  faLinkedin = faLinkedin;
  faYoutube = faYoutube;
  faMedium = faMedium;

  constructor() { }

  ngOnInit() {
  }

}

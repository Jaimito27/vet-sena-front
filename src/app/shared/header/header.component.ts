import { Component, OnInit } from '@angular/core';
import { Navigation } from '../interfaces/nav.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  links: Navigation[]=[
    {link: 'countries/by-capital', icon: 'keyboard_capslock_badge', name: 'Capital'},
    {link: 'countries/by-country', icon: 'flag', name: 'Pais'},
    {link: 'countries/by-region', icon: 'screenshot_region', name: 'Region'},
    ]
  ngOnInit() {
  }

}

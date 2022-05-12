import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus: NbMenuItem[] = [
    { title: 'Extracts', icon: 'list-outline', url: '/extracts' },
    { title: 'Transfer', icon: 'credit-card-outline', url: '/transfer' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

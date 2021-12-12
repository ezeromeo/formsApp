import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  route: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class SidemenuComponent {
  templateMenu: MenuItem[] = [
    { text: 'Basics', route: './template/basics' },
    { text: 'Dynamic', route: './template/dynamic' },
    { text: 'Switches', route: './template/switches' },
  ];

  reactiveMenu: MenuItem[] = [
    { text: 'Basics', route: './reactive/basics' },
    { text: 'Dynamic', route: './reactive/dynamic' },
    { text: 'Switches', route: './reactive/switches' },
  ];

  authMenu: MenuItem[] = [
    {
      text: 'Register',
      route: './auth/register',
    },
    {
      text: 'Login',
      route: './auth/login',
    },
  ];
}

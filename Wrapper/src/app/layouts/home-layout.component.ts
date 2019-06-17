import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-name',
    template: `
        <app-sidenav></app-sidenav>
        <router-outlet></router-outlet>
    `,
    styles: []
})
export class HomeLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}

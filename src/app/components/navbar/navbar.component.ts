import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}  sideBar(data: any) {
    console.log(data);
    console.log(data.classList);
      if (data.classList.contains('hidden')) {
        data.classList.add('lg:inline-flex');
      data.classList.add('flex');
      data.classList.remove('hidden');
      }
    else {
      data.classList.remove('lg:inline-flex');
      data.classList.remove('flex');
      data.classList.add('hidden');
      }
      console.log(data.classList);
    } 
  }


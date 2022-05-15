import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
    // isMenuOpened: boolean = false;
   }

  ngOnInit(): void {

    
  } 
  
    // toggleMenu(): void {
    //   this.isMenuOpened = !this.isMenuOpened;
    // }
}

// function Menu(e) {
//       let list = document.querySelector('ul');

//       e.name === 'menu' ? (e.name = "close", list?.classList.
//         add('top-[80px]'), list?.classList.add('opacity-100')
//       ) : e.name = "menu", list?.classList.remove('-top
//       [80px]'), list?.classList.remove('opacity-100')
//     }
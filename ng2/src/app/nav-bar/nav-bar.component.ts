import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  constructor() {}

  brandHover: boolean = false;

  ngOnInit() {
  }

  setHover(){
    this.brandHover = true;
  }

  removeHover(){
    this.brandHover = false;
  }
  
  closeNavBar(){
    $('.navbar-toggle:visible').click();
  };

}

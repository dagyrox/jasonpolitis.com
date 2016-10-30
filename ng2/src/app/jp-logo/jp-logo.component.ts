import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-jp-logo',
  templateUrl: 'jp-logo.component.html',
  styleUrls: ['jp-logo.component.css', '../../content/css/style.css']
})
export class JpLogoComponent implements OnInit {

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
  
  public closeNavBar(){
    $('.navbar-toggle:visible').click();
  };

}

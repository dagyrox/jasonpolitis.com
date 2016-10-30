import { Component, OnInit } from '@angular/core';
import { JpLogoComponent } from './../jp-logo/jp-logo.component';

@Component({
  moduleId: module.id,
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css', '../../content/css/style.css'],
  directives: [JpLogoComponent]
})

export class NavBarComponent implements OnInit {

  constructor() { }

  jpLogo: JpLogoComponent = new JpLogoComponent();

  ngOnInit() {
    
  }
  
  closeNavBar(){
    this.jpLogo.closeNavBar();
  };

}

import { Component, OnInit } from '@angular/core';
import { JpLogoComponent } from './../jp-logo/jp-logo.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css', '../../assets/css/style.css']
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

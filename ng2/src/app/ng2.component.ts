import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component'; 
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  moduleId: module.id,
  selector: 'ng2-app',
  templateUrl: 'ng2.component.html',
  styleUrls: ['ng2.component.css'],
  directives: [
    NavBarComponent, 
    IntroComponent, 
    AboutComponent, 
    ResumeComponent, 
    ContactComponent,
    FooterComponent
  ]
})
export class Ng2AppComponent {
  title = 'ng2 works great';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public categories;
  constructor() {}

  ngOnInit() {
    this.categories = [
      {icon: 'person-circle-outline', title: 'Profil', redirection: '/home'},
      {icon: 'ribbon-outline', title: 'Comptétences', redirection: '/competences'},
      {icon: 'school-outline', title: 'Formations', redirection: '/formations'},
      {icon: 'briefcase-outline', title: 'Experiences Pro', redirection: '/experiences'},
    ];
}
}

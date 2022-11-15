import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p>HEllo World!</p>`, INLINE TEMPLATE HTML
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
  // styles:[] INLINE STYLES
})
export class AppComponent {
  name = 'killshot';
  imgURL =
    'https://images.unsplash.com/photo-1668503714845-e5d67cc94f05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60';

  getName() {
    return this.name;
  }
}

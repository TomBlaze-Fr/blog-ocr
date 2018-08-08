import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, viverra risus massa nesciunt cras sed.',
      loveIts: 0,
      create_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, viverra risus massa nesciunt cras sed.',
      loveIts: 0,
      create_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, viverra risus massa nesciunt cras sed.',
      loveIts: 0,
      create_at: new Date()
    }
  ];

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() postTitle :string;
  @Input() postContent :string;
  @Input() postLoveIts :number;
  @Input() postCreateAt :string;

    onVoted(vote: string) {
      if (vote === 'good') {
        this.postLoveIts += 1;
      } else if (vote === 'bad') {
        this.postLoveIts -= 1;
      }
    }

    constructor() { }

    ngOnInit() {}

}

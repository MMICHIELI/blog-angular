import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() isAuth: boolean;
  @Input() post: PostModel;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if (this.post.loveIts > 0) {
      return 'green';
    } else if (this.post.loveIts < 0) {
      return 'red';
    }
  }

  loveIt() {
    this.post.loveIts++;
  }

  dontLoveIt() {
    this.post.loveIts--;
  }
}

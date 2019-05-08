import { Component } from '@angular/core';
import { PostModel } from './models/post.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'mon-app-blog';
    // Fake Authentication
    isAuth = false;

    // Array of posts
    posts: Array<PostModel> = [];

    constructor() {
        // tslint:disable:max-line-length
        this.posts.push(new PostModel('Mon 1er post', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`));
        this.posts.push(new PostModel('Mon 2nd post', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.`));
        this.posts.push(new PostModel('Encore un post', `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`));
        // tslint:enable:max-line-length
        // this.sortPosts();
        this.simulateAuthentication();
    }

    simulateAuthentication() {
        setTimeout(
            () => {
                this.isAuth = true;
            }, 4000
        );
    }

    sortPosts() {
        this.posts.sort((a, b) => {
            return a.loveIts - b.loveIts;
        });
    }
}

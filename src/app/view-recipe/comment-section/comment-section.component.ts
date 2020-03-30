import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {CommentService} from './comment.service';
import {Comment} from './comment.model';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  comments: Comment;
  commentDesc = '';
  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentService.getComments()
      .subscribe(responseData => {
        this.comments = responseData;
      }, error => {
        console.log(error);
        });
  }
  onComment(form: NgForm) {
    this.commentService.onComment(form);
    this.ngOnInit();
  }
  onDelete(id) {
    this.commentService.onDelete(id)
      .subscribe(
        responseData => {
        console.log('Delete success');
      });
    this.ngOnInit();
  }
}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback-create',
  templateUrl: './feedback-create.component.html',
  styleUrls: ['./feedback-create.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackCreateComponent implements OnInit {

  feedback = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveFeedback() {
    this.http.post('http://localhost:4201/feedback', this.feedback)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/feedback-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
} 
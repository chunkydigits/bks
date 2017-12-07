import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-feedback-detail',
  templateUrl: './feedback-detail.component.html',
  styleUrls: ['./feedback-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackDetailComponent implements OnInit {

  feedback = {};

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getFeedbackDetail(this.route.snapshot.params['id']);
  }

  getFeedbackDetail(id) {
    this.http.get('http://localhost:4201/feedback/'+id).subscribe(data => {
      this.feedback = data;
    });
  }

  deleteFeedback(id) {
    this.http.delete('http://localhost:4201/feedback/'+id)
      .subscribe(res => {
          this.router.navigate(['/feedbacks']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
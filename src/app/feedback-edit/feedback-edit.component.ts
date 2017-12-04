import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback-edit',
  templateUrl: './feedback-edit.component.html',
  styleUrls: ['./feedback-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FeedbackEditComponent implements OnInit {

  feedback = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getFeedback(this.route.snapshot.params['id']);
  }

  getFeedback(id) {
    this.http.get('/feedback/'+id).subscribe(data => {
      this.feedback = data;
    });
  }

  updateFeedback(id, data) {
    this.http.put('/feedback/'+id, data)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/feedback-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private http: HttpClient) { }

  feedbacks: any;

  ngOnInit() {
    this.http.get('http://localhost:4201/feedback').subscribe(data => {
      this.feedbacks = data;
    });
  }
}

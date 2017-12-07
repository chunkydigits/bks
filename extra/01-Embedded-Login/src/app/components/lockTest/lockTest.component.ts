import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth/auth.service';

@Component({
  selector: 'lock-test',
  templateUrl: './lockTest.component.html',
  styleUrls: ['./lockTest.component.css']
})
export class LockTestComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}

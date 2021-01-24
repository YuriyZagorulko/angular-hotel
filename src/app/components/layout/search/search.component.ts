import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  currentUrl = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }

}

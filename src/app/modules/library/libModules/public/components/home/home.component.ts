import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})//ts-ignore
export class HomeComponent implements OnInit {
constructor( private titleService: Title, private _route: ActivatedRoute){}
  ngOnInit(): void {
    this.titleService.setTitle(this._route.snapshot.data['title']);
  }

}

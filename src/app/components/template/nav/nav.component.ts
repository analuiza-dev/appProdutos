import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // @ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;

  constructor() { }

  ngOnInit(): void {
  }

}

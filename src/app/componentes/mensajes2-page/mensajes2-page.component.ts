import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mensajes2-page',
  templateUrl: './mensajes2-page.component.html',
  styleUrls: ['./mensajes2-page.component.scss']
})
export class Mensajes2PageComponent implements OnInit {
  data = { title: '', description: '' };

  software: boolean;
  pymes: boolean;
  ambiental: boolean;
  civil: boolean;
  manufactura: boolean;
  telematica: boolean;

  constructor() { }

  ngOnInit() {
  }

}

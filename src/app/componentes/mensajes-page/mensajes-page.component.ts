import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mensajes-page',
  templateUrl: './mensajes-page.component.html',
  styleUrls: ['./mensajes-page.component.scss']
})
export class MensajesPageComponent implements OnInit {
  title: string = '';
  desc: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  send(){
    console.log(this.title, this.desc);
    this.router.navigateByUrl('msj2');
  }

  

}

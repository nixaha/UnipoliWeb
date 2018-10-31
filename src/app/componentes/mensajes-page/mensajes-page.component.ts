import { Component, OnInit } from '@angular/core';
import { Mensajes2PageComponent } from '../../componentes/mensajes2-page/mensajes2-page.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mensajes-page',
  templateUrl: './mensajes-page.component.html',
  styleUrls: ['./mensajes-page.component.scss']
})
export class MensajesPageComponent implements OnInit {
  mensaje2:any = Mensajes2PageComponent;

  title: string = '';
  desc: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  send(){
    console.log(this.title, this.desc);
    this.router.navigateByUrl('msj2', {'title': this.title,'desc': this.desc});
  }

  

}

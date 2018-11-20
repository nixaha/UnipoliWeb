import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService } from '../../servicios/auth.service';


import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FlashMessagesService} from 'angular2-flash-messages';

export interface Mensaje { titulo: string; descripcion: string; fecha: Date;}

@Component({
  selector: 'app-mensajes-page',
  templateUrl: './mensajes-page.component.html',
  styleUrls: ['./mensajes-page.component.scss']
})
export class MensajesPageComponent implements OnInit {

  // private mensajesCollection: AngularFirestoreCollection<Mensaje>;
  mensajes: Observable<Mensaje[]>;
  msj: any = '';
  title = '';
  description = '';
  date = '';
  swMsj = true;
  irtMsj =true;
  itamMsj =true;
  pymesMsj =true;
  civilMsj =true;
  itmMsj =true; 
  Seleccion: boolean;

  constructor(private readonly afs: AngularFirestore, public authService: AuthService,
    public flashMensaje: FlashMessagesService, public router: Router) {
    }

  ngOnInit() {
    // this.mensajesCollection = afs.collection<Mensaje>('mensajes');
    // this.mensajes = this.mensajesCollection.valueChanges();
    // const mensaje: Mensaje = { titulo : this.titulo, descripcion : this.desc };
    // this.afs.collection('mensajes').doc(id).set(mensaje);
    }

  update(title: string, description: string, fecha: Date, e) {
    var date = new Date();
    console.log(date, "se supone que es la fecha");

     this.title = title;
     this.description = description;
     console.log(this.description, this.title);

     if (this.swMsj === true){
     const id = this.afs.createId();
     this.afs.collection('mensajesSW').doc(id).set({titulo : this.title, descripcion : this.description, fecha: date} );
     this.Seleccion = true; 
    }
    if (this.irtMsj === true){
      const id = this.afs.createId();
      this.afs.collection('mensajesIrt').doc(id).set({titulo : this.title, descripcion : this.description, fecha: date} );
      this.Seleccion = true;  
    }
     if (this.itamMsj === true){
      const id = this.afs.createId();
      this.afs.collection('mensajesItam').doc(id).set({titulo : this.title, descripcion : this.description, fecha: date} );
      this.Seleccion = true; 
    }
     if (this.pymesMsj === true){
      const id = this.afs.createId();
      this.afs.collection('mensajesPymes').doc(id).set({titulo : this.title, descripcion : this.description, fecha: date} );
      this.Seleccion = true;  
    }
     if (this.civilMsj === true){
      const id = this.afs.createId();
      this.afs.collection('mensajesCivil').doc(id).set({titulo : this.title, descripcion : this.description, fecha: date} );
      this.Seleccion = true;  
    }
     if (this.itmMsj === true){
      const id = this.afs.createId();
      this.afs.collection('mensajesItm').doc(id).set({titulo : this.title, descripcion : this.description, fecha: date} );
      this.Seleccion = true; 
    }

     if (this.Seleccion == true ) { 
       this.Seleccion = false; 
      this.flashMensaje.show('Mensaje enviado.',
      {cssClass: 'alert-success', timeout: 4000});
      this.router.navigate(['/msj']); 
     }else {
      this.flashMensaje.show('Debes seleccionar al menos una carrera.',
        {cssClass: 'alert-danger', timeout: 4000});
        this.router.navigate(['/msj']);
     }

  }


  activateISW(e){
    this.swMsj = e.target.checked;
    console.log(this.swMsj);
  }
  activateIRT(e){
    this.irtMsj = e.target.checked;
    console.log(this.irtMsj);
  }
  activateITAM(e){
    this.itamMsj = e.target.checked;
    console.log(this.itamMsj);
  }
  activatePYMES(e){
    this.pymesMsj = e.target.checked;
    console.log(this.pymesMsj);
  }
  activateCIVIL(e){
    this.civilMsj = e.target.checked;
    console.log(this.civilMsj);
  }
  activateITM(e){
    this.itmMsj= e.target.checked;
    console.log(this.itmMsj);
  }



  /*
  title: string = '';
  desc: string = '';

  titulo: string = '';
  descripcion: string = '';
  carrera: string = '';

  constructor(private router: Router, private readonly afs: AngularFirestore) {  
    this.carrera = this.navParams.get('carrera');

  switch (this.carrera) {
    case "ambiental": {
      this.noticiasCollection = afs.collection<MensajeISW>("MensajeAmbiental");
      this.noticias = this.noticiasCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as MensajeISW;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      break;
    }
    case "software": {
      this.noticiasCollection = afs.collection<MensajeISW>("MensajesSoftware");
      this.noticias = this.noticiasCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as MensajeISW;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      break;
    }
    case "pymes": {
      this.noticiasCollection = afs.collection<MensajeISW>("MensajesPymes");
      this.noticias = this.noticiasCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as MensajeISW;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      break;
    }
    case "manufactura": {
      this.noticiasCollection = afs.collection<MensajeISW>("MensajesManufactura");
      this.noticias = this.noticiasCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as MensajeISW;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      break;
    }
    case "civil": {
      this.noticiasCollection = afs.collection<MensajeISW>("MensajesCivil");
      this.noticias = this.noticiasCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as MensajeISW;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      break;
    }
    case "telematica": {
      this.noticiasCollection = afs.collection<MensajeISW>("MensajesTelematica");
      this.noticias = this.noticiasCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as MensajeISW;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
      break;
    }
  }

  try {
    this.titulo = this.navParams.get('titulo');
    this.descripcion = this.navParams.get('descripcion');

    console.log(this.titulo);

    if (this.titulo != "") {


      const id = this.afs.createId();
      const noticia: MensajeISW = { 'titulo': this.titulo, 'descripcion': this.descripcion, 'foto': RUTA };
      this.noticiasCollection.doc(id).set(noticia);
      this.navCtrl.push(VerDetallesPage, {
        id: noticia
      });
    }

  } catch{
    console.log("Algo salió mal...");

  }
}

detalles(_noticia: MensajeISW) {
  this.navCtrl.push(VerDetallesPage, {
    id: _noticia
  })

}

  ngOnInit() {
  }
  send(){
    console.log(this.title, this.desc);
    this.router.navigateByUrl('msj2');
  }*/
}

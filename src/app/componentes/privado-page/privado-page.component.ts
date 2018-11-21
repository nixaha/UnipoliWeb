import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../../firestore.service';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

//plugins angularfire2
import { Horario } from '../../../commons/horario';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import { createUrlResolverWithoutPackagePrefix } from '../../../../node_modules/@angular/compiler';
//import { AngularFireDatabase} from 'angularfire2/database'; 

@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
  styleUrls: ['./privado-page.component.scss'],
  //roviders:[AuthService]
})
export class PrivadoPageComponent implements OnInit {
 //imageUrl: string = "/assets/img/default.png";
 //fileToUpload: File = null;

 uploadProgress: Observable<number>;

 uploadURL: Observable<string>;
 data:any = '';
 subirHorarios: any;

 private horariosCollection: AngularFirestoreCollection<Horario>;
 horarios: Observable<Horario[]>;
 public newHorarioForm = new FormGroup({
  img: new FormControl(''),
  carrera: new FormControl('') 
});

  constructor(/*private imageService: AuthService,*/ private _storage: AngularFireStorage,
              public readonly afs: AngularFirestore,
              private firestoreService: FirestoreService) {
              
                this.newHorarioForm.setValue({
                  img: '',
                  carrera:''
                });

        
               // this.horariosCollection = afs.collection<Horario>('horarios');
              }


  ngOnInit() {
    this.horariosCollection = this.afs.collection<Horario>('horarios');
  }

  /*handleFileInput(file: FileList){
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event:any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Carrera, Grado, Grupo, Image){
    this.imageService.postFile(Carrera.value,Grado.value, Grupo.value,this.fileToUpload).subscribe(
      data =>{
        console.log('done');
        Carrera.value = null;
        Grado.value = null;
        Grupo.value = null;
        Image.value = null;
      }
    );
  }*/
  upload(event) {
    // Get input file
    const file = event.target.files[0];

    // Generate a random ID
    const randomId = Math.random().toString(36).substring(2);
    console.log(randomId);
    const filepath = `images/${randomId}`;

    const fileRef = this._storage.ref(filepath);

    // Upload image
    const task = this._storage.upload(filepath, file);

    // Observe percentage changes
    this.uploadProgress = task.percentageChanges();

    // Get notified when the download URL is available
    task.snapshotChanges().pipe( finalize(() => { 
      this.uploadURL = fileRef.getDownloadURL();
      this.subirHorarios = '' + fileRef.getDownloadURL().toString();
      console.log(fileRef.getDownloadURL())
    })
    ).subscribe();

    console.log("llego algo", fileRef);
    
  }

  public newHorario(form ) {
    this.uploadURL.subscribe(
      x => { 
        let data = {
          img: x,
          carrera: form.carrera
        }
        this.firestoreService.createHorario(data).then(() => {
          console.log('Documento creado exitósamente!');
          this.newHorarioForm.setValue({
            img: x,
            carrera:''
          });
        }, (error) => {
          console.error(error);
        });
      },
      err => console.log('Observable error: ' + err),
      () => console.log('Observable completo')
    );
    }
}

  



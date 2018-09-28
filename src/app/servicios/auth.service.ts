import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth, private http: HttpClient
  ) {}
  registerUser(email: string, pass: string) {
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
    err => reject (err));
    });
  }

  loginEmail(email: string, pass: string) {
    return new Promise((resolve, reject) =>{
      this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      .then( userData => resolve(userData),
    err => reject (err));
    });
  }

 getAuth(){
    return this.afAuth.authState.map(auth => auth);
  }

  logout(){
    return this.afAuth.auth.signOut();
  }

  postFile(Carrera:string, Grado:string, Grupo:string, fileToUpload: File){
    const endpoint = 'http://localhost:4200/home';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('ImageCarrera', Carrera);
    formData.append('ImageGrado', Grado);
    formData.append('ImageGrupo', Grupo);
    return this.http
    .post(endpoint, formData);
  }
}

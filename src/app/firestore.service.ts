import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  public createHorario(data: any) {
    return this.firestore.collection('horarios').add(data);
  }
   //Obtiene un gato
   public getHorario(documentId: string) {
    return this.firestore.collection('horarios').doc(documentId).snapshotChanges();
  }

  //Obtiene todos los gatos
  public getHorarios() {
    return this.firestore.collection('horarios').snapshotChanges();
  }
}

import { Component, OnInit } from '@angular/core';
import { Horario } from '../../../commons/horario';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';  
import { map } from 'rxjs/operators';
import {AuthService } from '../../servicios/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  
  constructor(private router: Router) { 
    /*/ Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child('mountains.jpg');

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('images/mountains.jpg');

// While the file names are the same, the references point to different files
mountainsRef.name === mountainImagesRef.name            // true
mountainsRef.fullPath === mountainImagesRef.fullPath    // false
 
var file = ... // use the Blob or File API
ref.put(file).then(function(snapshot) {
  console.log('Uploaded a blob or file!');
});

// Uint8Array
var bytes = new Uint8Array([0x48, 0x65, 0x6c, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21]);
ref.put(bytes).then(function(snapshot) {
  console.log('Uploaded an array!');
});

// Raw string is the default if no format is provided
var message = 'This is my message.';
ref.putString(message).then(function(snapshot) {
  console.log('Uploaded a raw string!');
});

// Base64 formatted string
var message = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
ref.putString(message, 'base64').then(function(snapshot) {
  console.log('Uploaded a base64 string!');
});

// Base64url formatted string
var message = '5b6p5Y-344GX44G-44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
ref.putString(message, 'base64url').then(function(snapshot) {
  console.log('Uploaded a base64url string!');
});

// Data URL string
var message = 'data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
ref.putString(message, 'data_url').then(function(snapshot) {
  console.log('Uploaded a data_url string!');
});

// Create file metadata including the content type
var metadata = {
  contentType: 'image/jpeg',
};

// Upload the file and metadata
var uploadTask = storageRef.child('images/mountains.jpg').put(file, metadata);

// Upload the file and metadata
var uploadTask = storageRef.child('images/mountains.jpg').put(file);

// Pause the upload
uploadTask.pause();

// Resume the upload
uploadTask.resume();

// Cancel the upload
uploadTask.cancel();*/
  }

  ngOnInit() {
  }

  send(){
    this.router.navigateByUrl('hor');
  }
  send1(){
    this.router.navigateByUrl('msj');
  }
}

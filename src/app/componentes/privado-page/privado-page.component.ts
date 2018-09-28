import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
  styleUrls: ['./privado-page.component.scss'],
  providers:[AuthService]
})
export class PrivadoPageComponent implements OnInit {
 imageUrl: string = "/assets/img/default.png";
 fileToUpload: File = null;


  constructor( private imageService: AuthService) {}

  ngOnInit() {
  }

  handleFileInput(file: FileList){
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
  }
  

}

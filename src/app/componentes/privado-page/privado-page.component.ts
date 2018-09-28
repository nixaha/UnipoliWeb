import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
  styleUrls: ['./privado-page.component.scss'],
  providers:[AuthService]
})
export class PrivadoPageComponent implements OnInit {
 imageUrl: string = "/assets/img/defaul.png";
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

  OnSubmit(Image){
    this.imageService.postFile(this.fileToUpload).subscribe(
      data =>{
        console.log('done');
        Image.value = null;
      }
    )
  }
  

}

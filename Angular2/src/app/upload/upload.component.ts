import { Component, OnInit } from '@angular/core';
import { NgClass, NgStyle} from '@angular/common';
import { FileUploader } from 'ng2-file-upload'

// const URL = '/api/';
const URL = 'http://localhost:56956/api/upload';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  
})
export class UploadComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;
  public hasAnotherDropZoneOver:boolean = false;
 
  public fileOverBase(e:any):void {
    this.hasBaseDropZoneOver = e;
  }
 
  public fileOverAnother(e:any):void {
    this.hasAnotherDropZoneOver = e;
  }
}

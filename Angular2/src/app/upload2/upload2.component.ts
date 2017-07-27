import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: 'app-upload2',
  templateUrl: './upload2.component.html',
  styleUrls: ['./upload2.component.css']
})
export class Upload2Component implements OnInit {
  attachmentId: any;
  
  form: FormGroup;
  public uploader: FileUploader;
  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    this.initUploader();
    //this.getVerificationTypes();    
  }

  initUploader() {
    this.uploader = new FileUploader({ url: "http://localhost:56956/api/upload" });
    this.uploader.onBuildItemForm = (item, form) => { form.append("attachmentId", this.attachmentId); };
    this.uploader.onCompleteAll = () => {
       // hide loader & reaload data if needed
    };
  } 

}

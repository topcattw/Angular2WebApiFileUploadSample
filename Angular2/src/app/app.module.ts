import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileUploader, FileDropDirective, FileSelectDirective } from 'ng2-file-upload';
import { FormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { Upload2Component } from './upload2/upload2.component';


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    FileDropDirective,
    FileSelectDirective,
    UploadComponent,
    Upload2Component
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
    
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

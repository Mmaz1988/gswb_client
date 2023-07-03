import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GswbVisComponent } from './gswb-vis/gswb-vis.component';
import { SemComponent } from './gswb-vis/sem/sem.component';
import { EditorComponent } from './editor/editor.component';
import { LogComponent } from './gswb-vis/log/log.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorContainerComponent } from './editor-container/editor-container.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GswbVisComponent,
    SemComponent,
    EditorComponent,
    LogComponent,
    EditorContainerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

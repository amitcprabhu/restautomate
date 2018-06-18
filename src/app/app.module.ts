import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatCheckboxModule, MatInputModule , MatCardModule, MatSelectModule} from '@angular/material';
import { HttpClientModule
} from '@angular/common/http';

import { HTTPService } from './Http-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
,
    // material modules
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [HTTPService],
  bootstrap: [AppComponent]
})
export class AppModule { }

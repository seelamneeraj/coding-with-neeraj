import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IntroductionToPythonComponent } from './topics/introduction-to-python/introduction-to-python.component';
import { DataTypesComponent } from './topics/data-types/data-types.component';
import { ControlStructuresComponent } from './topics/control-structures/control-structures.component';
import { FunctionsAndModulesComponent } from './topics/functions-and-modules/functions-and-modules.component';
import { ObjectOrientedProgrammingComponent } from './topics/object-oriented-programming/object-oriented-programming.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IntroductionToPythonComponent,
    DataTypesComponent,
    ControlStructuresComponent,
    FunctionsAndModulesComponent,
    ObjectOrientedProgrammingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { IntroductionToPythonComponent } from './topics/introduction-to-python/introduction-to-python.component';
import { DataTypesComponent } from './topics/data-types/data-types.component';
import { ControlStructuresComponent } from './topics/control-structures/control-structures.component';
import { FunctionsAndModulesComponent } from './topics/functions-and-modules/functions-and-modules.component';
import { ObjectOrientedProgrammingComponent } from './topics/object-oriented-programming/object-oriented-programming.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'topics/introduction-to-python', component: IntroductionToPythonComponent },
  { path: 'topics/data-types', component: DataTypesComponent },  // This is the correct route for DataTypesComponent
  { path: 'topics/control-structures', component: ControlStructuresComponent },
  { path: 'topics/functions-and-modules', component: FunctionsAndModulesComponent },
  { path: 'topics/object-oriented-programming', component: ObjectOrientedProgrammingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

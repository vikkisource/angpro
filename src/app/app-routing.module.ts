import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { DummyExeComponent } from './dummy-exe/dummy-exe.component';

const routes: Routes = [
   {path:'',component:DummyExeComponent},
  // {path:'user',component:ShowUserComponent},

  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

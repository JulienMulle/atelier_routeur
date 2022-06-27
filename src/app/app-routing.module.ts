import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesNotFoundComponent } from './pages-not-found/pages-not-found.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path:'home', component:HomeComponent},
  { path:'student/:studentName', component:StudentComponent},
  { path:'**', component:PagesNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

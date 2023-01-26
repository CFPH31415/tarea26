import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PermisosDingresoGuard } from './guards/permisos-dingreso.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [

  
  { path:'home', component:HomeComponent, canActivate:[PermisosDingresoGuard]},
  { path:'login', component:LoginComponent },
  { path:'', redirectTo:'login', pathMatch:'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

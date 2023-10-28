import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

import { MessiComponent } from "./components/messi/messi.component";
import { RonaldoComponent } from "./components/ronaldo/ronaldo.component";
import { JamesComponent } from './components/james/james.component';



const APP_ROUTES: Routes=[
    {path:'home',component:HomeComponent},
    {path:'messi',component:MessiComponent},
    {path:'ronaldo',component:RonaldoComponent},
    {path:'james',component:JamesComponent},
     {path:'**', pathMatch: 'full', redirectTo: 'home'},



];  
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
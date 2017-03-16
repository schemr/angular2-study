import { HomeComponent } from './home.component';
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from './user/user.component'

const APP_ROUTEER: Routes = [
    { path: 'user', component: UserComponent },
    { path: '', component: HomeComponent }
    
];

export const routing = RouterModule.forRoot(APP_ROUTEER)
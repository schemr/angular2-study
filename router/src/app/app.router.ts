import { USER_ROUTES } from './user/user.routes';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from './user/user.component'

const APP_ROUTEER: Routes = [
    { path: 'user/:id', component: UserComponent },
    { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
    { path: '', component: HomeComponent }
    
];

export const routing = RouterModule.forRoot(APP_ROUTEER)
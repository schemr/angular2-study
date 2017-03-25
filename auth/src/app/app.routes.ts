import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ProtectedComponent } from './protected/protected.component';
import { AuthGuard } from './auth.guard'; 

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/signup', pathMatch: 'full'},
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]}

];

export const routing = RouterModule.forRoot(APP_ROUTES);
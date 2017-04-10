import AppConstants from './app.constants';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../views/login/login.component';
import { UsersComponent } from '../views/users/users.component';
import {AppErrorComponent} from "../error/app.error.component";
import { UsersRegisterComponent } from '../views/users/users.register.component';
const appRoutes:Routes = [
    {
        path: AppConstants.ROUTER_LOGIN,
        component: LoginComponent
    },
    {
        path: AppConstants.ROUTER_USERS,
        component: UsersComponent
    },

    {
        path: AppConstants.ROUTER_ERROR + "/:message",
        component: AppErrorComponent
    },
    {
        path: AppConstants.ROUTER_REGISTER,
        component: UsersRegisterComponent
    },
];

export const Router = RouterModule.forRoot(appRoutes);

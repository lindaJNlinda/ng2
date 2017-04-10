/**
 * Created by linlin on 2017/4/6.
 */
import './users.component.scss';
import { Component, forwardRef, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../common/app.service'
import { AppComponent } from "../../base/app.component";
import { User } from '../../model/User'
import { Account } from "../../model/Account";
import { TimeSheetTask } from "../../model/TimeSheetTask";
import AppConstants from "../../base/app.constants"
@Component({
    selector: 'app-users',
    templateUrl: './users.register.component.html'
})
export class UsersRegisterComponent {

    private isLoading = false;
    private error = "";
    private users;

    constructor(@Inject(AppService) private appService : AppService,
                @Inject(Router) private router : Router,
                @Inject(forwardRef(()=> AppComponent)) private parent: AppComponent)
    {
    }

    public getUsers() {

    }

    public newUser(){

    }

    public editUser(user: User){

    }
}
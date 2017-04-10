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
    templateUrl: './users.component.html'
})
export class UsersComponent {

    private isLoading = false;
    private error = "";
    private users;

    constructor(@Inject(AppService) private appService : AppService,
                @Inject(Router) private router : Router,
                @Inject(forwardRef(()=> AppComponent)) private parent: AppComponent)
    {
    }
    ngOnInit():void {
        console.log(this.parent.user);
        this.getUsers();
    }
    public getUsers() {
        let vm = this;
        vm.error = '';
        vm.isLoading = true;

       this.appService.getUsers(this.parent.user,1).subscribe(
            res => {
                vm.users = res.json()['auth_members'];
                console.log(vm.users);
                vm.isLoading = false;
            },
            err => {
                vm.error = err.message;
                vm.isLoading = false;
            }
        )
    }

    public newUser(){

    }

    public editUser(user: User){

    }
}
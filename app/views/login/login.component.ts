import './login.component.scss';
import {Component, Inject, forwardRef, OnInit} from '@angular/core';
import { AppService } from '../../common/app.service';
import { User } from '../../model/User';
import {Router} from "@angular/router";
import {AppComponent} from "../../base/app.component";
import AppConstants from "../../base/app.constants";
import {Account} from "../../model/Account";

import { commonsInstances } from '../../model/Acommons';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
    private user;
    private error = '';
    private isLoading = false;
    private codetimer=60;
    private getCodeSuccess=false;
    private getCodeTimer;
    private iscode=false;
    constructor (
        @Inject(AppService) private appService : AppService,
        @Inject(Router) private router : Router,
        @Inject(forwardRef(()=> AppComponent)) private parent: AppComponent) {
        this.user = new User();
        this.user.account = new Account();

    }

    ngOnInit():void {
        //this.isLoading = true;
       let vm = this;
        this.appService.test().subscribe(
            res => {
                console.log(res.json());
            },
            err => {

            }
        )
    }
    public login(){
        let vm = this;
        vm.error = '';


        if(!commonsInstances.vmobile(this.user.account.mobile) ||　!commonsInstances.vcode(this.user.account.code)){
            vm.error = "手机号或者验证码错误!"
            return false;
        }
        vm.isLoading = true;
        this.appService.login(this.user).subscribe(
            res => {
                let data=res.json();
                if(data["errorCode"]!=0){
                    vm.error = data["errorMessage"]
                    vm.isLoading = false;
                    vm.isLoading = false;
                    return false;
                }

               let user = data["user"];

                sessionStorage.setItem(AppConstants.JIABEI_USER,JSON.stringify(data["user"]))
                user=user as User
                vm.parent.setUser(user);
                vm.isLoading = false;
                vm.router.navigate(['/'+AppConstants.ROUTER_USERS])
            },
            err => {
                vm.error = "Account or password is wrong!！！！！"
                vm.isLoading = false;
            }
        )
    }
    public getcode(){
        let vm = this;
        vm.error = '';
        if(!this.user.account.mobile || !commonsInstances.vmobile(this.user.account.mobile)){
            vm.error = "手机号有误!";
            return false;
        }
        vm.iscode = true;
        this.appService.code(this.user.account.mobile).subscribe(
            res => {
                var data = res.json();
                if(data["errorCode"]!=0){
                    vm.error = data["errorMessage"]
                    vm.iscode = false;
                }
                vm.codetimer=60;
                vm.getCodeSuccess=true;
                vm.getCodeTimer=setInterval(()=>{
                    vm.codetimer--;
                    if(vm.codetimer<0){
                        clearInterval(vm.getCodeTimer);
                        vm.getCodeSuccess=false;
                    }
                },1000)
                 vm.iscode = false;
            },
            err => {
                vm.error = "Account or password is wrong!"
                vm.iscode = false;
            }
        )
    }
}

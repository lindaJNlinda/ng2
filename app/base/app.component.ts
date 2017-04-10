import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import AppConstants from './app.constants'
import { User } from '../model/User'
import {AppService} from "../common/app.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(
        @Inject(Router) private router : Router,
        @Inject(ActivatedRoute) private activatedRoute : ActivatedRoute,
        @Inject(AppService) private appService : AppService) { }
    public user = new User();
    private loading = false;
    private routers = [
        {
            link : AppConstants.ROUTER_USERS,
            authority : '',
            children:[
                {
                link:AppConstants.ROUTER_USERS
                },
                {
                link:AppConstants.ROUTER_REGISTER
                }
            ]
        }
    ]

    ngOnInit():void {
        this.loading = true;
        let vm = this;
        this.getUser()
        if(this.user.member==null){
            this.router.navigate(['/'+AppConstants.ROUTER_LOGIN])
        }
    }
    public getUser = function(){
        this.user.member=JSON.parse(sessionStorage.getItem(AppConstants.JIABEI_USER))
    }
    public setUser = function(user){
        this.user.member=user;
    }
    public logout(){
        this.user.member=null
        sessionStorage.removeItem(AppConstants.JIABEI_USER)
        this.router.navigate(['/'+AppConstants.ROUTER_LOGIN])
    }
    public checkAuthority(){
        return this.loading ? 'all' : this.user.authority == 'all';
    }
}

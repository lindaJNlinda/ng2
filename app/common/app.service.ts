import {Injectable, Inject} from '@angular/core';
import {Http,Headers,Request,RequestMethod,RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
@Injectable()
export class AppService {
    constructor(@Inject(Http) private http : Http) {
        //delete this.http.defaults.headers.post['Content-type']
    }

    public createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', 'Basic ' +
            btoa('username:password'));
    }
    public saveUser(user) {
        return this.http.post("odoo/admin/users", user);
    }

    public getUser(id){
        return this.http.get("odoo/admin/users/" + id );
    }

    public getCurrentUser() {
        return this.http.get("odoo/admin/current-user");
    }

    public getUsers(user,page) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        console.log(user);
        let page1=page?page:1
        let username='123132343243';
        var body = "userID=" + user.member.userID+"&page="+page1;
        console.log(body);
        return this.http.post("http://testys.cn/api/user/getusers", body,{
            headers: headers
        });
    }

    public login(user){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        let username='123132343243';
        var body = "mobile=" + user.account.mobile+"&code="+user.account.code+"&source=3";
        return this.http.post("http://testys.cn/api/account/verify/login", body,{
            headers: headers
        });
    }
    public code(mobile){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var body = "mobile=" + mobile;
        return this.http.post("http://testys.cn/api/account/login/code",body,{
            headers: headers
        });
    }

    public logTime(date, ids){
        return this.http.post("odoo/admin/log-time", {
            date : date,
            userIds : ids
        })
    }
    public test(){
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var body = "";
        return this.http.post("http://testys.cn/api/activity/list",body,{
            headers: headers
        });
    }
}
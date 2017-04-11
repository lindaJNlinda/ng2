/**
 * Created by linlin on 2017/4/6.
 */
import './users.component.scss';
import { Component, forwardRef, Inject,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AppService } from '../../common/app.service'
import { AppComponent } from "../../base/app.component";
import { User } from '../../model/User'
import { Account } from "../../model/Account";
import { TimeSheetTask } from "../../model/TimeSheetTask";
import AppConstants from "../../base/app.constants"
import 'angular-chart.js/dist/angular-chart.js';
import  'angular-amap/dist/angular-amap.js';
/*import 'https://cache.amap.com/lbs/static/main1119.css" xmlns="http://www.w3.org/1999/html';
import 'https://webapi.amap.com/maps?v=1.3&key=3dc0d24d401640b9b8249da6c4dd5a72&plugin=AMap.Autocomplete';
import 'https://cache.amap.com/lbs/static/addToolbar.js';*/
declare var AMap;
@Component({
    selector: 'app-register',
    templateUrl: './users.register.component.html'
})
export class UsersRegisterComponent implements OnInit{

    private isLoading = false;
    private error = "";
    private users;
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    public barChartData:any[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    ];

    constructor(@Inject(AppService) private appService : AppService,
                @Inject(Router) private router : Router,
                @Inject(forwardRef(()=> AppComponent)) private parent: AppComponent)
    {
    }
    ngOnInit(){
        let contstainer=document.getElementById("map")
console.log(contstainer);
            let map = new AMap.Map(contstainer, {
                resizeEnable: true,
                zoom:11,
                center: [116.397428, 39.90923]
            });

        console.log(AMap);


        this.getUsers();
    }
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }
    public randomize():void {
        // Only Change 3 values
        let data = [
            Math.round(Math.random() * 100),
            59,
            80,
            (Math.random() * 100),
            56,
            (Math.random() * 100),
            40];
        let clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }
    public getUsers() {

    }

    public newUser(){

    }

    public editUser(user: User){

    }
}
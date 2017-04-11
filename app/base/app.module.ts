import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { FormsModule, NgForm }    from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy,PathLocationStrategy } from "@angular/common";
import { AppService } from '../common/app.service'
import { Router }        from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from "../views/login/login.component";
import { UsersComponent } from "../views/users/users.component";
import { LoadingButton } from "../common/app.common.loading-button";
import {AppErrorComponent} from "../error/app.error.component";
import { ChartsModule } from 'ng2-charts';
import { UsersRegisterComponent } from '../views/users/users.register.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Router,
        ChartsModule
    ],
    declarations: [//declarations：模块内部Components/Directives/Pipes的列表，声明一下这个模块内部成员
        AppComponent,
        LoginComponent,
        UsersComponent,
        LoadingButton,
        AppErrorComponent,
        UsersRegisterComponent
    ],
    providers: [//providers：指定应用程序的根级别需要使用的service
        AppService,
        //HashLocationStrategy - 支持“hash URL”风格。显示方式为：http://localhost:3000/#/search
        //PathLocationStrategy - 默认的策略，支持“HTML 5 pushState”风格。显示方式为： http://localhost:3000/searchs
        {provide: LocationStrategy, useClass: PathLocationStrategy}
    ],
    bootstrap: [AppComponent]//bootstrap：通常是app启动的根组件，一般只有一个component。bootstrap中的组件会自动被放入到entryComponents中。
})
export class AppModule {
}

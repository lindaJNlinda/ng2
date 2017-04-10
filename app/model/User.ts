import {Account} from "./Account";
import {TimeSheetTask} from "./TimeSheetTask";
export class User {
    public id : string;
    public name : string;
    public member: string
    public mobile : string;
    public account : Account;
    public authority : string;
    public mailAddress : string;
    public active : boolean;
    public selected : boolean;
    public timesheetTasks : TimeSheetTask[]
    constructor() {  }
}
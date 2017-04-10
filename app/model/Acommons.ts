/**
 * Created by linlin on 2017/4/5.
 */
class commons{
    public vregmobile=/^1[3|4|5|8|7]\d{9}$/;
    public vregcode=/^\d{4}$/;
    constructor() {  }
    public vmobile(m) {
        if(this.vregmobile.test(m)){
            return true;
        }
        return false;
    }
    public vcode(c) {
        if(this.vregcode.test(c)){
            return true;
        }
        return false;
    }

}
export const commonsInstances=new commons()
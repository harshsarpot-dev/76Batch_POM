// To provide common function/methods which are related to the whole application

import { BaseClass } from "./Baseclass";

export class CommonFun extends BaseClass{

    static async EnterURL(url : string ){
        await this.page.goto(url);
        console.log("user enter in page");
    }

    static async waitstm(){
        await this.page.waitForTimeout(2000);
        console.log("wait for 2 seconds");
        
    }

}
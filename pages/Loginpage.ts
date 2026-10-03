// To provide object/locator and method related to the login page 

import { BaseClass } from "../utils/Baseclass";

export class Loginpage extends BaseClass{

    /********************** object / Elocator */

    static username_field = "//input[@name='txtUserName']";
    static password_field = "//input[@name='txtPassword']";
    static Login_button = "//input[@name='Submit']";
    
    /********************* methods */
    static async login(username : string, password : string){

        await this.page.locator(this.username_field).fill(username);
        await this.page.locator(this.password_field).fill(password);
        await this.page.locator(this.Login_button).click();
        console.log("user login successfully");
    }

}
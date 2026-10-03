// To provide object/locator and method related to the logout page 

import { BaseClass } from "../utils/Baseclass";

export class Logoutpage extends BaseClass{

    /******************* object / Locator */

    static logout_button = "//a[@href='./index.php?ACT=logout']";

    /********************** Method */

    static async logout(){
        await this.page.locator(this.logout_button).click();
    }





}
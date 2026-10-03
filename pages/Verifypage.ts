// To provide object/locator and method related to the verifypage page 

import { expect } from "@playwright/test";
import { BaseClass } from "../utils/Baseclass";


export class Verifypage extends BaseClass{
    static async verifypagetitle(pagetitle : string){
        await expect(this.page).toHaveTitle(pagetitle)
        console.log("Title match")

    }
}   
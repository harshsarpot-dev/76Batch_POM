import { BaseClass } from "../utils/BaseClass";


export class Employemodule extends BaseClass{
    /**************** object / Elements */
    static frame_locator = "//iframe[@name='rightMenu']";
    static add_button = "//input[@value='Add']";
    static firstname_field = "//input[@name='txtEmpFirstName']";
    static lastname_field = "//input[@name='txtEmpLastName']";
    static save_button = "//input[@id='btnEdit']";

    /************** Methods */

    static async addemploye(firstname : string, lastname : string){
        const frame = this.page.frameLocator(this.frame_locator);
        await frame.locator(this.add_button).click();
        await frame.locator(this.firstname_field).fill(firstname);
        await frame.locator(this.lastname_field).fill(lastname);
        await frame.locator(this.save_button).click();

    }







}

import{test} from '@playwright/test';
import { BaseClass } from '../utils/BaseClass';
import { CommonFun } from '../utils/CommonFun';
import { Loginpage } from '../pages/Loginpage';
import { Verifypage } from '../pages/Verifypage';
import { Employemodule } from '../pages/Employemodule';
import { Logoutpage } from '../pages/Logoutpage';

test('TC002 validate the add employe', async ({page})=>{

    BaseClass.page = page;

    await CommonFun.EnterURL("https://sureshitacademy.in/hrms/login.php");
    await CommonFun.waitstm();
    await Loginpage.login("sureshit", "sureshit");
    await CommonFun.waitstm();
    await Verifypage.verifypagetitle("SureshIT");
    await CommonFun.waitstm();
    await Employemodule.addemploye("Jack", "Reacher");
    await CommonFun.waitstm();
    await Logoutpage.logout();
    await CommonFun.waitstm();




})
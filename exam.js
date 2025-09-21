import { bank } from "./Bank.js";

const myBank = new bank();
myBank.addCustomer("001", "สมชาย", "1234");
myBank.login("001", "1234");
myBank.deposit("001", 500);
myBank.withdraw("001", 200);
myBank.checkCustomer("001");

const prompt = require('prompt-sync')()

console.log("Welcome To PNB Bank ATM");

let username = prompt("Enter Your Name :>").toLowerCase()

let pin = Number(prompt("Enter Your PIN :>"))
if(username == "abdul"){
    if(pin == 1234){
        console.log("Login Successfully \nYour Welcome!!");
        console.log("Choose Option : \n1: Check Balance \n2: Withdraw Amount \n3: Deposit Amount \n4: Reset PIN");
        let user = prompt("Enter >> ")
        if(user == "1"){
            console.log("Your Bank Available Balance is Rs. 40,000");
        } else if(user == "2"){
            let amount = Number(prompt("Enter amount that you want to withdraw :> "))
            let enter_pin = Number(prompt("Enter your pin >> "))
            if(enter_pin == 1234){
                if(amount >= 500 && amount <= 40000){
                    console.log(`Take your amount ${amount} \nThank you!!`);
                    let check = prompt("Do you want to check your balance?? 1: Yes 2: No \nEnter >> ")
                    if(check == 1){
                        let left_money = 40000 - amount
                    console.log(`Your current balance is ${left_money} `);
                    }else{
                        console.log("Thank You!! \nVisit Again!")
                    }
                    
            }else if(amount > 40000){
                console.log("Sorry Your Bank balance is not enough !!");
            }else{
                console.log("Sorry You can withdraw above 500 hundreds!!");
            }
            }else{
                console.log("Sorry!! You have entered wrong PIN \nTry again!");
            }
            
        }else if(user == "3"){
            let depo = Number(prompt("How much money do you want to deposit ?? \nEnter >> "))
            let enter_pin = Number(prompt('Enter your PIN >> '))
            if(enter_pin==1234){
                 let depo_add = 40000 + depo
            console.log("Now Your current bank amount is ",depo_add);
            }else{
                console.log("Sorry!! You have entered wrong PIN \nTry again!");
            }
           
        }else{
            let current=Number(prompt("enter your current PIN >> "))
            if(current == 1234){
                let change = Number(prompt("enter your new PIN >>"))
                let change2 = Number(prompt("Again enter your new PIN >>"))
                if(change == change2){
                    let new_pin = change
                    console.log(`PIN changed Successfully!! \nYour current PIN is ${new_pin}`);
                }else{
                    console.log("Sorry!! Your PIN is not matched");
                }
            }else{
                console.log("Sorry!! Your current password is not correct");
                let enter = prompt("Enter your security code >> ")
                if(enter == "abd"){
                    console.log("Great!! Now You can change your PIN");
                    let change = Number(prompt("enter your new PIN >>"))
                let change2 = Number(prompt("Again enter your new PIN >>"))
                if(change == change2){
                    let new_pin = change
                    console.log(`PIN changed Successfully!! \nYour current PIN is ${new_pin}`);
                }else{
                    console.log("Sorry!! Your PIN is not matched");
                }
                }
            }
        }
     
    }else{
        console.log("Wrong Password!! \nPlease Check Your Password");
    }
      
    
}else{
    console.log('You have entered wrong username and password');
}
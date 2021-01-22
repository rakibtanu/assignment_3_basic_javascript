
// https://github.com/rakibtanu/assignment_3_basic_javascript


// kilometer To Meter

function kilometerToMeter(kilometer){
    var meter = 0;
    if(kilometer < 0 || kilometer == null ){
        meter = "Please Enter a Positive Number";
    }else{
        meter = kilometer*1000;
    }
    return meter;
}

var meter = kilometerToMeter(2);
console.log(meter);


// Budget calculator

function budgetCalculator(watch,mobile,laptop){
    var BudgetTotal = 0;
    if( watch < 0 || mobile < 0 || laptop < 0 ){
        BudgetTotal =" Quntity Can Not Be Nagetive ";
    }else{
        var BudgetWatch  = watch * 50;
        var BudgetMobile = mobile * 100;
        var BudgetLaptop = laptop * 500;
        BudgetTotal  = BudgetWatch + BudgetMobile + BudgetLaptop;
    }
    return BudgetTotal;
}
 
var budget = budgetCalculator(1,2,3);
console.log(budget);


//hotelCost

function hotelCost(day){
    var CostTotal = 0;  
    if(day <= 0 || day == null ){
        CostTotal = "Day Value Must Not Be Zero Or Negative";
    }else if(day <= 10){
        CostTotal = day*100;
    }else if(day <= 20){
        var cost = 10*100;
        var discountDay= day-10;
        var discountCost = discountDay*80;
        CostTotal = cost + discountCost;    
    }else{
        var cost = 10*100;
        var CostTwo = 10*80;
        var discountDay = day - 20;
        var discountCost = discountDay*50;
        CostTotal = cost + CostTwo +discountCost;   
    }
    return CostTotal;
}

var cost = hotelCost(10);
console.log(cost);


//MegaFriend 

function megaFriend(frindList){
    var letterCount = " ";
    if(friendList.length <= 0){
        letterCount = "Enter Friend List";
    }else{
        for (var i = 0; i < frindList.length; i++) {
            if (letterCount.length < frindList[i].length) {
                letterCount = frindList[i];
            }
        }
    }
    return letterCount;
}

var friendList = ['abdullah','khokon','sobuj','tutul'];
var result=(megaFriend(friendList));
console.log(result);
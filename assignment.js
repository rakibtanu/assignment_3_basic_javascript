
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

function budgetCalculator(tv,fridge,ac){
    var BudgetTotal = 0;
    if( tv < 0 || fridge < 0 || ac < 0 ){
        BudgetTotal =" Quntity can Not Be Nagetive ";
    }else{
        var tvBudget  = tv * 50;
        var fridgeBudget = fridge * 100;
        var acBudget = ac * 500;
        BudgetTotal  = tvBudget + fridgeBudget + acBudget;
    }
    return BudgetTotal;
}

// Zero Quantity Allowed

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
        var Cost2 = 10*80;
        var discountDay = day - 20;
        var discountCost = discountDay*50;
        CostTotal = cost + Cost2 +discountCost;   
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
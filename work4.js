
//第一题
const tipCalculator = bills => {    
    const tips = []
    const costs = []
    bills.forEach(bill =>
    {
    let tip;
    if (bill < 50)
    {
    tip = bill * 0.2    
    }else if (bill >= 50 && bill < 200){
    tip = bill * 0.15
    }else{
    tip = bill * 0.1
    }
    const cost = bill + tip
    tips.push(tip)
    costs.push(cost)
    })
    console.log(tips,costs)
    }
    tipCalculator([124,48,268])
    
    //第二题
let avg =function mean1(...sum){
    var sum = 0;
    var n= arguments.length;
    for(i=0;i<n;i++){
        sum += Number(arguments[i]);
    }
    return sum/n;
};
console.log("平均值："+ avg(5,5,6,9,7,7))





















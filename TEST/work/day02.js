//console.log("hello");

//这是一个单行注释

/**
 * @author：zhounan
 * @usage:调用方法。。。。。。*/

var strStudentName
strStudentName = 'zhounan'
strStudentName = 1
console.log(strStudentName)


let strName = 'zhounan',strLastName = 'js',nAge = 20
strName = 2
console.log(strName)

const isHuname = true
isHuname = false

console.log(typeof isHuname,typeof typeof isHuname)

let age = 20
console.log(typeof age)

let money = 0.1
console.log(typeof money)

let money1 = 0.1
let money2 = 0.2
let money3 = money1 + money2
console.log(money3.toPrecision(1))

let a = 'zhouannm'
let b = "zjaojdfh"

let a = (1,2,3,4,5)
console.log(a)

a = 1
b = 1
console.log(a == b)
console.log(undefined === null)

let age = 20
let a = (age >= 30? 'alder':'youth')
console.log(a)



//第一题
//mass = 体重 ， height = 身高 ， BMI = mass/(heigth*height)
// Markm = Mark 的体重 ，Markh = Mark 的身高
// Johnm = John 的体重 ，Johnh = John 的身高
// BMIM = Mark 的BMI值 ，BMIJ = John 的BMI值

//定义Mark与John的身体数据
Markm = 180 , Markh = 65.5;
Johnm = 185 , Johnh = 66;
//计算二人的BMI指数
BMIM = Markm / (Markh*Markh);
BMiJ = Johnm / (Johnh*Johnh);
//输出二人的BMI
console.log("Mark的BMI为："+BMIM);
console.log("John的BMI为："+BMiJ);
//比较二人的BMI
BMI = (BMIM > BMiJ?"Mark的BMI比John高":"Mark的BMI比John低");
console.log(BMI);

//第二题
//Mikescore,Mike队伍的得分 ， Johnscore = John队伍的得分 ， Maryscore = Mary队伍的得分
//AVGI = Mirk队伍的平均得分 ， AVGO = John队伍的平均得分 ， AVGA = Mary队伍的平均得分

//初始化各个队伍的得分
let Mikescore = [116,94,123]
let Johnscore = [89,120,103]
let Maryscore = [97,134,105]
//初始化各队总分
let ScoreI = 0;//Mike
let ScoreO = 0;//John
let ScoreA = 0;//Mary
//初始化平均分
let AVGI = 0;//Mike
let AVGO = 0;//John
let AVGA = 0;//Mary
//计算总分
for(let i = 0;i<Mikescore.length;i++){
    ScoreI = ScoreI + Mikescore[i]
}
for(let i = 0;i<Johnscore.length;i++){
    ScoreO = ScoreO + Johnscore[i]
}
for(let i = 0;i<Maryscore.length;i++){
    ScoreA = ScoreA + Maryscore[i]
}
//计算平均分
AVGI = ScoreI/Mikescore.length
console.log("Mike队的平均分为："+AVGI)
AVGO = ScoreO/Johnscore.length
console.log("John队的平均分为："+AVGO)
AVGA = ScoreA/Maryscore.length
console.log("Mary队的平均分为："+AVGA)
//判断哪个队伍获胜
if(AVGI > AVGO && AVGI >AVGA){
    console.log("Mike队伍获胜，得分为："+AVGI)
}else if(AVGO > AVGI && AVGO > AVGA){
    console.log("John队伍获胜，得分为："+AVGO)
}else if(AVGA > AVGO & AVGA > AVGI){
    console.log("Mary队伍获胜，得分为："+AVGA)
}else if(AVGI == AVGO && AVGI > AVGA){
    console.log("Mike队与John队同时获胜，得分为："+AVGI)
}else if(AVGI == AVGA && AVGI > AVGO){
    console.log("Mike队与Mary队同时获胜，得分为："+AVGI)
}else if(AVGO == AVGA & AVGO >AVGI){
    console.log("John队与Mary队同时获胜，得分为："+AVGO)
}else{
    console.log("三对平局，得分为："+AVGI)
}

//第三题
let str = "";
        for (let row = 1; row <= 4; row++) {

            for (let j = 1; j <= 4 - row; j++) {    
                str = str + " "                      
            } 
            for (let i = 1; i <= row; i++) {
                str = str + "* ";
            }
            str = str + "\n";
        }
        for (let row = 1; row <= 4; row++) {
            for (let j = 1; j <= row; j++) {         
                str = str + " " 
            } 
            for (let i = 1; i <= 4 - row; i++) {
                str = str + "* ";                       
            }
            str = str + "\n";
        }
        console.log(str);

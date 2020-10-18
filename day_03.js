//对象
let person = new Object();
person.name = 'zhounan';
person.age = 20;

let person = {};
person.name = 'zhounan';
person.age = 20;

let person = {
    name:'zhounan',age: 20
};

console.log(person.name);
console.log(person.age);
console.log(typeof person)

let person = new Object();
person.name = 'zhounan';
person.age = 20;
console.log(person.name);

//数组，有序的值列表、与其他语言不同的地方：数组的每个槽位可以储存任意类型的数据、动态大小

//定义数组
const myArray = [];//数组字面量表示法
const myArray = new Array();//数组构造器
//判断变量是否是数组
const myArray = []
console.log(typeof myArray)
console.log(myArray instanceof Array)

//数组初始化
const heroes = [];
console.log(heroes[0]);
heroes[0] = '蝙蝠侠';
heroes[1] = '神奇女侠';
heroes[2] = '闪电侠';
heroes[5] = '水行侠';
console.log(heroes);

//数组字面量
const avengers = ['美国队长','钢铁侠','雷神','绿巨人'];
console.log(avengers);

//不同类型的元素
const mixedArray = [null,1,[],'two',ture];
console.log(mixedArray);
//删除数组元素
const avengers =  ['美国队长','钢铁侠','雷神','绿巨人'];
delete avengers[2];
console.log(avengers);

//解构数组

//不使用解构
const foo = [2,3,4];
let a = foo[0];
let a = foo[1];
let c = foo[2];
console.log(`a = ${a}, b = ${b}, c = ${c}`);
// 使用解构
const foo = [1, 2, 3];
const [a, b, c] = foo;
console.log(`a = ${a}, b = ${b}, c = ${c}`);
// 再简化
const [a, b, c] = [1, 2, 3];
console.log(`a = ${a}, b = ${b}, c = ${c}`);

// 数组的属性和方法
//length 属性：得到数组的长度
const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
console.log(avengers.length);
console.log(avengers[avengers.length-1]);
avengers.length = 9;
console.log(avengers);
avengers.length = 3;
console.log(avengers);

//pop()：删掉数组中最后一个元素
//push()：将新值添加到数组的末尾
//shift()：删除数组中的第一个元素
//unshift()：将新值添加到数组的开头



// 数组的属性和方法
const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
avengers.pop();
console.log(avengers);
avengers.push('呵呵'); 
console.log(avengers);
avengers.shift();
console.log(avengers);
avengers.unshift("xixi");
console.log(avengers);

//concat()：数组合并
const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const heroes = ['蝙蝠侠','神奇女侠','闪电侠', '水行侠'];
const ah = avengers.concat(heroes);
console.log(ah);
console.log(avengers);
console.log(heroes);

// 扩展运算符（ES6新增）
const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const heroes = ['蝙蝠侠','神奇女侠','闪电侠', '水行侠'];
const ah = [...avengers,...heroes];
console.log(ah);

//join()：将一个数组变成一个组合了数组所有元素，并且元素之间用逗号分隔的字符串。
const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const a = avengers.join();
console.log(a);
const b = avengers.join(' & ');
console.log(b);

//slice()：从原始数组中切掉一片，从而创建一个子数组
const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const a = avengers.slice(2,3);
console.log(a);
console.log(avengers);
//splice()：从一个数组中删除元素，然后将新元素插入在被删除的元素的位置上。
const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
const b = avengers.splice(1,2,'蝙蝠侠');
console.log(b);
console.log(avengers);


// reverse()：反转数组中元素的次序， sort()：对数组中的元素按字母顺序进行排序，都是永久性改变！
const a = ['a','b','c','d'];
const b = a.reverse();
console.log(a);
console.log(b);

const c = [1, 2, 3, 4, 10, 9];
const d = c.sort();
console.log(d);
console.log(c);

// indexOf()：检测数组中是否包含一个特定值，如果找到了，就返回该值在数组中第一次出现的索引号，否则，就返回-1
// includes()：检测数组中是否包含特定值，如果找到了，就返回true，否则就返回false
const avengers = ['美国队长', '钢铁侠', '雷神', '绿巨人'];
console.log(avengers.indexOf('钢铁侠'));

console.log(avengers.includes('美国队长'));
console.log(avengers.includes('美国队长',3));

//多维数组
const coordinates = [[1,3],[4,2]]; 
console.log(coordinates);

console.log(coordinates[0][1]); // 第一个数组中的第二个值

const summer = ['Jun', 'Jul', 'Aug']; 
const winter = ['Dec', 'Jan', 'Feb']; 
const nested = [ summer, winter ]; 
console.log(nested);

const flat = [...summer, ...winter]; // 扁平化
console.log(flat);

//set，ES6 新增、表示唯一值的集合所以它不能包含重复值、不需要检查是否有重复值。快速方便地检、特定值是否在一个集合中，而这在数组中是比较慢的操作
const list = new Set();

list.add(1);
list.add(2);
list.add(3).add(4).add(5); // 链式用法
list.add(1); // 忽略重复值
console.log(list);

const list1 = new Set([1, 2, 3, 4, 5, 6]);
console.log(list1);

const list2 = new Set([7,7,7,7,7,8,8,8,9,9]);
console.log(list2); 

const list3 = new Set('hello');
console.log(list3);

const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4);

//set的属性和方法
//size：获取集合中值的数目。
// has()：可以用于检测一个值是否在集合中。
//delete()：从集合中删除一个值。
//clear()：删掉集合中的所有值。
const list4 = new Set().add('the').add('quick').add('brown').add('fox');
console.log(list4);

console.log(list4.size);

console.log(list4.has('the'));
console.log(list4.has('THE'));

list4.delete('the');
console.log(list4);

list4.clear();
console.log(list4);

//set与数组转换
const shoppingSet1 = new Set().add('Apples').add('Bananas').add('Beans'); 
const shoppingArray1 = [...shoppingSet1] 
console.log(shoppingArray1);

const shoppingSet2 = new Set().add('Apples').add('Bananas').add('Beans'); 
const shoppingArray2 = Array.from(shoppingSet2); 
console.log(shoppingArray2);
 // 数组去重
const duplicate = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5, 9]; 
const nonDuplicate = [...new Set(duplicate)]; 
console.log(nonDuplicate);

//WeakSet
let array = [1, 2, 3];
const strong = new Set().add(array); 
console.log(strong.has(array));
array = null; // 删除对原始对象的引用
array = [...strong][0]; 
console.log(array);

let array = [1, 2, 3];
const weak = new WeakSet().add(array);
console.log(weak.has(array));
array = null;
array = [...weak][0]; 
console.log(array);

//map 
//存储键-值对列表,ES6 新增语法,类似于其它编程语言中的词典或者哈希表。
const romanNumerals = new Map(); 
romanNumerals.set(1,'I'); 
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V'); 
console.log(romanNumerals);

//方法和属性
//size：获取键和值的数量
//get(key)：通过键获取值
//has(key)：检测一个特定键是否在映射中
//delete(key)：从映射中删除一个键值对
//clear()：从映射中删除所有键值对：

const romanNumerals = new Map(); 
romanNumerals.set(1,'I'); 
romanNumerals.set(2,'II').set(3,'III').set(4,'IV').set(5,'V'); 
console.log(romanNumerals);

console.log(romanNumerals.size);
console.log(romanNumerals.get(4));
console.log(romanNumerals.has(3));
console.log(romanNumerals.delete(1));
console.log(romanNumerals.size);
romanNumerals.clear();
console.log(romanNumerals.size);

//Map转换为数组
const romanNumerals = new Map(); 
romanNumerals.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V'); 
console.log(romanNumerals);
console.log(...romanNumerals); 
console.log(Array.from(romanNumerals));

//WeakMap
// WeakMap与WeakSet工作方式相同。
// 它与Map相同，只是键不能是基本数据类型的值，并且在对原始对象的引用被删除时，垃圾回收会自动删除所有死条目。


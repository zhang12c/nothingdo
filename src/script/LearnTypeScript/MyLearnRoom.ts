export class MyLearnRoom{
    constructor() {
        this.OnInit();
    }
    private OnInit(): void{
        this.MyVoid();
    }

    private MyArray():void{
        // 定义数组一：
        let arr1: number[] = [1,2,3]; // 数组，元素是number类型
        //arr1 = [4,5,6,4];
        // 定义数组二： 泛型
        let arr2: Array<number> = [10,23]

        let ar1: INewArray = [1,2,4]

    }

    private MyObject(): void{
        // 对象
        // object 表示非原始类型，除了number，string，boolean之外的类型
        let obj: object = {}
        //obj = 1; ❌
    }

    private MyAny(): void{
        // any 任何类型
        let h: any = 21;
        h = true;
        h = "123";
        h = {}
        h = []
        let newArr: any[] = [1,"2",true]
    }

    private MyVoid(): void{
        // void 空值 ，表示没有任何返回值的函数
        function fun1(): void{
            console.log("not return")
        }
        fun1();

        //
    }

    // ts 在没有明确的指定类型的时候推测一个类型
    private MyTypeCheck(): void{
        // 将t定义为number的类型进行类型推论
        let t = 13;
        //t = true;// ❌

        // 通过已经定义的内容自己推论出你的类型是什么
        let g;
        g = 1;
        g = "12";
        // 这时候g就是any的类型了。

    }

    // 取值可以为多种类型中的一种
    private MyConnType(): void{
        // f的变量是boolean 或者 number
        let f: boolean | number = true;
        f = 12; // 这时候f就是number了
    }

    // 接口的赋值
    private Tom: IPerson = {
        name: "Tom",
        age: 10,
    }

}
// 接口 对对象的约束
interface IPerson {
    name: string;
    age: number;
    // sex元素可有可无
    sex?: number;
}

// 数组
interface INewArray{
    [index: number]: number
}

// 约束
interface ISearchFunc{
    // (参数：类型)： 返回值类型
    (a: string,b: string): boolean
}

// 参数，返回值
const fun1: ISearchFunc = function (a,b): boolean{
    return a.search(b) !== -1;
}
//fun1("123","1")

// 函数声明，命名函数
function f1(a: number,b: number): number {
    return a+b;
}
// 匿名函数
let f2 = function (a: number,b: number) :number {
    return a + b;
}
// (a,b)多个参数需要括号括起来
// () => number
// 参数 => 返回值
let add1: (a: number,b: number) => number = function (a, b) {
    return a+b;
};
// 调用
f2(10,2);
f1(10,20);
add1(1,2);

// 可选参数和默认参数
// 必选参数不能位于可选参数之后
// 不然传参会很怪异
//getName("1",undefined,"z")
//let getName: (x: string,y?: string,z: string) => string = function (x, y, z) { return x+y+z;}

// 不定参数例子
function func1(x: number,y: number,... args: number[]) {
    console.log(x,y,args);
}
func1(1,2,4,5,7);

// 函数重载
// 同名不同参
// 函数重载声明，可以使用重载定义多个函数类型
function newAdd(x: number,y: number): number
function newAdd(x: string,y: string): string
// 函数的实现
function newAdd(x: number | string,y: number | string): (number | string) {
    if ((typeof x == "number") && (typeof y == "number")){
        return x + y;
    }else if ((typeof x == "string") && (typeof y == "string")){
        return (x + y).toString()
    }
}
console.log(newAdd("zhang","3"))
console.log(newAdd(1,2))

// 类型断言： 手动指定类型
// 2中方式
// 1. 变量 as 类型
// 2. <类型>变量

function GetLength(x: string | number): number {
    if ((x as string).length){ // 第一种
        return (<string>x).length; // 第二种
    }else{
        return x.toString().length;
    }
}

// 将任何一个类型断言为any，any类型是可以访问任何属性和方法的
//window.a = 10; // ❌
(window as any).a = 10; // ☑️
// 不推荐使用any,他会掩盖类型的错误

// 将any断言为一个具体的类型
function asd(x: any,y: any): any {
    return x + y;
}
let a = asd(1,2) as number // any => number

// 类型别名
type s = string // 类型起别名？好无语的用处
let str: s = "ss";
// 主要是用在联合类型。重复率很高的时候就可以利用
type all = string | number | boolean
let c: all = 123;
let d: all = true;

// 字符串字面量类型，用来约束。只能是某个字符串中的一个
type stringType = "a" | "b" | "c"
let names: stringType = "a"; // 这时候只能是3选1

// 元组 合并了不同类型的对象
// 数组里存2中类型的元素
let Tarr: [number,string] = [123,"a"];
// 添加内容，只可以是number 或 string
Tarr.push("124");
Tarr.push(124);

// 枚举类型给一组数值赋予名称
// 枚举有2种类型： 常数项和计算所得项
// 常数项：
enum NumberType {
    one , // 如果手动赋值 one = 1 ,则后续two 默认= 2，根据前面值自动递加的
    two, // 如果 one = 2, two = 1,three 就会覆盖one ⚠️
    three,
    four,
}
// 可以通过key 拿到value ，也可value 拿到 key
//for 遍历一下就知道了

// 计算所得：
enum AOI{
    teed,
    fees = "Feed".length,
    sevb = 6 // 这里必须赋值，因为无法预计算fees的值，也就无法确定自己的值
}

// 常数枚举
const enum ONO{
    o,
    b,
    j,
}
console.log(ONO.o)// 在编译之后，直接就是 ONO.o 会被删调，直接就是 0值替换了。不知道有啥用

// 外部枚举
declare enum OutEEm{
    a,b,c
}
console.log(OutEEm.a) // 和常数枚举一样，只保留值。

// 类 实现继承用
// 定义一个事物的抽象特点，包含成员和方法
class Person{
    name: string;
    age: number;
    constructor(name: string,age: number) { // 参数的属性也要写，否则就是any了，也不报错⚠️，容易出问题
        this.name = name;
        this.age = age;
    }
    public SayHi(): void{
        console.log("HI")
    }
}
let p = new Person("li",13); // new 的时候，会执行类中构造方法
p.SayHi();

// 继承
class Animal{
    name: string;
    age: number;
    constructor(name: string,age?: number) {
        this.name = name;
        this.age = age | 10;
    }
}
class Dog extends Animal{
    constructor(name) {
        super(name);
    }
}

// 存取器，控制对对象成员的访问
class Name{
    firstName: string;
    lastName: string;
    constructor(a: string, b: string) {
        this.firstName = a;
        this.lastName = b;
    }
    // 设置存取器
    get FullName(){
        return this.firstName + " " + this.lastName;
    }
    set FullName(value){
        let inputStr = value.split(" ");
        this.firstName = inputStr[0];
        this.lastName = inputStr[1];
    }
}

// 静态方法 和 静态成员 语法与C#相同

// public private protected 修饰符 语法与C#相同

// readonly修饰符

class  SD{
    //readonly  age: number ;
    // constructor(age: number) {
    //     this.age = age; // 在构造函数中可以赋值
    // }
    constructor(readonly age: number) { // 如果在age 这里加修饰符，那就不用在之前声明了

    }
    SyaAge(){
        //this.age = 10; // 会报错啦！
    }
}

// 抽象类 类似 C#
abstract class Y{
    name: string;
    protected constructor(name: string) {
        this.name = name;
    }
    abstract SayHi()// 只有名称，没有实体
}
//let Y = new Y("s"); // 不能被实例化
class  X extends Y{
    constructor(name: string) {
        super(name);
    }
    SayHi() { // 只能在子类里实例化
        console.log("Hi")
    }
}

const seg = new X("zhang");
seg.SayHi();

// 类的类型 赋值可以是： 类名来规范类
let sdv: X = new X("dve")

// 类和接口 联动
// 不同的对象有相同的行为
interface ICanSing{
    Sing(); // 方法 唱
}
interface ICanDance{
    Dance();
}
class P implements ICanSing,ICanDance { // person
    Dance() {
        console.log("Dance")
    }

    Sing() {
        console.log("Sing")
    }

}
class An implements ICanSing{
    Sing() {
        console.log("Animal Can Sing")
    } // Animal
}

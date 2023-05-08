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





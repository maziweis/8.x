var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = "\n<div>yo," + name + "</div>>\n";
var b = 1;
var c = ['xiaoming', 'xiaohong', 'xiaogang'];
var d = [1, 2, 3];
var e = true;
var f = [1, 'hello'];
var g = 1;
var i;
function fun() {
    alert('11');
}
var obj = { a: 1, b: 2 };
var add = function (_a) {
    var a = _a.a, b = _a.b;
    return a + b;
};
console.log(add(obj));
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log(this.name);
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, major) {
        var _this = _super.call(this, name) || this;
        _this.major = major;
        return _this;
    }
    Student.prototype.studentGreet = function () {
        return this.major + "xide" + this.name + "wenhao";
    };
    return Student;
}(Person));
var person1 = new Person('ren');
person1.greet();
var student = new Student('xiaoming', 'zhexue');
console.log(student.studentGreet());

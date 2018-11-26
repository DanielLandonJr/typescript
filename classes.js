var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        var _this = this;
        this.register = function () {
            console.log(_this.name + " is now registered");
        };
        this.name = name;
        this.email = email;
        this.age = age;
        console.log("User Created: " + name);
    }
    User.prototype.userInformation = function () {
        console.log("User: " + this.name + ", " + this.email + ", " + this.age);
    };
    return User;
}());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.userInformation = function () {
            _super.prototype.userInformation.call(_this);
        };
        _this.id = id;
        return _this;
    }
    return Member;
}(User));
var arthur = new User('Arthur Dent', 'adent@gmail.com', 32);
console.log(arthur.age);
arthur.register();
var mike = new Member(1, 'Mike', 'mike@gmail.com', 34);
mike.userInformation();

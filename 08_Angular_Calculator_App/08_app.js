var app = angular.module("CalculatorApp",[]);

app.controller("CalcAppCtrl",function () {
    this.operator = '+';
    this.result = "result";
    this.changeOperator = function (opr) {
        console.log("Button pressed is "+ opr);
        this.operator = opr;
    };
    this.findResults = function () {

        switch (this.operator){
            case '+':
                this.result = this.num1 + this.num2;
                break;
            case '-':
                this.result = this.num1 - this.num2;
                break;
            case '/':
                this.result = this.num1 / this.num2;
                break;
            case '*':
                this.result = this.num1 * this.num2;
                break;
            default:
                this.result = "result";
                break;
        }
    };
    this.clearAll = function () {
        this.num1 = "";
        this.num2 = "";
        this.operator = "+";
        this.result = "result";
    };
});
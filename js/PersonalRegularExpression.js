class RegularExpressionPersonal{
    constructor(value, flag){
        this.value = value;
        if(flag == "i"){
            this.caseSensitive = false;
        }
        else if(flag == "s"){
            this.caseSensitive = true;
        }
    }
    test(valueComparison){
        let booleanExpression;
        if(!this.caseSensitive){
            booleanExpression = this.value.toLowerCase().includes(valueComparison.toLowerCase())? true: false;
            return booleanExpression; 
        }
        else{
            booleanExpression = this.value.includes(valueComparison)? true: false;
            return booleanExpression;           
        }
    }
}

const valor = "Guilherme"
let rgExp = new RegularExpressionPersonal(valor, "s");

console.log(rgExp.test("gui"));
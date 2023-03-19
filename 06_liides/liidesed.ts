interface CalculatingFunction{
    calculate(x: number):number;
}


class CalculationsStore{
    protected inputs:number[]=[];
    protected outputs:number[]=[]   
    constructor(protected calculator:CalculatingFunction){}
    addInput(x:number){
        this.inputs.push(x);
        this.outputs.push(this.calculator.calculate(x));
    }
    getResult():string{
        let result:string[]=[];
        for(let index in this.inputs){
            result.push(this.inputs[index]+" - "+
                    this.outputs[index]);
        }
        return result.join("\n");
    }
}

class squareRoot implements CalculatingFunction{
	calculate(arv: number):number{
		return (Math.sqrt(arv));
	}
}

let converter2=new squareRoot();
let store2:CalculationsStore=new CalculationsStore(converter2);
store2.addInput(1);
store2.addInput(4);
store2.addInput(9);
store2.addInput(16);
store2.addInput(25);

console.log(store2.getResult());

/*
1 - 1
4 - 2
9 - 3
16 - 4
25 - 5
*/
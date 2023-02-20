class loomade_elukohad {	
    constructor(private elukoht:string){
    } 
	vaal():void {
	if (this.elukoht=="ookean"){console.log("Õige!");}
	else if (this.elukoht=="mets"){console.log("Vale!");}
	else if (this.elukoht=="kõrb"){console.log("Vale!");}
	else if (this.elukoht=="džungel"){console.log("Vale!");}
    else{console.log("Vale!");}
	}
	
	hunt():void {
	if (this.elukoht=="mets"){console.log("Õige!");}
	else if (this.elukoht=="ookean"){console.log("Vale!");}
	else if (this.elukoht=="kõrb"){console.log("Vale!");}
	else if (this.elukoht=="džungel"){console.log("Vale!");}
    else{console.log("Vale!");}
	}
}


let klaviatuur1=require("readline-sync");
let koht1:string = klaviatuur1.question("Vali vaala elukoht: [ookean][mets][kõrb][džungel]");
console.log(koht1);

let loomade_elukohad_instance1 = new loomade_elukohad(koht1);
loomade_elukohad_instance1.vaal();

let klaviatuur2=require("readline-sync");
let koht2:string = klaviatuur2.question("Vali hundi elukoht: [ookean][mets][kõrb][džungel]");
console.log(koht2);

let loomade_elukohad_instance2 = new loomade_elukohad(koht2);
loomade_elukohad_instance2.hunt();
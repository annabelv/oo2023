interface characters{
	getSumA(s:string):number;
	getSumP(s:string):number;
	getSumE(s:string):number;
}
interface words{	
	getSumWords(j:string):number;
	getSumA2(j:string):number;
	getEachA(j:string):number[];
}

export class countLetters implements characters{
	getSumA(s:string):number{
		let countA=0; 
		for(let i=0; i<s.length; i++){
		if (s[i]=='a'){countA++;}
		}
		return countA;
		
	}
	
	getSumP(s:string):number{
		let countP=0; 
		for(let i=0; i<s.length; i++){
		if (s[i]=='p'){countP++;}
		}
		return countP;
	}
	
	getSumE(s:string):number{
		let countE=0; 
		for(let i=0; i<s.length; i++){
		if (s[i]=='e'){countE++;}
		}
		return countE;
	}
}

export class lause implements words{
	getSumWords(j:string):number{
		let countW=1;
		for(let i = 0; i<j.length; i++){
			if (j[i]==' '){countW++;}
		}
		return countW;
	}
	getSumA2(j:string):number{
		let countA2=0; 
		for(let i=0; i<j.length; i++){
			if (j[i]=='a' || j[i]=='A'){countA2++;}
		}
		return countA2;		
	}
	
	getEachA():number[]{
		let sentence = "Aias sadas saia";
		let splitted = sentence.split(" ");
		let countA3 = 0;
		let tulemus:number[] = [];
		for(let word of splitted){
			for(let i=0; i<word.length; i++){		
				if (word[i]=='a' || word[i]=='A'){countA3++;}
			}
			tulemus.push(countA3);
			countA3 = 0;
		}return(tulemus);	
	}
}

let w = new lause;
console.log("Lauses on " + w.getSumWords("Aias sadas saia")+" sõna.")
let a = new lause;
console.log("Lauses esineb a-tähte " + a.getSumA2("Aias sadas saia")+" korda.")

let c = new lause;
console.log(c.getEachA());
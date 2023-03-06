/* Arve võib olla rohkem, need antakse ette kogumina. Arvud korrutatakse kokku ning võetakse niimitmes juur (astendaja pöördväärtus, Math.pow), kuimitu arvu oli.*/

let arvud:Array<number> = [1, 4, 7];
let a = 1;

function korrutis (arvud:Array<number>):number {	
	for (let i = 0; i < arvud.length; ++i) { 
	  a *= arvud[i]; 
	} 
	return (Math.pow(a, arvud.length));
}

console.log (korrutis(arvud))

//21952
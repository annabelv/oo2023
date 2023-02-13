//teisendame tunnid minutiteks

let klaviatuur=require("readline-sync")
let tunnid:number = klaviatuur.question("Palun sisesta tunnid: ")

function teisendus(tunnid:number):number {
	return tunnid*60
}

console.log("Sisestatud tunnid minutites on "+teisendus(tunnid));

/*Palun sisesta tunnid: 7
Sisestatud tunnid minutites on 420*/
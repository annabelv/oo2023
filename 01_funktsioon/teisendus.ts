//teisendame tunnid minutiteks

let klaviatuur=require("readline-sync")
let tunnid:number = klaviatuur.question("Palun sisesta tunnid: ")
console.log("Sisestatud tunnid minutites on "+tunnid*60);

/*Palun sisesta tunnid: 7
Sisestatud tunnid minutites on 420*/
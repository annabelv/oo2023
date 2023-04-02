import {dlToG} from "../junit";
import {gToDl} from "../junit";
import {dlToMl} from "../junit";
import {mlToDl} from "../junit";

let calcDL1:dlToG=null;
let calcG:gToDl=null;
let calcDL2:dlToMl=null;
let calcML:mlToDl=null;

beforeEach(() => {
    calcDL1=new dlToG();
	calcG=new gToDl();
	calcDL2=new dlToMl();
	calcML=new mlToDl();
});

test('a1', ()=>{
	expect(calcDL1.calculate(48)).toBe(4800);
});

test('a2', ()=>{
	expect(calcG.calculate(7400)).toBe(74);
});

test('a3', ()=>{
	expect(calcDL2.calculate(12)).toBe(1200);
});

test('a4', ()=>{
	expect(calcML.calculate(2600)).toBe(26);
});
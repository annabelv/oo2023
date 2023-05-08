import {countLetters} from "../tahed";
import {lause} from "../tahed";

let calc:countLetters = null;

beforeEach(() => {
    calc = new countLetters();
});

test('a1', ()=>{
	expect(calc.getSumA("pere")).toBe(0);
});

test('p1', ()=>{
	expect(calc.getSumP("pere")).toBe(1);
});

test('e1', ()=>{
	expect(calc.getSumE("pere")).toBe(2);
});


let count:lause = null;
beforeEach(() => {
    count = new lause();
});

test('a2', ()=>{
	expect(count.getSumA2("aias sadas saia")).toBe(6);
});

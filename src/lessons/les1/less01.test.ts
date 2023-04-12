import {sumMult} from './less01'

test('sum should be correct',()=>{
let a = 1;
let b = 2; 
let c = 3;
const result = sumMult(a, c);

expect(result).toBe(3);

})
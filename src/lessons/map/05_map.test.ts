import { ManType } from "./05";

let people: Array<ManType> = []

beforeEach(()=>{

people = [
    {name: 'Viktor Pod', age:45},
    {name: 'Tom Yana', age:48},
    {name: 'Baba Tanos', age:75}
];

})

test('shoul be a greeting messages', ()=>{
    const messeges = people.map(man => `Hello ${man.name.split(' ')[0]}. Welcome to IT-Incubator`)
    
    
    expect(messeges.length).toBe(3);
    expect(messeges[0]).toBe('Hello Viktor. Welcome to IT-Incubator')
    expect(messeges[1]).toBe('Hello Tom. Welcome to IT-Incubator')
    expect(messeges[2]).toBe('Hello Baba. Welcome to IT-Incubator')
})

type ManType = {
    name: string,
    age: number,
    lessons: Array<{title: string}>,
    address: {
        street: {
            title: string
        }
    }
}


let man: ManType;
beforeEach(()=>{
    man = {
        name: 'Andrew',
        age: 54,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Izumrydnaya'
            }
        }
    }
})

test('', ()=>{
 
// const age = man.age;
// const less1 = man.lessons;

const {age, lessons} = man;
const title = man.address.street.title

const a = man.age;
const l = man.lessons;

expect(a).toBe(54);
expect(l.length).toBe(2);
expect(title).toBe('Izumrydnaya')
})

test('', ()=>{
    const lsq = man.lessons[0];
    const ler = man.lessons[1];

    const[, ...ko] = man.lessons

    // expect(l1.title).toBe('1');
    // expect(l2.title).toBe('2');
    expect(ko[0]).toStrictEqual({title: '2'});
})
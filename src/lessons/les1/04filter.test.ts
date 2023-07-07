test('should take old man', ()=>{
    const ages = [22, 44, 65, 23, 98, 43];

    const predicate = (age: number)=>{
        return age > 90;
    };

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(98);
})
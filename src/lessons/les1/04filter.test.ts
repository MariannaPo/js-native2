// // test('should take old man', ()=>{
// //     const ages = [22, 44, 65, 23, 98, 43];

// //     const predicate = (age: number)=>{
// //         return age > 90;
// //     };

// //     const oldAges = ages.filter(predicate);

// //     expect(oldAges.length).toBe(1);
// //     expect(oldAges[0]).toBe(98);
// // })

// // test('shoul be correct price', ()=>{
// //     const courses = [
// //         {title: 'CSS', price:110},
// //         {title: 'JS', price:200},
// //         {title: 'REACT', price:150}];

// //         const chipPredicate =(course: CouesrPropsType)=>{
// //             return course.price < 160;
// //         };

// //         const lowPrice = courses.filter(chipPredicate);

// //         expect(lowPrice.length).toBe(2);
// //         expect(lowPrice[1].price).toBe(150);
// //         expect(lowPrice[0].price).toBe(110);
// // })


// // test('should be done', ()=>{
// //     const tasks=[
// //         {id: 1, title: 'Read', isDone: true},
// //         {id: 2, title: 'Wash dishes', isDone: true},
// //         {id: 3, title: 'Work', isDone: false},
// //         {id: 4, title: 'Dance', isDone: true},
// //         {id: 5, title: 'Sing', isDone: false},
// //     ]
// //     const doneHouseworkOk = tasks.filter(task => task.isDone)

   

// //         expect(doneHouseworkOk.length).toBe(3);
// //         expect(doneHouseworkOk[0].title).toBe('Read')
// //     }
// // )


// // test('should be done', ()=>{
// //     const housework=[
// //         {id: 1, title: 'Read', isDone: true},
// //         {id: 2, title: 'Wash dishes', isDone: true},
// //         {id: 3, title: 'Work', isDone: false},
// //         {id: 4, title: 'Dance', isDone: true},
// //         {id: 5, title: 'Sing', isDone: false},
// //     ]

// //     const doneHousework = (housework: any)=>{
// //         return housework.isDone === true;
// //     }

// //         const doneHouseworkOk = housework.filter(doneHousework);

// //         expect(doneHouseworkOk.length).toBe(3);
// //         expect(doneHouseworkOk[0].title).toBe('Read');
// //         expect(doneHouseworkOk[1].id).toBe(2);
// //         expect(doneHouseworkOk[2].isDone).toBe(true)
// //     }
// // )

// // test('should be uncompleted', ()=>{
// //     const housework=[
// //         {id: 1, title: 'Read', isDone: true},
// //         {id: 2, title: 'Wash dishes', isDone: true},
// //         {id: 3, title: 'Work', isDone: false},
// //         {id: 4, title: 'Dance', isDone: true},
// //         {id: 5, title: 'Sing', isDone: false},
// //     ]

// //     const doneHousework = (housework: any)=>{
// //         return housework.isDone === false;
// //     }

// //         const doneHouseworkOk = housework.filter(doneHousework);

// //         expect(doneHouseworkOk.length).toBe(2);
// //         expect(doneHouseworkOk[0].title).toBe('Work');
// //         expect(doneHouseworkOk[1].id).toBe(5);
// //         expect(doneHouseworkOk[1].isDone).toBe(false)
// //     }
// // )

// test('should be uncompleted', ()=>{
//     const housework=[
//         {id: 1, title: 'Read', isDone: true},
//         {id: 2, title: 'Wash dishes', isDone: true},
//         {id: 3, title: 'Work', isDone: false},
//         {id: 4, title: 'Dance', isDone: true},
//         {id: 5, title: 'Sing', isDone: false},
//     ]

//     const doneHouseworkOk = housework.filter(hw=>!hw.isDone)

//         expect(doneHouseworkOk.length).toBe(2);
//         expect(doneHouseworkOk[0].title).toBe('Work');
//         expect(doneHouseworkOk[1].id).toBe(5);
//         expect(doneHouseworkOk[1].isDone).toBe(false)
//     }
// )

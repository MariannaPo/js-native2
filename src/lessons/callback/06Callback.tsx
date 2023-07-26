import React, { ChangeEvent } from "react";

export const User = () => {

const giveMoney = () => {
    alert('you are have money')
}
const a = () => {
return window.setTimeout(giveMoney, 2000)
}

const depositMoney = () => {
    alert('until better times')
}

const moneyOnChachge = () => {
    console.log('changes made')
}

const focusLostHandler = () => {
    console.log('focus lost')
}

const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('age changed: ' + event?.currentTarget.value)
}


    return(
        <div>
                 <textarea 
            onChange={moneyOnChachge} 
            value={'Money 2000'} 
            onBlur={focusLostHandler}>
                Money 2000
                </textarea>
            <input value={'other card'}/>
            <input onChange={onAgeChanged} type="number"/>
            <button onClick={a}>give money</button>
            <button onClick={depositMoney}>deposit money</button>
        </div>
    )
}
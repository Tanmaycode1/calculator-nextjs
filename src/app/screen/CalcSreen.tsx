'use client'
import { useState } from "react"
import Buttons from "../components/Buttons"
import Display from "../components/Display"

const CalcSreen = () => {
    const [currentValue, setCurrentValue] = useState('0')
    const [firstValue, setFirstValue] = useState('0')
    const [Oprations, setOprations] = useState('')
    const [isChange, setIsChange] = useState(false)

    const changeHandler = (type:string, value:string) => {
        setCurrentValue(value)
    }

    const numberHandler = (value:string) => {

        if(isChange){
            setFirstValue(currentValue)
            setIsChange(false);
            setCurrentValue(value)
            return;
        }

        setCurrentValue(preValue => preValue === '0' ? value :
            preValue + value
        )
    }
    const opratorHandler = (value:string) => {
        if(Oprations !== ''){
            console.log('Oprators', Oprations)
            equalHandeler()
            setOprations(value)
            setIsChange(true)
            return;
        }
        if(currentValue !== '0' || value === '-') {
            setCurrentValue(currentValue);
            setOprations(value)
            setIsChange(true)
        }
    }
    
    const acHandler = () => {
        setCurrentValue('0')
        setFirstValue('0')
        setOprations('')
    }

    const PersentageHandler = () => {
        if(!Number(currentValue)){
            setCurrentValue((Number(currentValue) / 100).toString())
            return;
        };
        setCurrentValue((Number(firstValue)* Number(currentValue) / 100).toString())
    }

    const plusMinHandler = () => {
        setCurrentValue((Number(setCurrentValue)* -1 ).toString())
    }

    const equalHandeler = () => {
        const lastNumber = parseFloat(firstValue)
        const currentNumber = parseFloat(currentValue)
        let result;
        switch(Oprations){
            case '+':
                result = lastNumber + currentNumber
                break;
            case '-':
                result = lastNumber - currentNumber
                break    
            case '/':
                result = lastNumber / currentNumber
                break    
            case '*':
                result = lastNumber * currentNumber
                break   
             default:
                return;    
        }
        setCurrentValue(result.toString())
        setFirstValue(result.toString())
        setOprations('')
    }

    const dotHandler = () => {
        if(currentValue.includes('.')){
            return;
        };
        setCurrentValue(currentValue + '.')
    }

  return (
    <div className="flex flex-col w-full h-[90%] py-8 px-4 
    md:w-max md:border-neutral-600 md:rounded-lg ">
        <div className="h-44 grow flex justify-end items-end py-8 px-2 text-5xl">
            <Display value={currentValue}/>
        </div>

        <div className="grid aspect-[4/5]  grid-cols-4 grid-rows-5 gap-3 md:w-72 ">
          <Buttons value="AC" className="bg-neutral-300 text-black" 
          click={()=> acHandler()}/>
          <Buttons value="+/-" className="bg-neutral-300 text-black" 
          click={()=> plusMinHandler()}/>
          <Buttons value="%" className="bg-neutral-300 text-black" 
          click={()=> PersentageHandler()}/>
          <Buttons value="/" className="text-white" 
          click={()=> opratorHandler('/')}/>
          <Buttons value="7" className="bg-neutral-700 text-white" 
          click={()=> numberHandler('7')}/>
          <Buttons value="8" className="bg-neutral-700 text-white" 
          click={()=> numberHandler('8')}/>
          <Buttons value="9" className="bg-neutral-700 text-white" 
          click={()=> numberHandler('9')}/>
          <Buttons value="x" className="text-white" 
          click={()=> opratorHandler('*')}/>
          <Buttons value="4" className="bg-neutral-700 text-white" 
          click={()=> numberHandler('4')}/>
          <Buttons value="5" className="bg-neutral-700 text-white" 
          click={()=> numberHandler('5')}/>
          <Buttons value="6" className="bg-neutral-700 text-white" 
          click={()=> numberHandler('6')}/>
          <Buttons value="-" className="text-white" 
          click={()=> opratorHandler('-')}/>
          <Buttons value="1" className="bg-neutral-700 text-white" 
          click={()=> numberHandler('1')}/>
          <Buttons value="2" className="bg-neutral-700 text-white" 
          click={()=> numberHandler('2')}/>
          <Buttons value="3" className="bg-neutral-700 text-white" 
          click={()=> numberHandler('3')}/>
          <Buttons value="+" className="text-white" 
          click={()=> opratorHandler('+')}/>
          <Buttons value="0" className="bg-neutral-700 text-white col-span-2" 
          click={()=> numberHandler('0')}/>
          <Buttons value="." className="bg-neutral-700 text-white" 
          click={()=> dotHandler()}/>
          <Buttons value="=" className="text-white" 
          click={()=> equalHandeler()}/>

        </div>
    </div>
  )
}

export default CalcSreen

import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const [principle , setPrinciple] =useState("")
  const [rate , setRate] =useState("")
  const [year , setyear] =useState("")

  const [isPrinciple , setIsPrinciple] =useState(true)
  const [isRate , setIsRate] =useState(true)
  const [isYear , setIsyear] =useState(true)
  
  const [interest , setInterest] =useState(0)

  const validate=(e)=>{

    const {name,value} =e.target
    console.log(name);
    console.log(value);

    if(!!value.match('^[0-9]*$')){
      if(name =='principle'){
        setPrinciple(value)
        setIsPrinciple(true)

      }
      else if (name == 'rate'){
        setRate(value)
        setIsRate(true)
      }
      else{
        setyear(value)
        setIsyear(true)
      }
    }
    else{

      if(name =='principle'){
        setPrinciple(value)
        setIsPrinciple(false)

      }
      else if (name == 'rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setyear(value)
        setIsyear(false)
      }

    }
    
    
  }

  const handleReset=()=>{
    setPrinciple("")
    setRate("")
    setyear("")

    setIsPrinciple(true)
    setIsRate(true)
    setIsyear(true)
    setInterest(0)
  }

  const calculate=()=>{
    setInterest((principle*rate*year)/100)

  }


  return (
    <>
    <div className='bg-dark d-flex justify-content-center align-items-center' style={{height:'100vh',width:'100%'}}>
      <div className='bg-light p-5 rounded-2' style={{width:'500px'}}>
        <h1 className='text-center'>Simple Interest App</h1>
        <p>Calculate your simple interest Easily...</p>

        <div className='bg-warning p-3 mt-4 d-flex justify-content-center align-items-center rounded-2 flex-column' style={{height:'150px'}}>
          <h1>₹ {interest}</h1>
          <p>Total Simple Interest</p>

        </div>

        <div className='my-3'>
          <div className="mb-3">
          <TextField id="outlined-basic" className='w-100' value={principle} name='principle' label="Principle Amount" onChange={(e)=>validate(e)} variant="outlined"  />
            { isPrinciple==false && <p className='text-danger'>*Invalid Input</p>}
          </div>
          <div className="mb-3">
          <TextField id="outlined-basic" className='w-100' value={rate} name='rate' label="Rate of Interest" onChange={(e)=>validate(e)} variant="outlined" />
            {isRate==false && <p className='text-danger'>*Invalid Input</p>}
          </div>
          <div className="mb-3">
          <TextField id="outlined-basic" className='w-100' value={year} name='year' label="Year (yr)" onChange={(e)=>validate(e)} variant="outlined" />
          {isYear==false && <p className='text-danger'>*Invalid Input</p>}
          </div>

          <div className="mb-3 pt-4 d-flex justify-content-between">

          <Button variant="contained" style={{width:'190px'}}  color='success' className='p-4' disabled={isPrinciple && isRate && isYear ? false: true} onClick={calculate} >Calculate</Button>
          <Button variant="outlined" style={{width:'190px'}} className='p-4' onClick={handleReset} >Reset</Button>

          </div>
          

        </div>

      </div>

    </div>

    </>
  )
}

export default App

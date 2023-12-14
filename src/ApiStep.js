import {useState, useEffect} from 'react'
import { StatusPill } from './StatusPill'

export default function ApiStep({stepTitle, stepLabel, stepValue, status, hasStarted, setStepHasStarted}) {

  console.log(hasStarted)
  
  const [step, setStep] = useState(0)
  const [hasAlreadyRun, setHasAlreadyRun] = useState(false)

  const stepProps = {
    stepTitle: stepTitle,
    stepLabel: stepLabel,
    stepValue: stepValue,
    hasAlreadyRun: hasAlreadyRun,
    setStep,
    setStepHasStarted,
    setHasAlreadyRun,
  }

if (hasStarted && !hasAlreadyRun) {
  switch (step) {
    case 0: 
      return <NotStarted {...stepProps}/>

    case 1:
      return <InProgress {...stepProps}/>

    case 2: 
      return <Complete {...stepProps}/>

    default: 
      return <NotStarted {...stepProps}/>
  }
}

else if (!hasStarted) return <NotStarted {...stepProps}/>
else return <Complete {...stepProps}/>

}


function NotStarted({stepTitle, stepLabel, stepValue, setStep}) {

  const timer = setTimeout(() => {
    setStep(1)
  }, 800)

  return (
      <div className="api-step-container" style={{ filter: 'opacity(.5)' }}>
      <div className="top-row">
        <h1>{stepTitle}</h1>
        <StatusPill status={"Not Started"}/>
      </div>
      <div className='label-value-container'>
        <svg className='changing-dot' style={{filter: 'opacity(0)'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle className='blink' cx="10" cy="10" r="8" fill='#ffffff'/>
        </svg>
        <div className='label'>
          {stepLabel}
        </div>
          <code style={ {filter: 'opacity(0)' }}>
            <div className='value'>
              {stepValue}
            </div>
          </code>
      </div>
    </div>
  )

}

function InProgress({stepTitle, stepLabel, stepValue, setStep}) {

  const timer =  setTimeout(() => {
    setStep(2)
  }, 3000)

  return (
    <div className="api-step-container" >
      <div className="top-row">
        <h1>{stepTitle}</h1>
        <StatusPill status={"In Progress"}/>
      </div>
      <div className='label-value-container'>
        <svg className='changing-dot' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle className='blink' cx="10" cy="10" r="8" fill='#ffffff'/>
        </svg>
        <div className='label'>
          {stepLabel}
        </div>
          <code style={ {filter: 'opacity(0)' }}>
            <div className='value'>
              {stepValue}
            </div>
          </code>
      </div>
    </div>
  )
}

function Complete({stepTitle, stepLabel, stepValue, setStepHasStarted, setHasAlreadyRun, hasAlreadyRun}) {

  if (!hasAlreadyRun) {
    const timer = setTimeout(() => {
      setStepHasStarted([true, true])
      setHasAlreadyRun(true)
    }, 2000)
  }

  return (
      <div className="api-step-container" style={{border: '1px solid #a4fac1'}} >
      <div className="top-row">
        <h1>{stepTitle}</h1>
        <StatusPill status={"Complete"}/>
      </div>
      <div className='label-value-container'>
        <svg className='changing-dot' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" fill='#00CE21'/>
        </svg>
        <div className='label'>
          {stepLabel}
        </div>
          <code>
            <div className='value'>
              {stepValue}
            </div>
          </code>
      </div>
    </div>
  )
}
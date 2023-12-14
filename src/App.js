import './App.css';
import ApiStep from './ApiStep';
import { useState } from 'react';

function App() {

  const [stepHasStarted, setStepHasStarted ] = useState([true, false])

  const steps = [
    {
      title: "Processing Request",
      label: "Sending response",
      value: "Sent",
      active: false
    },
    {
      title: "Building API Response",
      label: "Fetching merchant gateway credentials",
      value: "Retrieved",
      active: false
    },
  ];
  
  const renderSteps = steps.map((step, index) => {
    return <ApiStep 
      key={step.title} 
      hasStarted={stepHasStarted[index]} //assigns a boolean  
      setStepHasStarted ={setStepHasStarted}
      stepTitle={step.title} 
      stepLabel={step.label} 
      stepValue={step.value}
      />
    });
  ;
  
  return (
    <div className='App'>
      {renderSteps}
    </div>
  );
}

export default App;
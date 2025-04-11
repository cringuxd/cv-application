import Form from './components/Form.jsx'
import Cover from './components/cv.jsx'
import { useState } from 'react';
import './App.css'

function App() {
  //two components: the form (header), the CV (container)
  const [inputs, setInputs] = useState({});

  return (
    <div className="container">
      <div className="header">
        <Form inputs={inputs} setInputs={setInputs} />
      </div>
      <div className="content">
      <Cover inputs={inputs} />
      </div>
    </div>
  )
}

export default App

import { useState } from 'react';

function Info({inputs = {}, handleChange}) {
    //const [name, setName] = useState("");
    //const [email, setEmail] = useState("");
    //const [number, setNumber] = useState("");

    return (
        <div>
            <div>
                <label>
                    <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange} 
                    />
                 </label>
            </div>
            <div>
                <label>
                    <input
                    type="text"
                    name="email"
                    value={inputs.email || ""}
                    onChange={handleChange} 
                    />
                 </label>
            </div>
            <div>
                <label>
                    <input
                    type="text"
                    name="number"
                    value={inputs.number || ""}
                    onChange={handleChange} 
                    />
                 </label>
            </div>
        </div> 
    );
}

function Education({inputs  = {}, handleChange}) {
    //const [name, setName] = useState("");
    //const [major, setMajor] = useState("");
    //const [gradDate, setGradDate] = useState("");

    return (
        <div>
            <div>
                <label>
                    <input
                    type="text"
                    name="eduname"
                    value={inputs.eduname || ""}
                    onChange={handleChange} 
                    />
                 </label>
            </div>
            <div>
                <label>
                    <input
                    type="text"
                    name="major"
                    value={inputs.major || ""}
                    onChange={handleChange} 
                    />
                 </label>
            </div>
            <div>
                <label>
                    <input
                    type="text"
                    name="gradDate"
                    value={inputs.gradDate || ""}
                    onChange={handleChange} 
                    />
                 </label>
            </div>
        </div> 
    ); 
}

function Experience({inputs  = {}, handleChange}) {
    //const [compName, setCompName] = useState("");
    //const [title, setTitle] = useState("");
    //const [workDate, setWorkDate] = useState("");

    return (
        <div>
            <div>
                <label>
                    <input
                    type="text"
                    name="compName"
                    value={inputs.compName || ""}
                    onChange={handleChange} 
                    />
                 </label>
            </div>
            <div>
                <label>
                    <input
                    type="text"
                    name="title"
                    value={inputs.title || ""}
                    onChange={handleChange} 
                    />
                 </label>
            </div>
            <div>
                <label>
                    <input
                    type="text"
                    name="workDate"
                    value={inputs.workDate || ""}
                    onChange={handleChange} 
                    />
                 </label>
            </div>
        </div> 
    );
}

export default function Form() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
        <Info inputs={inputs} handleChange={handleChange} />
        <Education inputs={inputs} handleChange={handleChange} />
        <Experience inputs={inputs} handleChange={handleChange} />
        <button>Edit</button>
        <button type="submit">Submit</button>
        </form>
    );
    
}
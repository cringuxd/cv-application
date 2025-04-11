import { useState } from 'react';
import '../styles/Form.css';

function Info({inputs = {}, handleChange}) {
    return (
        <div>
            <div>
                <label>
                    Name:
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
                    Email:
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
                    Phone Number:
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
    return (
        <div>
            <div>
                <label>
                    University:
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
                    Major:
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
                    Graduation Date:
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
    return (
        <div>
            <div>
                <label>
                    Company Name:
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
                    Job Title:
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
                    Date of Work: 
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

function FormButton({display, edit, buttonName}) {
    if(display == true) {
        return(
            <button onClick={edit} >{buttonName}</button>
        );
    }
    else {
        return(<></>);
    }
}

export default function Form({inputs, setInputs}) {

    const [edit, setEdit] = useState(false);
    const [submit, setSubmit] = useState(true);
    const [formView, setFormView] = useState(true);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const submitButton = (event) => {
        event.preventDefault();
        setEdit(true);
        setSubmit(false);
        setFormView(false);
    }

    const editButton = (event) => {
        event.preventDefault();
        setSubmit(true);
        setEdit(false);
        setFormView(true);
    }

    if(formView == true) {
        return (
            <form>
            <Info inputs={inputs} handleChange={handleChange} />
            <Education inputs={inputs} handleChange={handleChange} />
            <Experience inputs={inputs} handleChange={handleChange} />
            <FormButton display={edit} edit={editButton} buttonName ="Edit" />
            <FormButton display={submit} edit={submitButton} buttonName="Submit" />
            </form>
        );
    }
    else {
        return(
            <FormButton display={edit} edit={editButton} buttonName ="Edit" />
        );
    }
    
}
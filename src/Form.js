import React from 'react'


const Form = (props) =>{

    const { changeForm, values, submit, disabled, formErrors } = props;

    const onChange = (evt) =>{
        let valueToBeUsed = null;
        if (evt.target.type !== "checkbox"){
            valueToBeUsed = evt.target.value
        } else {
            valueToBeUsed = evt.target.checked
        }
        changeForm(evt.target.name, valueToBeUsed);
    }

    const onSubmit = (evt) =>{
        evt.preventDefault();
        submit();
    }

    return (
        <div className="formContainer">
            <h3>Time for you to build a pizza!</h3>
            <label>
                Create your Pizza.
                <form id="pizza-form" onSubmit={onSubmit}>



                        <label>
                            Name: 
                            <input id="name-input" name="name" type="text" placeholder="Fill out your Name" onChange={onChange} value={values.name} />
                        </label>
                        
                        
                        <label>
                            Choice of Size: 
                            <select id="size-dropdown" name="size" onChange={onChange} value={values.size}>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select> 
                        </label>


                        <label>
                            Choose your toppings:  
                            <label> Onions <input name="onions" type="checkbox" checked={values.onions} onChange={onChange} /></label>
                            <label> Sasuage <input name="sasuage" type="checkbox" checked={values.sasuage} onChange={onChange} /></label>
                            <label> Mushrooms <input name="mushrooms" type="checkbox" checked={values.mushrooms} onChange={onChange}/></label>
                            <label> Bacon <input name="bacon" type="checkbox" checked={values.bacon} onChange={onChange}/></label>
                        </label>
                    
                        <label>
                            Special Instructions:  
                            <input type="text" name="special" id="special-text" placeholder="No Cheese, etc." onChange={onChange} value={values.special} />
                        </label>
                        <div className="errorDiv">{formErrors.name}</div>
                        <button id="order-button" disabled={disabled}>Submit!</button>
                    
                </form>
            </label>
            
        </div>
    )
}


export default Form
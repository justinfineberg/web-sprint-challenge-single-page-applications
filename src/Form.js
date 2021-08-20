import React from 'react'


const Form = () =>{

    return (
        <div className="formContainer">
            <h3>Time for you to build a pizza!</h3>
            <label>
                Create your Pizza.
                <form id="pizza-form">



                        <label>
                            Name:
                            <input name="name" type="text" placeholder="Fill out your Name" />
                        </label>
                        
                        
                        <label>
                            Choice of Size:
                            <select name="size">
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select> 
                        </label>


                        <label>
                            Choose your toppings: 
                            <label> Onions <input name="onions" type="checkbox" /></label>
                            <label> Sasuage <input name="sasuage" type="checkbox" /></label>
                            <label> Mushrooms <input name="mushrooms" type="checkbox" /></label>
                            <label> Bacon <input name="bacon" type="checkbox" /></label>
                        </label>
                    
                        <label>
                            Special Instructions: 
                            <input type="text" name="special" id="special-text" placeholder="No Cheese, etc." />
                        </label>
                        <button>Submit!</button>
                    
                </form>
            </label>
            
        </div>
    )
}


export default Form
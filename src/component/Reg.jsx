import React from 'react'
import  '../styles/Styles.css';

const Reg = () => {
  return (
    
    <div className='container'>
    <fieldset>
      <legend>Register Here </legend>
      <form>
    
    <br />
    <input type="text" placeholder='First Name'/>
    <br />
    <input type="text" placeholder='Surname'/>
    <br />
    <input type="email" placeholder='Email'/>
    <br />
    <input type="Date" placeholder='Date of birth'/>
    <br />
    <select className='Select'>
        <option className='x'>..Select..</option>
        <option>Male</option>
        <option>Female</option>
    </select>
    <br />
    <br />
   <input className='box' type="Checkbox" />I agree with all terms and conditions
    <br />
    <button>Submit</button>

    </form>
    </fieldset>
</div>

  )
}

export default Reg
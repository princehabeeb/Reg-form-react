import React from 'react'
import  '../styles/Styles.css';

const Reg = () => {
  return (
    
    <div className='container'>
      <form>
    <h1>Registration Page</h1>
    <input type="text" placeholder='First Name'/>
    <br />
    <input type="text" placeholder='Surname'/>
    <br />
    <input type="email" placeholder='Email'/>
    <br />
    <input type="number" placeholder='Date of birth'/>
    <br />
    <select name="" id="">
        <option>..select..</option>
        <option>Male</option>
        <option>Female</option>
    </select>
    <br />
   <input className='box' type="Checkbox" />
      I agree with all terms and conditions <br />
    <button>Submit</button>

    </form>
</div>

  )
}

export default Reg
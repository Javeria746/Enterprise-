import React from 'react'
import {useFormik} from 'formik'

    
function YoutubeForm() {
    const initialValues = {
        name : '',
        email : '',
        channel : ''
    }

    const onSubmit = values =>  {
        //     return ( <h2>{formik.values}</h2>)
           console.log('form data', values)
         }

    const validate = values => {
        // values.name, values.email, values,channel
        // errors.name errors.email errors.channel
        // errors.name = this field is required
        let errors = {}
        if(!values.name){
            errors.name = 'required'
        }
        if(!values.email){
            errors.email = 'required'
        }
        if(!values.channel){
            errors.channel = 'required'
        }
        return errors
    }
    const formik =  useFormik({
        initialValues ,
        onSubmit,
        validate
    })
  //  console.log('form values', formik.values)
  return (
    <div>        
        <form onSubmit={formik.handleSubmit}>  
              <label htmlFor='name'>Name</label>
              <input type='text'
               id='name' 
               name='name' 
               onChange={formik.handleChange}
               value = {formik.values.name}/>
    
          
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email'  onChange={formik.handleChange}
               value = {formik.values.email} />
              

            
              <label htmlFor='channel '>Channel</label>
              <input
                type='text'
                id='channel'
                name='channel'
                placeholder='YouTube channel name'
                onChange={formik.handleChange}
                value = {formik.values.channel}

              />
              
              <button type='submit'>Submit</button>

            </form>
    </div>
  )
}

export default YoutubeForm
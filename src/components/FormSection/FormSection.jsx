import './FormSectionVariables.css'
import './FormSectionStyles.css'
import './FormSectionQueries.css'

import HeadingTwo from '../HeadingTwo/HeadingTwo'
import HeadingThree from '../HeadingThree/HeadingThree'

import Button from '../Button/Button'
import { useState } from 'react';
import * as Yup from 'yup'

function FormSection(){
    const maxChar = 100;

    // Objects that contains the form data
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: ""
    })

    // Contains the error
    const [errors, setErrors] = useState({});

    const validateSchema = Yup.object({
        fullName: Yup.string()
            .min(2, "Full name should be a minimum of 2 characters long")
            .max(50, "Full name can only be a maximum of 50 characters long")
            .required("Full Name is required"),

        email: Yup.string()
            .email("Invalid email format")
            .required("Email is required"),

        phoneNumber: Yup.string()
            .matches(/^0\d{10}$/, "Phone number must start with 0 and be 11 digits")
            .required("Phone Number is required"),

        message: Yup.string()
            .max(maxChar, `Message can not exceed ${maxChar} characters`)
            .required("Message is required"),
    })

    // As users types, get the values from all fields with onChange call
    // re-assigned their values to the formData fields
    const handleChange = (event) => {
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    // Submit function
    const submit = async (event) => {
        // Prevents the browser from refreshing when button is clicked to submit form data
        event.preventDefault(); 

        try{
            // abortEarly false does not throw error but returns the promise
            await validateSchema.validate(formData, {abortEarly: false})
            
            // Clear any existing errors if validation passes
            setErrors({});

            // 1. Console log the values to ensure everything looks correct (per instruction #1)
            console.log("Validating values before posting:", formData);

            // 2. Convert form data to application/x-www-form-urlencoded (per instruction #2)
            const urlEncodedData = new URLSearchParams(formData);

            // Submit data to the assignment endpoint
            const response = await fetch('https://whitebricks.com/tsacademy.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: urlEncodedData
            });

            // 3. Look out for the response object and check the response text (per instruction #3)
            const responseText = await response.text();
            console.log("Server Response Text:", responseText);

            if (response.status === 200) {
                console.log("Form Submitted Successfully with Status 200");

                // Form has been submitted, true
                setIsSubmitted(true);
                
                // Clear form inputs after successful submission
                setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
            } else {
                console.error(`Submission failed with status: ${response.status}`);
            }

        } catch(yupErrors){
            const newErrors = {}

            yupErrors.inner.forEach(yupError => {
                newErrors[yupError.path] = yupError.message;
            });

            setErrors(newErrors);
        }
    }

    // Tracks if the form has been successfully sent to the server
    const [isSubmitted, setIsSubmitted] = useState(false);

    return(
        <section className="main-section form-section">
            <HeadingTwo 
                className="form-heading" 
                title="Have Questions About Planetary Science?" 
                description="Interested in learning more about space, astronomy, or how planetary date is 
                    collected or analyzed? Reach out and we'll get back to you."/>

            {isSubmitted ?
                <div className="submission-container">
                    <HeadingThree 
                        title="Thank you!" 
                        description="Your message has been successfully submitted. We will get back to you soon."/>
                    
                    <Button className="btn-success btn-long" type='button' onClick={() => setIsSubmitted(false)}>
                        Send Another Message
                    </Button>
                </div> :

                <form onSubmit={submit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="fullName" className='important'>Full Name</label>
                            <input type="text" id="fullName" name="fullName" placeholder="Full Name" 
                                value={formData.fullName} onChange={handleChange}/>

                            {errors.fullName && <span className='error'>{errors.fullName}</span>}
                        </div> 

                        <div className="form-group">
                            <label htmlFor="email" className='important'>Email</label>
                            <input type="text" id="email" name="email" placeholder="example@example.com" 
                                value={formData.email} onChange={handleChange}/>

                            {errors.email && <span className='error'>{errors.email}</span>}
                        </div>    

                        <div className="form-group">
                            <label htmlFor="phoneNumber" className='important'>Phone Number</label>
                            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Please Enter a Valid Phone Number" 
                                value={formData.phoneNumber} onChange={handleChange}/>

                            {errors.phoneNumber && <span className='error'>{errors.phoneNumber}</span>}
                        </div>                    
                            
                        <div className="form-group full-width">
                            <label htmlFor="message" className='important'>Message</label>
                            <textarea name="message" id="message" placeholder="Enter Your Message" maxLength={maxChar} 
                                value={formData.message} onChange={handleChange}></textarea>

                            <div className='error-max'>
                                {errors.message && <span className='error show'>{errors.message}</span>}
                                <span className='max-char'>{maxChar} characters</span>
                            </div>
                        </div>   
                    </div>

                    <Button className="btn-long" type='submit'/>
                </form>
            }
            
        </section>
    )
}

export default FormSection
import './FormSection.css'

import HeadingTwo from '../../components/HeadingTwo/HeadingTwo'
import HeadingThree from '../../components/HeadingThree/HeadingThree'
import MainSection from '../../components/MainSection/MainSection'

import Button from '../../components/Button/Button'
import { useState } from 'react';
import * as Yup from 'yup'

function FormSection(){
    const maxChar = 100;
    const nameMin = 2;
    const nameMax = 50;

    // Objects that contains the form data
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        message: ""
    })

    // Contains the error
    const [errors, setErrors] = useState({});

    // Tracks if the form has been successfully sent to the server
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Tracks submission and internet status loading phases
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [internetError, setInternetError] = useState("");

    const validateSchema = Yup.object({
        fullName: Yup.string()
            .min(nameMin, `Full name should be a minimum of ${nameMin} characters long`)
            .max(nameMax, `Full name can only be a maximum of ${nameMax} characters long`)
            .required("Full Name is required"),

        email: Yup.string()
            .email("Invalid email format: sample@gmail.com")
            .required("Email is required"),

        phoneNumber: Yup.string()
            .matches(/^(0|\+234)[789][01]\d{8}$/, "Enter valid Nigerian number: 09168800272 or +2349168800272")
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

        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    }

    // Submit function
    const submit = async (event) => {
        // Prevents the browser from refreshing when button is clicked to submit form data
        event.preventDefault(); 

        // Reset any previous internet status alert banner
        setInternetError("");

        // Check if the client device has a live internet connection
        if (!navigator.onLine) {
            setInternetError("No internet connection detected. Please check your network connection and try again.");
            return;
        }

        try{
            // abortEarly false does not throw error but returns the promise
            await validateSchema.validate(formData, {abortEarly: false})
            
            // Clear any existing errors if validation passes
            setErrors({});
            setIsSubmitting(true);

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

            if (yupErrors.inner) {
                yupErrors.inner.forEach(yupError => {
                    newErrors[yupError.path] = yupError.message;
                });
            }

            setErrors(newErrors);
        } finally {
            setIsSubmitting(false);
        }
    }

    return(
        <MainSection className="form-section" id="form-section-id" aria-label="Contact and Inquiry Form">
            <HeadingTwo 
                className="form-heading" 
                title="Have Questions About Planetary Science?" 
                description="Interested in learning more about space, astronomy, or how planetary date is collected or analyzed? Reach out and we'll get back to you."
            />

            {/* Live region container to broadcast updates dynamically */}
            <div aria-live="assertive" aria-atomic="true">
                {internetError && (
                    <div className="network-alert-banner" role="alert">
                        <p>{internetError}</p>
                    </div>
                )}

                {isSubmitted ?
                    <div className="submission-container" role="status">
                        <HeadingThree className='submission-successful'
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
                                <input 
                                    type="text" 
                                    id="fullName" 
                                    name="fullName" 
                                    placeholder="Full Name" 
                                    value={formData.fullName} 
                                    required 
                                    maxLength={nameMax} 
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    aria-invalid={errors.fullName ? "true" : "false"}
                                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                                />

                                {errors.fullName && <span className='error' id="fullName-error" role="alert">{errors.fullName}</span>}
                            </div> 

                            <div className="form-group">
                                <label htmlFor="email" className='important'>Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    placeholder="example@example.com" 
                                    value={formData.email} 
                                    required 
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    aria-invalid={errors.email ? "true" : "false"}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                />

                                {errors.email && <span className='error' id="email-error" role="alert">{errors.email}</span>}
                            </div>    

                            <div className="form-group">
                                <label htmlFor="phoneNumber" className='important'>Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phoneNumber" 
                                    name="phoneNumber" 
                                    placeholder="Enter valid Nigerian number: 09168800272 or +2349168800272" 
                                    value={formData.phoneNumber} 
                                    maxLength={14} 
                                    required 
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    aria-invalid={errors.phoneNumber ? "true" : "false"}
                                    aria-describedby={errors.phoneNumber ? "phoneNumber-error" : undefined}
                                />

                                {errors.phoneNumber && <span className='error' id="phoneNumber-error" role="alert">{errors.phoneNumber}</span>}
                            </div>                    
                                
                            <div className="form-group full-width">
                                <label htmlFor="message" className='important'>Message</label>
                                <textarea 
                                    name="message" 
                                    id="message" 
                                    placeholder="Enter Your Message" 
                                    maxLength={maxChar} 
                                    value={formData.message} 
                                    required 
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    aria-invalid={errors.message ? "true" : "false"}
                                    aria-describedby={errors.message ? "message-error message-count" : "message-count"}
                                ></textarea>

                                <div className='error-max'>
                                    {errors.message && <span className='error' id="message-error" role="alert">{errors.message}</span>}
                                    <p className='max-char' id="message-count" aria-live="polite">
                                        {maxChar - formData.message.length} characters remaining
                                    </p>
                                </div>
                            </div>   
                        </div>

                        <Button className="btn-long" type='submit' disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                }
            </div>
        </MainSection>
    )
}

export default FormSection;
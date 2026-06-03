import './FormSectionVariables.css'
import './FormSectionStyles.css'
import './FormSectionQueries.css'

function FormSection(){
    return(
        <section className="main-section form-section">
            <div className="form-container">
                <h2 className="section-heading">Have Questions About Planetary Science?</h2>
                <p className="section-description">
                    Interested in learning more about space, astronomy , or how planetary date is collected or analyzed? Reach out and we wi'll get back to you.
                </p>

                <form id="contact-form">
                   <div className="form-grid">
                        <div color="form-group">
                            <label htmlFor="fullname">Full Name <span className="required">*</span></label>
                            <input type="text" id="fullName" placeholder="fullName" required />
                        </div>

                    <div className="form-group">
                        <label htmlFor="email">Email <span className="required">*</span></label>
                        <input type="email" id="email" name="email" placeholder="example@example.com" required />
                    </div>    

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                        <input type="tel" id="phone" name="phone" placeholder="Please Enter a Valid Phone Number" required />
                    </div>                    
                        
                    <div className="form-group full-width">
                        <label htmlFor="message">Message <span className="required">*</span></label>
                        <textarea name="message" id="message" placeholder="Enter Your Message" maxLength="100"></textarea>
                        <small>100 characters</small>
                    </div>   

                    </div>

                    <button typeof="submit" className="submit-btn">Submit  </button>
                </form>
            </div>

        </section>

    )
}

export default FormSection
import { useState } from "react";

function UserForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [touched, setTouched] = useState({});

    // Validate active inputs on the fly or on submit
    const validate = (fieldsToValidate = formData) => {
        const tempErrors = { ...errors };

        if ("name" in fieldsToValidate) {
            const name = fieldsToValidate.name.trim();
            if (!name) {
                tempErrors.name = "Name is required";
            } else if (name.length < 2) {
                tempErrors.name = "Name must be at least 2 characters";
            } else {
                delete tempErrors.name;
            }
        }

        if ("email" in fieldsToValidate) {
            const email = fieldsToValidate.email.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email) {
                tempErrors.email = "Email is required";
            } else if (!emailRegex.test(email)) {
                tempErrors.email = "Please enter a valid email address";
            } else {
                delete tempErrors.email;
            }
        }

        if ("message" in fieldsToValidate) {
            const message = fieldsToValidate.message.trim();
            if (!message) {
                tempErrors.message = "Message is required";
            } else if (message.length < 10) {
                tempErrors.message = "Message must be at least 10 characters";
            } else {
                delete tempErrors.message;
            }
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updatedFields = { ...formData, [name]: value };
        setFormData(updatedFields);

        // Only show validation errors for fields the user has interacted with
        if (touched[name]) {
            validate({ [name]: value });
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched({ ...touched, [name]: true });
        validate({ [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Mark all fields as touched on submit
        const allTouched = { name: true, email: true, message: true };
        setTouched(allTouched);

        const isValid = validate();
        if (!isValid) return;

        setStatus("loading");

        // Simulate database submission network delay (1.2s)
        try {
            await new Promise((resolve) => setTimeout(resolve, 1200));

            /* 
               LATER DEVELOPMENT (DB Connection ):
               const response = await fetch("http://localhost:5000/users", {
                   method: "POST",
                   headers: { "Content-Type": "application/json" },
                   body: JSON.stringify(formData)
               });
               if (!response.ok) throw new Error("Server error");
               const data = await response.json();
            */

            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
            setErrors({});
            setTouched({});
        } catch (error) {
            console.error("Submission failed:", error);
            setStatus("error");
        }
    };

    const handleReset = () => {
        setStatus("idle");
    };

    if (status === "success") {
        return (
            <div className="form-container">
                <div className="form-card success-card" role="alert">
                    <div className="checkmark-container">
                        <svg className="checkmark-svg" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                    </div>
                    <div>
                        <h2 className="success-title">Thank You!</h2>
                        <p className="success-desc">
                            Your message has been successfully submitted. We appreciate you reaching out to support SHE Foundation.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="reset-btn"
                        id="form-success-reset-btn"
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="form-container">
            <div className="form-card">
                <div className="form-header">
                    <div className="brand-badge">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        SHE Foundation
                    </div>
                    <h1 className="form-title">Get In Touch</h1>
                    <p className="form-subtitle">
                        Have a question, feedback, or want to partner with us? Leave a message below, and our team will get back to you shortly.
                    </p>
                </div>

                {status === "error" && (
                    <div className="field-error-text" style={{ textAlign: "center", marginBottom: "1rem" }} role="alert">
                        Something went wrong during submission. Please try again.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="contact-form" id="contact-us-form" noValidate>
                    {/* Name Field */}
                    <div className="input-group">
                        <div className="label-container">
                            <label htmlFor="user-name" className="form-label">
                                Full Name<span className="required-star">*</span>
                            </label>
                            {touched.name && errors.name && (
                                <span className="field-error-text" id="name-error">{errors.name}</span>
                            )}
                        </div>
                        <input
                            type="text"
                            id="user-name"
                            name="name"
                            placeholder="e.g. Jane Doe"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`form-input ${touched.name && errors.name ? "is-invalid" : ""}`}
                            aria-required="true"
                            aria-invalid={touched.name && errors.name ? "true" : "false"}
                            aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                            disabled={status === "loading"}
                        />
                    </div>

                    {/* Email Field */}
                    <div className="input-group">
                        <div className="label-container">
                            <label htmlFor="user-email" className="form-label">
                                Email Address<span className="required-star">*</span>
                            </label>
                            {touched.email && errors.email && (
                                <span className="field-error-text" id="email-error">{errors.email}</span>
                            )}
                        </div>
                        <input
                            type="email"
                            id="user-email"
                            name="email"
                            placeholder="jane.doe@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`form-input ${touched.email && errors.email ? "is-invalid" : ""}`}
                            aria-required="true"
                            aria-invalid={touched.email && errors.email ? "true" : "false"}
                            aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                            disabled={status === "loading"}
                        />
                    </div>

                    {/* Message Field */}
                    <div className="input-group">
                        <div className="label-container">
                            <label htmlFor="user-message" className="form-label">
                                Message<span className="required-star">*</span>
                            </label>
                            {touched.message && errors.message && (
                                <span className="field-error-text" id="message-error">{errors.message}</span>
                            )}
                        </div>
                        <textarea
                            id="user-message"
                            name="message"
                            placeholder="Tell us how we can help you..."
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`form-input ${touched.message && errors.message ? "is-invalid" : ""}`}
                            aria-required="true"
                            aria-invalid={touched.message && errors.message ? "true" : "false"}
                            aria-describedby={touched.message && errors.message ? "message-error" : undefined}
                            disabled={status === "loading"}
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className="submit-btn"
                        id="contact-form-submit"
                    >
                        <span className="btn-shimmer"></span>
                        {status === "loading" ? (
                            <>
                                <span className="spinner" aria-hidden="true"></span>
                                Sending message...
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UserForm;
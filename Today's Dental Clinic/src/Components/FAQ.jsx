import React from 'react'

const FAQ = () => {
    const questions = [
        {
            question: "what services does Dent2Teeth offer?",
            answer: "We offer general dentistry,cosmetic treatments,orthodontics,pediatric care,implants and more."
        },
        {
            question: "Do you accept insurance?",
            answer: "Yes, we accept most major insurance plans. Contact us for specific coverage details."
        },
        {
            question: "How do I book an appointment?",
            answer: "You can book an appointment through our website or call us directly at (123) 456-7890."
        },
        {
            question: "Is emergency dental care available?",
            answer: "Yes, we provide emergency dental services during business hours. Please call us immediately if needed."
        },
        {
            question: "Are your treatments safe for children?",
            answer: "Absolutely. We have a dedicated pediatric dentistry section for kids of all ages."
        }
    ]
    return (
        <div className="mt-5">
            <h2 className='text-primary'>Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
                {questions.map((item, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                            <button
                                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded={index === 0 ? 'true' : 'false'}
                                aria-controls={`collapse${index}`}
                            >
                                {item.question}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                            aria-labelledby={`heading${index}`}
                            data-bs-parent="#faqAccordion"
                        >
                            <div className="accordion-body">{item.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ

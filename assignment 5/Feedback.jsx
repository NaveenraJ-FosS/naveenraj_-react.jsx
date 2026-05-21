import React, { useRef, useState } from "react";

const Feedback = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [feedbackData, setFeedbackData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    setFeedbackData(data);

    // Clear fields
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div>
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" ref={nameRef} required />
        <br /><br />

        <input type="email" placeholder="Enter Email" ref={emailRef} required />
        <br /><br />

        <textarea placeholder="Enter Feedback" ref={messageRef} required />
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Display Data */}
      {feedbackData && (
        <div>
          <h3>Submitted Feedback</h3>
          <p><b>Name:</b> {feedbackData.name}</p>
          <p><b>Email:</b> {feedbackData.email}</p>
          <p><b>Message:</b> {feedbackData.message}</p>
        </div>
      )}
    </div>
  );
};

export default Feedback;

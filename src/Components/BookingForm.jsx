import React, { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate fields
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.Phone_number) {
      newErrors.Phone_number = "Phone number is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.Phone_number)) {
      newErrors.email = "Enter a valid Phone number";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    setSuccess(null);

    try {
      const response = await fetch("http://localhost:8000/api/bookings/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit booking");

      await response.json();
      setSuccess("Your booking has been submitted successfully!");
      setFormData({ name: "", Phone_number: "", message: "" });
    } catch (error) {
      setErrors({ api: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="booking-section">
      <div className="booking-container">
        <h2 className="section-heading">
          Book a <span className="highlight">Meeting</span>
        </h2>

        <form onSubmit={handleSubmit} className="booking-form">
          {/* Name */}
          <div>
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              placeholder="Your Name"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="form-label">Phone Number</label>
            <input
              type="number"
              name="Phone_number"
              value={formData.Phone_number}
              onChange={handleChange}
              className="form-input"
              placeholder="+233 xxx xxx xxxx"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="form-label">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="form-input"
              placeholder="A short note"
            />
            {errors.message && <p className="error-text">{errors.message}</p>}
          </div>

          {/* API Error */}
          {errors.api && <p className="error-text center">{errors.api}</p>}

          {/* Success Message */}
          {success && <p className="success-text center">{success}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="submit-btn"
          >
            {loading ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>
    </section>
  );
}

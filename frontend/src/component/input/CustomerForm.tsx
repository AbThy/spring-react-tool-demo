import React, { useState } from "react";

import { CustomerData } from "model/Customer";
import { initialCustomerState } from "const/initialStates";

const CustomerForm: React.FC = () => {
  const [formData, setFormData] = useState<CustomerData>(initialCustomerState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // You can do something with the form data here
    // Reset form after submission
    setFormData(initialCustomerState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="placeOfBirth">Place of Birth:</label>
        <input
          type="text"
          id="placeOfBirth"
          name="placeOfBirth"
          value={formData.placeOfBirth}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="taj">Taj:</label>
        <input
          type="text"
          id="taj"
          name="taj"
          value={formData.taj}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="taxId">Tax ID:</label>
        <input
          type="text"
          id="taxId"
          name="taxId"
          value={formData.taxId}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CustomerForm;

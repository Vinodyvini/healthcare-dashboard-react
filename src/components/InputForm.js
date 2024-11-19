import React, { useState } from 'react';

const InputForm = () => {
  const [formData, setFormData] = useState({ name: '', age: '', file: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedData = {
      ...formData,
      file: formData.file ? formData.file.name : null, 
    };
    alert(`Submitted: ${JSON.stringify(submittedData)}`);

    setFormData({ name: '', age: '', file: null });
    e.target.reset();
  };  

  return (
    <form onSubmit={handleSubmit} className="border p-4 rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">Age</label>
        <select
          id="age"
          name="age"
          className="form-select"
          value={formData.age}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select Age</option>
          {Array.from({ length: 100 }, (_, i) => i + 1).map((age) => (
            <option key={age} value={age}>{age}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="file" className="form-label">Upload File</label>
        <input
          type="file"
          id="file"
          name="file"
          className="form-control"
          onChange={handleFileChange}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">Submit</button>
    </form>
  );
};

export default InputForm;

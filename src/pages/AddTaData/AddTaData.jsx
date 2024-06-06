import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addData.css';
import Header from '../../Components/Header/Header';

const AddTaData = () => {
  const [formData, setFormData] = useState({
    courseInstructor: '',
    course: '',
    classSize: '',
    attributeLow: false,
    attributeMedium: false,
    attributeHigh: false,
    semesterSummer: false,
    semesterRegular: false,
    nativeEnglishSpeaker: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      id: Date.now(), 
    };
    navigate('/', { state: { data } });
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit} className="add-ta-data-form">
        <h2 className="form-title">Enter Your TA Data</h2>
        <div className="form-group">
          <label htmlFor="courseInstructor">Course Instructor</label>
          <input
            type="text"
            id="courseInstructor"
            name="courseInstructor"
            value={formData.courseInstructor}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="classSize">Class Size</label>
          <input
            type="text"
            id="classSize"
            name="classSize"
            value={formData.classSize}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Choose Attribute</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="attributeLow"
                checked={formData.attributeLow}
                onChange={handleChange}
              />
              Mark this for Low.
            </label>
            <label>
              <input
                type="checkbox"
                name="attributeMedium"
                checked={formData.attributeMedium}
                onChange={handleChange}
              />
              Mark this for Medium.
            </label>
            <label>
              <input
                type="checkbox"
                name="attributeHigh"
                checked={formData.attributeHigh}
                onChange={handleChange}
              />
              Mark this for High.
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Choose Semester</label>
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="semesterSummer"
                checked={formData.semesterSummer}
                onChange={handleChange}
              />
              Summer.
            </label>
            <label>
              <input
                type="checkbox"
                name="semesterRegular"
                checked={formData.semesterRegular}
                onChange={handleChange}
              />
              Regular.
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="nativeEnglishSpeaker"
              checked={formData.nativeEnglishSpeaker}
              onChange={handleChange}
            />
            Mark this for native English speaker.
          </label>
        </div>
        <button type="submit" className="submit-button">
          Publish
        </button>
      </form>
    </>
  );
};

export default AddTaData;

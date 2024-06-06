// TaData.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import './taData.css';

function TaData() {
  const location = useLocation();
  const navigate = useNavigate();
  const [taData, setTaData] = useState(null);

  useEffect(() => {
    const receivedData = JSON.parse(location.state?.data || "{}"); 
    if (receivedData) {
      
      const sanitizedData = {
        ...receivedData,
        course: receivedData.course || "NA",
        courseInstructor: receivedData.courseInstructor || "NA",
        nativeEnglishSpeaker:receivedData.nativeEnglishSpeaker || "NA",
        semesterSummer:receivedData.semesterSummer || "NA",
        classSize:receivedData.classSize || "NA",
        attributeLow:receivedData.attributeLow || "NA",
      };
      setTaData(sanitizedData);
    } else {
     
      navigate('/');
    }
  }, [location.state, navigate]);

  const handleEdit = () => {
    navigate('/add', { state: { editData: taData } });
  };

  const handleDelete = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <div className="container">
        {taData && (
          <div className="ta-card">
            <h2 className="ta-card-title">{taData.course}</h2>
            <p>
              <strong>Instructor Name:</strong> {taData.courseInstructor}
            </p>
            <p>
              <strong>Native English Speaker:</strong>{' '}
              {taData.nativeEnglishSpeaker ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Semester:</strong> {taData.semesterSummer ? 'Summer' : 'Regular'}
            </p>
            <p>
              <strong>Class Size:</strong> {taData.classSize}
            </p>
            <p>
              <strong>Class Attribute:</strong>{' '}
              {taData.attributeLow
                ? 'Low'
                : taData.attributeMedium
                ? 'Medium'
                : 'High'}
            </p>
            <div className="buttons-container">
              <button className="button-primary" onClick={handleEdit}>Edit</button>
              <button className="button-secondary" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TaData;

// Home.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './home.css';
import Header from '../../Components/Header/Header';

function Home() {
  const [taDataList, setTaDataList] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.data) {
      console.log("Received Data in Home:", location.state.data);
      const receivedData = location.state.data;
      
      const sanitizedData = {
        ...receivedData,
        course: receivedData.course || "NA",
        courseInstructor: receivedData.courseInstructor || "NA",
        nativeEnglishSpeaker:receivedData.nativeEnglishSpeaker || "NA",
        semesterSummer:receivedData.semesterSummer || "NA",
        classSize:receivedData.classSize || "NA",
        attributeLow:receivedData.attributeLow || "NA",
      };

      setTaDataList(prevDataList => {
        const exists = prevDataList.some(item => item.id === sanitizedData.id);
        if (!exists) {
          return [...prevDataList, sanitizedData];
        }
        return prevDataList;
      });
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  return (
    <div className="container">
      <Header />
      {taDataList.map((taData, index) => (
        <div key={index} className="ta-card">
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
          <Link
            to={{
              pathname: '/ta-data',
              state: { data: JSON.stringify(taData) } // Stringify the data
            }}
          >
            <button className="button-primary">View Data</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;

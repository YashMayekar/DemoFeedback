import { useEffect, useState } from "react";
import React from 'react';
import { db } from "./Firebase"; 
import { addDoc, collection, doc, getDocs } from "firebase/firestore";
import './App.css';

const Rating = () => {
  const databaseRef = collection(db, "ratings");
  const [Q1,setval1] = useState(Number);
  const [Q2,setval2] = useState(Number);
  const [Q3,setval3] = useState(Number);
  const [Q4,setval4] = useState(Number);
  const [Q5,setval5] = useState(Number);
  const [datalist, setdata] = useState([]);
  const [showdiv, setshowdiv] = useState(false);
  const [showavgdiv, setshowavgdiv] = useState(false);
  const [q1avg, setq1avg] = useState(Number);
  const [q2avg, setq2avg] = useState(Number);
  const [q3avg, setq3avg] = useState(Number);
  const [q4avg, setq4avg] = useState(Number);
  const [q5avg, setq5avg] = useState(Number);
  var q1sum = 0, q2sum = 0, q3sum = 0, q4sum = 0, q5sum = 0;
  var i = 0,j = 0,k = 0,l = 0,m = 0;
  var sub = false; 
  var sam = 12;

  const Submit = async () => {
    try{  
      await addDoc(databaseRef, {q1: Q1, q2: Q2, q3: Q3, q4: Q4, q5: Q5});
      setval1(null);
      setval2(null);
      setval3(null);
      setval4(null);
      setval5(null);
      sub = true;
      alert("Submitted");
    }
    catch (err){
      console.log(err);
    }
  }

  useEffect(() => {
    const GetData = async () =>{
      const ogdata = await getDocs(databaseRef);
      const data = ogdata.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setdata(data);
      //console.log(" OG Data : ", data);
      
    }
    GetData();
    //console.log("Datalist : ",datalist);
  }
    , []
  )


  const ShowData = async () =>{
    setshowdiv(!showdiv);
  };

  const Avg = async () => {
    console.log("Average button working")
    datalist.map((item) => {
      if (item.q1 != null) {
        q1sum = q1sum + item.q1;  
        if (item.q1 != 0){i = i + 1;}
        setq1avg(q1sum/i);
      }
      if (item.q2 != null) {
        q2sum = q2sum + item.q2;
        if (item.q2 != 0) {j = j + 1;}
        setq2avg(q2sum/j);
      }
      if (item.q3 != null) {
        q3sum = q3sum + item.q3;
        if (item.q3 != 0) {k = k + 1;}
        setq3avg(q3sum/k);
      }
      if (item.q4 != null) {
        q4sum = q4sum + item.q4;
        if (item.q4 != 0) {l = l + 1;}
        setq4avg(q4sum/l);
      }
      if (item.q5 != null) {
        q5sum = q5sum + item.q5;
        if (item.q3 != 0) {m = m + 1;}
        setq5avg(q5sum/m); 
      }
    });
    console.log("\nQ1 Avg  : ", q1avg,"<=",q1sum,"/",i,
    "\nQ2 Avg  : ", q2avg,"<=",q2sum,"/",j,
    "\nQ3 Avg  : ", q3avg,"<=",q3sum,"/",k,
    "\nQ4 Avg  : ", q4avg,"<=",q4sum,"/",l,
    "\nQ5 Avg  : ", q5avg,"<=",q5sum,"/",m,
    "\nCount : ",i,j,k,l,m
    );
    setshowavgdiv(!showavgdiv);
  }



  return (
    <div className="container">
    <div className="left-div">
      <h2>Questions:</h2>
      <h3>Question no. 1</h3>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          style={{ cursor: 'pointer', marginRight: '17px' }}
          onClick={() => setval1(value)}
        >
          {value} {sub ? '☆': Q1 >= value ? '★' : '☆'}
        </span>
      ))}
      <h3>Question no. 2</h3>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          style={{ cursor: 'pointer', marginRight: '17px' }}
          onClick={() => setval2(value)}
        >
          {value} {sub ? '☆': Q2 >= value ? '★' : '☆'}
        </span>
      ))}
      <h3>Question no. 3</h3>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          style={{ cursor: 'pointer', marginRight: '17px' }}
          onClick={() => setval3(value)}
        >
          {value} {sub ? '☆': Q3 >= value ? '★' : '☆'}
        </span>
      ))}
      <h3>Question no. 4</h3>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          style={{ cursor: 'pointer', marginRight: '17px' }}
          onClick={() => setval4(value)}
        >
          {value} {sub ? '☆': Q4 >= value ? '★' : '☆'}
        </span>
      ))}
      <h3>Question no. 5</h3>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          style={{ cursor: 'pointer', marginRight: '17px' }} 
          onClick={() => setval5(value)}
        >
          {value} {sub ? '☆': Q5 >= value ? '★' : '☆'}
        </span>
      ))}
      <br></br>
      <button onClick={Submit} id = "sub">Submit</button>
      <button onClick={ShowData} id = "data">Show Data</button>
      <button onClick={Avg} id = "avg">Calculate Avg</button>
    </div>
    <div className="gap1-div">
        <></>
    </div>

    { showdiv && <div className="right-div">
      
      <h2>The Data Entered: </h2>
      {datalist.map((item) => (
        <div key = {item.id} >
          <h3> Id : {item.id}</h3>
          <p> Question No 1 = {item.q1}</p>
          <p> Question No 2 = {item.q2}</p>
          <p> Question No 3 = {item.q3}</p>
          <p> Question No 4 = {item.q4}</p>
          <p> Question No 5 = {item.q5}</p>
        </div> 
      ))}
    </div>}

    <div className="gap1-div">
        <></>
    </div>
    
    { showavgdiv && <div className="right2-div">
        <h2>The Average: </h2>
        <p>Q1 = {q1avg}</p>
        <p>Q2 = {q2avg}</p>
        <p>Q3 = {q3avg}</p>
        <p>Q4 = {q4avg}</p>
        <p>Q5 = {q5avg}</p>
    </div>}
    
    </div>

  );
};

export default Rating;
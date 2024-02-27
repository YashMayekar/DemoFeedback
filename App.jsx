import './App.css';
import Background from './components/Background';
import Home from './components/Home';
import Footer from './components/Footer';
import { db } from "./components/config/FirebaseConfig"; 
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';


function App() {
  
  //Creating database reference and a array to store data for calculations...
  const databaseRef = collection(db, "feedback");
  const [datalist, setdata] = useState([]);

  //Required for calculations...
  const [q1avg, setq1avg] = useState(Number);
  const [q2avg, setq2avg] = useState(Number);
  const [q3avg, setq3avg] = useState(Number);
  const [q4avg, setq4avg] = useState(Number);
  const [q5avg, setq5avg] = useState(Number);
  const [q6avg, setq6avg] = useState(Number);
  const [q7avg, setq7avg] = useState(Number);
  const [q8avg, setq8avg] = useState(Number);
  var q1sum = 0, q2sum = 0, q3sum = 0, q4sum = 0, q5sum = 0, q6sum = 0, q7sum = 0, q8sum = 0;
  var v1 = 0, v2= 0, v3 = 0, v4 = 0, v5 = 0, v6 = 0, v7 = 0, v8 = 0; 

  
  //Retrieving data and calculating average when the page loads...
  useEffect(() => {
    const GetData = async () =>{
      //retrieving all the data along with the team name...
      const ogdata = await getDocs(databaseRef);
      const data = ogdata.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setdata(data);
      //for debugging
      console.log(" OG Data : ", data);
    }
    GetData();
    Avg();
    // for debugging
    console.log("Datalist : ",datalist);
    console.log("\nQ1 Avg  : ", q1avg,"<=",q1sum,"/",v1,
    "\nQ2 Avg  : ", q2avg,"<=",q2sum,"/",v2,
    "\nQ3 Avg  : ", q3avg,"<=",q3sum,"/",v3,
    "\nQ4 Avg  : ", q4avg,"<=",q4sum,"/",v4,
    "\nQ5 Avg  : ", q5avg,"<=",q5sum,"/",v5,
    "\nQ6 Avg  : ", q6avg,"<=",q6sum,"/",v6,
    "\nQ7 Avg  : ", q7avg,"<=",q7sum,"/",v7,
    "\nQ8 Avg  : ", q8avg,"<=",q8sum,"/",v8,
    "\nCount : ",v1,v2,v3,v4,v5,v6,v7,v8
    );
  } , [] );

  
  //Average calculating function...
  const Avg = async () => {
    // Accessing the values of each questions of every teams...
    // calculating the average and storing them in the variables according to the questions...
      datalist.map((item) => {
      if (item.q1 != null) {
        q1sum = q1sum + item.q1;  
        if (item.q1 != 0){v1 = v1 + 1;}
        setq1avg(q1sum/v1);
      }
      if (item.q2 != null) {
        q2sum = q2sum + item.q2;
        if (item.q2 != 0) {v2 = v2+ 1;}
        setq2avg(q2sum/v2);
      }
      if (item.q3 != null) {
        q3sum = q3sum + item.q3;
        if (item.q3 != 0) {v3 = v3+ 1;}
        setq3avg(q3sum/v3);
      }
      if (item.q4 != null) {
        q4sum = q4sum + item.q4;
        if (item.q4 != 0) {v4 = v4 + 1;}
        setq4avg(q4sum/v4);
      }
      if (item.q5 != null) {
        q5sum = q5sum + item.q5;
        if (item.q5 != 0) {v5 = v5 + 1;}
        setq5avg(q5sum/v5); 
      }
      if (item.q6 != null) {
        q6sum = q6sum + item.q6;
        if (item.q6 != 0) {v6 = v6 + 1;}
        setq6avg(q6sum/v6); 
      }
      if (item.q7 != null) {
        q7sum = q7sum + item.q7;
        if (item.q7 != 0) {v7 = v7 + 1;}
        setq7avg(q7sum/v7); 
      }
      if (item.q8 != null) {
        q8sum = q8sum + item.q8;
        if (item.q8 != 0) {v8 = v8 + 1;}
        setq8avg(q8sum/v8); 
      }
    });
  }

  return (
    <>
      <div>
        <Background />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
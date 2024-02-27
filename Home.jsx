import React from 'react';
import logo from "../assets/Logo.png";
import { useState } from "react";
import { db } from "./config/FirebaseConfig"; 
import { collection, doc ,setDoc } from "firebase/firestore";
import logo2 from "/public/mlsc-vcet.png"

function Home() {

    //Creating reference for the database...
    const databaseRef = collection(db, "feedback");
    
    //Required variables...
    const [Q1,setval1] = useState(Number);
    const [Q2,setval2] = useState(Number);
    const [Q3,setval3] = useState(Number);
    const [Q4,setval4] = useState(Number);
    const [Q5,setval5] = useState(Number);
    const [Q6,setval6] = useState(Number);
    const [Q7,setval7] = useState(Number);
    const [Q8,setval8] = useState(Number);
    const [teamname , setname]  = useState("");
    const [suggest, setsug] = useState("");

    //Submit button function...
    const Submit = async () => {
        try{
            //collection data as per the team name...
            await setDoc(doc(databaseRef, teamname), { q1: Q1, q2: Q2, q3: Q3, q4: Q4, q5: Q5, q6: Q6, q7: Q7, q8: Q8, sg: suggest });
            //for debuging...
            console.log("Submit button works");
            console.log(
                "\nTeam Name : ", teamname,
                "\nQuestion 1 : ", Q1,
                "\nQuestion 2 : ", Q2,
                "\nQuestion 3 : ", Q3,
                "\nQuestion 4 : ", Q4,            
                "\nQuestion 5 : ", Q5,
                "\nQuestion 6 : ", Q6,
                "\nQuestion 7 : ", Q7,
                "\nQuestion 8 : ", Q8,
                "\nSuggestion : ", suggest
            );    
            alert("Feedback from "+teamname+" is Submited");
        }
        catch (err) {
            console.log("Error in the Submit button : ",err);
        }
    }

    return (
        <div className='home-page'>
            <div>
                {/* <img src={logo2} alt="Logo" class="logo2" /> */}
                <h1 class="title">MICROSOFT LEARN STUDENTS CLUB</h1>
            </div>

            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            
            <div className="heading">
                <span className="welcome">Thank you for participating !</span>
                <br />
                <span className="codefest">Please take a few minutes to share your experience with us. Your feedback is valuable and will help us improve future events.</span>
                <br />
            </div>

            <div className='form-title'>
                FEEDBACK FORM
            </div>

            <div className='form-frame'>
                <div className='form-content'>

                    <div className='question'>
                        <div className="question">
                            Enter your team name..
                            <br />
                            <input type="text" maxlength="20" onChange={(e) => { setname(e.target.value)}}/>
                        </div>

                    </div>

                    <div className='ques1'>
                        How would you rate the overall organization and logistics of the hackathon?
                        <br />
                        <div className='opspacings'></div>
                        <div className="options">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <span key={value} style={{ cursor: 'pointer', marginRight: '30px' }} 
                                onClick={() => setval1(value)}>
                                {Q1 >= value ? '★' : '☆'}
                                </span>
                            ))}
                        </div>
                        <br/>
                    </div>

                    <div className='ques2'>
                        How satisfied were you with the venue and facilities provided?
                        <br />
                        <div className='opspacings'></div>
                        <div className="options">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <span key={value} style={{ cursor: 'pointer', marginRight: '30px' }}
                                onClick={() => setval2(value)}>
                                { Q2 >= value ? '★' : '☆'}
                                    
                                </span>
                            ))}
                        </div>
                        <br />
                    </div>

                    <div className='ques3'>
                        How well did the hackathon theme align with your interests and expertise?
                        <br />
                        <div className='opspacings'></div>
                        <div className="options">
                        {[1, 2, 3, 4, 5].map((value) => (
                                <span key={value} style={{ cursor: 'pointer', marginRight: '30px' }} 
                                onClick={() => setval3(value)}>
                                {Q3 >= value ? '★' : '☆'}
                                </span>
                            ))}
                        </div>
                        <br />
                    </div>

                    <div className='ques4'>
                        How satisfied were you with the communication channels and updates throughout the hackathon?
                        <br />
                        <div className='opspacings'></div>
                        <div className="options">
                        {[1, 2, 3, 4, 5].map((value) => (
                                <span key={value} style={{ cursor: 'pointer', marginRight: '30px' }} 
                                onClick={() => setval4(value)}>
                                {Q4 >= value ? '★' : '☆'}
                                </span>
                            ))}
                        </div>
                        <br />
                    </div>

                    <div className='ques5'>
                        How satisfied were you with the judging criteria and evaluation process?
                        <br />
                        <div className='opspacings'></div>
                        <div className="options">
                        {[1, 2, 3, 4, 5].map((value) => (
                                <span key={value} style={{ cursor: 'pointer', marginRight: '30px' }} 
                                onClick={() => setval5(value)}>
                                {Q5 >= value ? '★' : '☆'}
                                </span>
                            ))}
                        </div>
                        <br />
                    </div>

                    <div className='ques6'>
                        How well did the hackathon challenge stimulate creativity and innovation?
                        <br />
                        <div className='opspacings'></div>
                        <div className="options">
                        {[1, 2, 3, 4, 5].map((value) => (
                                <span key={value} style={{ cursor: 'pointer', marginRight: '30px' }} 
                                onClick={() => setval6(value)}>
                                {Q6 >= value ? '★' : '☆'}
                                </span>
                            ))}
                        </div>
                        <br />
                    </div>

                    <div className='ques7'>
                        Rate the fairness and transparency of the judging decisions
                        <br />
                        <div className='opspacings'></div>
                        <div className="options">
                        {[1, 2, 3, 4, 5].map((value) => (
                                <span key={value} style={{ cursor: 'pointer', marginRight: '30px' }} 
                                onClick={() => setval7(value)}>
                                {Q7 >= value ? '★' : '☆'}
                                </span>
                            ))}
                        </div>
                        <br />
                    </div>

                    <div className='ques8'>
                        Rate your overall satisfaction with the hackathon experience.
                        <br />
                        <div className='opspacings'></div>
                        <div className="options">
                        {[1, 2, 3, 4, 5].map((value) => (
                                <span key={value} style={{ cursor: 'pointer', marginRight: '30px' }} 
                                onClick={() => setval8(value)}>
                                {Q8 >= value ? '★' : '☆'}
                                </span>
                            ))}
                        </div>
                        <br />
                    </div>

                    <div className='ques9'>
                        Any suggestions/queries you'd like us to help you with..
                        <br />
                        <br />
                        <input type="text" maxlength="100" onChange={(e) => { setsug(e.target.value)}}/>
                    </div>
                </div>
            </div>
            <button className='submit' onClick={Submit}>Submit</button>
        </div>
    );
}

export default Home;
// Importing components 
import Navbar from './components/Navbar';
import Resume from './components/Resume';

// useState
import { useState } from 'react';

// Importing stylesheet
import './styles/app.css'; 

function App() {
  // State
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userLinkedIn, setUserLinkedIn] = useState(''); 
  const [userGitHub, setUserGitHub] = useState('');

  function handleClickGeneral() {
      // Handling opening animation(s). 
      const form = document.querySelector('.generalForm'); 
      const arrow = document.querySelector('.generalHeader .down'); 
      handleExpand(form, arrow); 
  }

  const handleClickEducation = () => {
      const form = document.querySelector('.educationForm'); 
      const arrow = document.querySelector('.educationHeader .down'); 
      handleExpand(form, arrow); 
  }

  const handleClickExperience = () => {
      const form = document.querySelector('.experienceForm'); 
      const arrow = document.querySelector('.experienceHeader .down'); 
      handleExpand(form, arrow); 
  }

  const handleExpand = (form, arrow) => {
      arrow.classList.toggle('clicked');
      form.classList.toggle('hidden');
      form.classList.toggle('extended');
  } 

  const handleSubmit = (e) => {
      // Prevent page reload. 
      e.preventDefault(); 
      // Send the user-inputted data to another component. 
      console.log({userName, userMail, userNumber, userLinkedIn, userGitHub}); 
      // Reset all the fields in the form. 
      setUserName(''); 
      setUserMail('');
      setUserNumber('');
      setUserLinkedIn('');
      setUserGitHub('');
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section className="addInfo">
          {/* General Tab */}
          <div className="general">
            <div className="generalHeader">
                <h1 onClick={handleClickGeneral}>General <span><img className="down" src="/chevron-down.svg" alt="Picture of expand down arrow" /></span></h1>
            </div>
            <form className="generalForm hidden" onSubmit={handleSubmit}>
                {/* User's Name Field */}
                <label htmlFor="userName">Name</label>
                <input 
                    id="userName" 
                    name="userName" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                />
                {/* User's Email Field */}
                <label htmlFor="userEmail">Email</label>
                <input 
                    id="userEmail" 
                    name="userEmail" 
                    value={userMail}
                    onChange={(e) => setUserMail(e.target.value)}
                    type="email"/>
                {/* User's Phone Number */}
                <label htmlFor="userPhone">Phone Number</label>
                <input 
                    id="userPhone" 
                    name="userPhone" 
                    value={userNumber} 
                    onChange={(e) => setUserNumber(e.target.value)}
                    type="number"
                />
                {/* User's LinkedIn Profile */}
                <label htmlFor="userLinkedIn">LinkedIn Profile URL</label>
                <input 
                    id="userLinkedIn" 
                    name="userLinkedIn" 
                    value={userLinkedIn} 
                    onChange={(e) => setUserLinkedIn(e.target.value)}
                    type="text"
                />
                {/* User's Phone Number */}
                <label htmlFor="userGitHub">GitHub Profile URL</label>
                <input 
                    id="userGitHub" 
                    name="userGitHub" 
                    value={userGitHub} 
                    onChange={(e) => setUserGitHub(e.target.value)}
                    type="text" 
                />
                {/* Save Button */}
                <div className="saveBtnContainer">
                    <button className='saveBtn' type='submit'>Save</button>
                </div>
            </form>
          </div>
          
          {/* Education Tab */}
          <div className="education">
            <div className="educationHeader">
                <h1 onClick={handleClickEducation}>Education <span><img className="down" src="/chevron-down.svg" alt="Picture of expand down arrow" /></span></h1>
            </div>
            <form className="educationForm hidden">
                {/* User's School Field */}
                <label htmlFor="">School</label>
                <input id="userSchool" name="userSchool" type="text"/>
                {/* User's Degree Field */}
                <label htmlFor="">Degree</label>
                <input id="userDegree" name="userMajor" type="email"/>
                {/* User's GPA */}
                <label htmlFor="userGPA">Cumulative GPA</label>
                <input type="number" id="userGPA" name="userGPA" />
                {/* User's Education End/Graduation Date */}
                <label htmlFor="userGradDate">Graduation Date</label>
                <input type="text" id="userGradDate" name="userGradDate"/>
                {/* User's Relevant Coursework */}
                <label htmlFor="userRelCourses">Relevant Coursework</label>
                <textarea name="userRelCourses" id="userRelCourses" cols="30" rows="10"></textarea>
                {/* Save Button */}
                <div className="saveBtnContainer">
                    <button className='saveBtn' type='submit'>Save</button>
                </div>
            </form>
          </div>

          {/* Experience Tab */}
          <div className="experience">
            <div className="experienceHeader">
                <h1 onClick={handleClickExperience}>Experience <span><img className="down" src="/chevron-down.svg" alt="Picture of expand down arrow" /></span></h1>
            </div>
            <form className="experienceForm hidden">
                {/* Company Name Field */}
                <label htmlFor="userCompany">Company Name</label>
                <input type="text" id="userCompany" name="userCompany"/>
                {/* Position @ Company */}
                <label htmlFor="userPos">Position Title</label>
                <input type="text" id="userPos" name="userPos" />
                {/* Position Start Date */}
                <label htmlFor="userPosStartDate">Start Date</label>
                <input type="text" id="userPosStartDate" name="userPosStartDate" />
                {/* Position End Date */}
                <label htmlFor="userPosEndDate">End Date</label>
                <input type="text" id="userPosEndDate" name="userPosEndDate" />
                {/* Position Location */}
                <label htmlFor="userPosLoc">Location</label>
                <input type="text" id="userPosLoc" name="userPosLoc" />
                {/* Position Description */}
                <label htmlFor="userPosDesc">Description</label>
                <textarea name="userPosDesc" id="userPosDesc" cols="30" rows="10"></textarea>
                {/* Save Button */}
                <div className="saveBtnContainer">
                    <button className='saveBtn' type='submit'>Save</button>
                </div>
            </form>
          </div>
        </section>
        <section className="seeInfo">
          <Resume />
        </section>  
      </main>
    </>
  )
}

export default App;

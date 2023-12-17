// useState
import { useState } from 'react';

// Importing components 
import Navbar from './components/Navbar';
import Resume from './components/Resume';

// Importing stylesheet
import './styles/app.css'; 

function App() {

  // State
  const [userName, setUserName] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userLinkedIn, setUserLinkedIn] = useState(''); 
  const [userGitHub, setUserGitHub] = useState('');

  const [userSchool, setUserSchool] = useState(''); 
  const [userDegree, setUserDegree] = useState(''); 
  const [userGPA, setUserGPA] = useState(''); 
  const [userGradDate, setUserGradDate] = useState(''); 
  const [userCourses, setUserCourses] = useState('');

  const [userCompany, setUserCompany] = useState('');
  const [userPosition, setUserPosition] = useState('');
  const [userStartDate, setUserStartDate] = useState('');
  const [userEndDate, setUserEndDate] = useState('');
  const [positionLocation, setPositionLocation] = useState('');
  const [positionDescription, setPositionDescription] = useState('');

  const [userEducationList, setUserEducationList] = useState([]); 
  const [userExperienceList, setUserExperienceList] = useState([]); 
 
  // Functions to handle expanding animation when either General, Education, or Experience tabs are clicked. 
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

  // Handling form submissions i.e when the user clicks the save button. 
  const handleSubmitEducation = (e) => {
      // Prevent page reload. 
      e.preventDefault(); 

      setUserEducationList([...userEducationList, {userSchool, userDegree, userGPA, userGradDate, userCourses}]); 
      
      // Reset all the fields in the form. 
      setUserSchool(''); 
      setUserDegree('');
      setUserGPA('');
      setUserGradDate('');
      setUserCourses('');
  }

  const handleSubmitExperience = (e) => {
    // Prevent page reload. 
    e.preventDefault();

    setUserExperienceList([...userExperienceList, {userCompany, userPosition, userStartDate, userEndDate, positionLocation, positionDescription}]); 

    setUserCompany('');
    setUserPosition('');
    setUserStartDate('');
    setUserEndDate('');
    setPositionLocation('');
    setPositionDescription('');
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
            <form className="generalForm hidden">
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
                <label htmlFor="userPhone">City</label>
                <input 
                    id="userCity" 
                    name="userCity" 
                    value={userCity} 
                    onChange={(e) => setUserCity(e.target.value)}
                    type="text"
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
                {/* <div className="saveBtnContainer">
                    <button className='saveBtn' type='submit'>Save</button>
                </div> */}
            </form>
          </div>
          
          {/* Education Tab */}
          <div className="education">
            <div className="educationHeader">
                <h1 onClick={handleClickEducation}>Education <span><img className="down" src="/chevron-down.svg" alt="Picture of expand down arrow" /></span></h1>
            </div>
            <form className="educationForm hidden" onSubmit={handleSubmitEducation}>
                {/* User's School Field */}
                <label htmlFor="">School</label>
                <input 
                  id="userSchool" 
                  name="userSchool" 
                  value={userSchool}
                  onChange={(e) => setUserSchool(e.target.value)}
                  type="text"
                />
                {/* User's Degree Field */}
                <label htmlFor="">Degree</label>
                <input 
                  id="userDegree" 
                  name="userMajor" 
                  value={userDegree}
                  onChange={(e) => setUserDegree(e.target.value)}
                  type="text"
                  />
                {/* User's GPA */}
                <label htmlFor="userGPA">Cumulative GPA</label>
                <input
                  id="userGPA"
                  name="userGPA" 
                  value={userGPA}
                  onChange={e => setUserGPA(e.target.value)}
                  type="number" 
                />
                {/* User's Education End/Graduation Date */}
                <label htmlFor="userGradDate">Graduation Date</label>
                <input 
                  id="userGradDate" 
                  name="userGradDate"
                  value={userGradDate}
                  onChange={(e) => setUserGradDate(e.target.value)}
                  type="text" 
                />
                {/* User's Relevant Coursework */}
                <label htmlFor="userRelCourses">Relevant Coursework</label>
                <textarea
                  id="userRelCourses"
                  name="userRelCourses"  
                  value={userCourses}
                  onChange={(e) => setUserCourses(e.target.value)}
                  cols="30" 
                  rows="10"
                ></textarea>
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
            <form className="experienceForm hidden" onSubmit={handleSubmitExperience}>
                {/* Company Name Field */}
                <label htmlFor="userCompany">Company Name</label>
                <input 
                  type="text" 
                  id="userCompany" 
                  name="userCompany" 
                  value={userCompany} 
                  onChange={(e) => setUserCompany(e.target.value)}
                />
                {/* Position @ Company */}
                <label htmlFor="userPos">Position Title</label>
                <input 
                  type="text" 
                  id="userPos" 
                  name="userPos" 
                  value={userPosition}
                  onChange={(e) => setUserPosition(e.target.value)}
                />
                {/* Position Start Date */}
                <label htmlFor="userPosStartDate">Start Date</label>
                <input 
                  type="text" 
                  id="userPosStartDate" 
                  name="userPosStartDate" 
                  value={userStartDate}
                  onChange={(e) => setUserStartDate(e.target.value)}
                />
                {/* Position End Date */}
                <label htmlFor="userPosEndDate">End Date</label>
                <input 
                  type="text" 
                  id="userPosEndDate" 
                  name="userPosEndDate" 
                  value={userEndDate}
                  onChange={(e) => setUserEndDate(e.target.value)}
                /> 
                {/* Position Location */}
                <label htmlFor="userPosLoc">Location</label>
                <input 
                  type="text" 
                  id="userPosLoc" 
                  name="userPosLoc" 
                  value={positionLocation}
                  onChange={(e) => setPositionLocation(e.target.value)}
                />
                {/* Position Description */}
                <label htmlFor="userPosDesc">Description</label>
                <textarea 
                  name="userPosDesc" 
                  id="userPosDesc" 
                  cols="30" 
                  rows="10"
                  value={positionDescription}
                  onChange={(e) => setPositionDescription(e.target.value)}
                ></textarea>
                {/* Save Button */}
                <div className="saveBtnContainer">
                    <button className='saveBtn' type='submit'>Save</button>
                </div>
            </form>
          </div>
        </section>
        <section className="seeInfo">
          <Resume 
            userName={userName}
            userMail={userMail}
            userCity={userCity}
            userLinkedIn={userLinkedIn}
            userGitHub={userGitHub}

            userEducationList={userEducationList}
            // userSchool={userSchool}
            // userDegree={userDegree}
            // userGPA={userGPA}
            // userGradDate={userGradDate}
            // userCourses={userCourses}
            // userCompany={userCompany}
            
            userExperienceList={userExperienceList}
            // userPosition={userPosition}
            // userStartDate={userStartDate}
            // userEndDate={userEndDate}
            // positionLocation={positionLocation}
            // positionDescription={positionDescription}
        />
        </section>  
      </main>
    </>
  )
}

export default App;

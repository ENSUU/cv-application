// useState
import { useState } from 'react';

// Importing components 
import Navbar from './components/Navbar';
import Resume from './components/Resume';

// Importing stylesheet
import './styles/app.css'; 

function App() {
  // Index variables for Education and Experience subtabs. 
  let eduIndex = 0; 
  let expIndex = 0; 

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

  // Functions
  // - Functions to handle expanding animation when either General, Education, or Experience tabs are clicked. 
  function handleClickGeneral() {
    // Handling opening animation(s). 
    const form = document.querySelector('.generalForm'); 
    toggleHidden(form); 
    document.querySelector('.generalHeader img').classList.toggle('clicked');
  }

  const handleClickEducation = () => {
    document.querySelector('.educationHeader img').classList.toggle('clicked');
    toggleHidden(document.querySelector('.userEducationTabs'));
    toggleHidden(document.querySelector('.educationBody'));
    toggleHidden(document.querySelector('.addEducationBtnContainer'))
  }

  const handleClickExperience = () => {
    document.querySelector('.experienceHeader img').classList.toggle('clicked');
    toggleHidden(document.querySelector('.userExperienceTabs'));
    toggleHidden(document.querySelector('.experienceBody'));
    toggleHidden(document.querySelector('.addExperienceBtnContainer'));
  }

  // - When the user adds to Education/Experience. 
  const handleClickAddEducation = () => {
    const form = document.querySelector('.educationForm'); 
    toggleHidden(form);
    toggleExtend(form);
  }

  const handleClickAddExperience = () => {
    const form = document.querySelector('.experienceForm'); 
    toggleHidden(form);
    toggleExtend(form); 
  }

  // - When the user clicks the cancel button on the main tabs (Experience, Education, General).  
  const handleCancelEdu = (e) => {
    // Prevent the webpage from refreshing. 
    e.preventDefault();
    // Select the form used to enter data. 
    const thisTabsForm = e.target.parentElement.parentElement; 
    // Toggle hidden class for both Add and the form. 
    toggleHidden(thisTabsForm); 
    // toggleHidden(document.querySelector('.addEducationBtn'))
  }

  const handleCancelExp = (e) => {
    // Prevent default behavior of refreshing webpage. 
    e.preventDefault();
    // Select the form used to enter data. 
    const thisTabsForm = e.target.parentElement.parentElement; 
    // Toggle hidden class for both Add and the form. 
    toggleHidden(thisTabsForm); 
    // toggleHidden(document.querySelector('.addExperienceBtn'))
  }

  // - When the user clicks the cancel button on the subtabs (while editing). 
  const handleCancelEduSubtab = (e) => {
    // Prevent webpage refresh.
    e.preventDefault(); 
    // Select the form used to enter data. 
    const thisTabsForm = e.target.parentElement.parentElement; 
    // Toggle hidden for the subtab's form ONLY (not the Add button). 
    toggleHidden(thisTabsForm);
  }

  const handleCancelExpSubtab = (e) => {
    // Prevent webpage refresh. 
    e.preventDefault(); 
    // Select the form used to enter data. 
    const thisTabsForm = e.target.parentElement.parentElement; 
    // Toggle hidden for the subtab's form ONLY (not the Add button). 
    toggleHidden(thisTabsForm);
  }

  // - When the user clicks on a subtab inside either the Education or Experience tabs. 
  const handleExpandEduSubtab = (e) => {
    // Select the clicked subtab's form. 
    const thisTabsForm = e.target.children[0]; 
    console.log(thisTabsForm);
    // Toggle the visibility of the form. 
    toggleHidden(thisTabsForm);
    // Grab the data for the subtab. 
    const tabInfo = userEducationList[e.target.dataset.index]; 
    // Set the state variables to the subtab's values. This will also fill in the input fields of the subtab's form with the previous values. 
    setUserSchool(tabInfo.userSchool);  
    setUserDegree(tabInfo.userDegree); 
    setUserGPA(tabInfo.userGPA); 
    setUserGradDate(tabInfo.userGradDate); 
    setUserCourses(tabInfo.userCourses);
  }

  const handleExpandExpSubtab = (e) => {
    toggleHidden(document.querySelector('.addExperienceBtn'));

    const thisTabsForm = e.target.children[0]; 
    
    toggleHidden(thisTabsForm); 

    const tabInfo = userExperienceList[e.target.dataset.index]; 

    setUserCompany(tabInfo.userCompany);
    setUserPosition(tabInfo.userPosition); 
    setUserStartDate(tabInfo.userStartDate); 
    setUserEndDate(tabInfo.userEndDate); 
    setPositionLocation(tabInfo.positionLocation); 
    setPositionDescription(tabInfo.positionDescription);
  }

  // - When the user wants to edit an already added subtab. 
  const handleEditEducation = (e) => {
    // Prevent default behavior of refreshing the webpage. 
    e.preventDefault(); 
    // Grab the subtab's data from userEducationList. 
    const tabInfo = userEducationList[e.target.parentElement.dataset.index]; 
    // Update the object holding the subtab's information with the new edits made by the user.
    tabInfo.userSchool = userSchool; 
    tabInfo.userDegree = userDegree; 
    tabInfo.userGPA = userGPA; 
    tabInfo.userGradDate = userGradDate; 
    tabInfo.userCourses = userCourses; 
    // Also update userEducationList with the new edits made by the user. 
    setUserEducationList([...userEducationList]); 
    // Reset the state variables for the Education tab. 
    setUserSchool(''); 
    setUserDegree('');
    setUserGPA('');
    setUserGradDate('');
    setUserCourses('');
    // Hide the subtab's form. 
    toggleHidden(e.target);
  }

  const handleEditExperience = (e) => {
    e.preventDefault(); 

    const tabInfo = userExperienceList[e.target.dataset.index]; 
    
    tabInfo.userCompany = userCompany; 
    tabInfo.userPosition = userPosition;
    tabInfo.userStartDate = userStartDate; 
    tabInfo.userEndDate = userEndDate; 
    tabInfo.positionLocation = positionLocation; 
    tabInfo.positionDescription = positionDescription; 

    setUserExperienceList([...userExperienceList]); 

    setUserCompany(userCompany); 
    setUserPosition(userPosition); 
    setUserStartDate(userStartDate); 
    setUserEndDate(userEndDate); 
    setPositionLocation(positionLocation); 
    setPositionDescription(positionDescription);
    
    toggleHidden(e.target);
  }

  // - Handling form submissions i.e when the user clicks the save button. 
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

      const form = document.querySelector('.educationForm'); 
      toggleHidden(form);
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

    const form = document.querySelector('.experienceForm'); 
    toggleHidden(form);
  }

  // - Used to handle hiding elements & class-based animations. 
  const toggleHidden = (elem) => {
    elem.classList.toggle('hidden');
  }

  const toggleExtend = (elem) => {
    elem.classList.toggle('extended');
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
                <h1 onClick={handleClickGeneral}>General Info<img className="down" src="/cv-application/chevron-down.svg" alt="Picture of expand down arrow" /></h1>
            </div>
            <form className="generalForm hidden">
                {/* User's Name Field */}
                <label htmlFor="userName"> * Name</label>
                <input 
                    id="userName" 
                    name="userName" 
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                />
                {/* User's Email Field */}
                <label htmlFor="userEmail"> * Email</label>
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
                <h1 onClick={handleClickEducation}>Education <img className="down" src="/cv-application/chevron-down.svg" alt="Picture of expand down arrow" /></h1>
            </div>
            <div className="userEducationTabs hidden">
              {userEducationList.map(education => {
                return (
                <div key={eduIndex} className="educationTab" data-index={eduIndex++} onClick={handleExpandEduSubtab}>
                    {/* <h3>{education.userSchool}</h3> */}
                    {education.userSchool}
                    <form className="subEducationForm hidden" onSubmit={handleEditEducation}>
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
                        <div className="btnContainer">
                          {/* Cancel Button */}
                          <button className="cancelBtn" onClick={handleCancelEduSubtab}>Cancel</button>
                          {/* Save Button */}
                          <button className='saveBtn' type='submit'>Save</button>
                        </div>
                    </form>
                   </div>
                )
              })}
            </div>
            <div className="educationBody hidden">
              <form className="educationForm" onSubmit={handleSubmitEducation}>
                  <h3>Add New Education</h3>
                  {/* User's School Field */}
                  <label htmlFor="">* School</label>
                  <input 
                    id="userSchool" 
                    name="userSchool" 
                    value={userSchool}
                    onChange={(e) => setUserSchool(e.target.value)}
                    type="text"
                    required 
                  />
                  {/* User's Degree Field */}
                  <label htmlFor="">* Degree</label>
                  <input 
                    id="userDegree" 
                    name="userMajor" 
                    value={userDegree}
                    onChange={(e) => setUserDegree(e.target.value)}
                    type="text"
                    required 
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
                  <label htmlFor="userGradDate">* Graduation Date</label>
                  <input 
                    id="userGradDate" 
                    name="userGradDate"
                    value={userGradDate}
                    onChange={(e) => setUserGradDate(e.target.value)}
                    type="text" 
                    required 
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
                  <div className="btnContainer">
                    {/* Cancel Button */}
                    <button className="cancelBtn" onClick={handleCancelEdu}>Cancel</button>
                    {/* Save Button */}
                    <button className='saveBtn' type='submit'>Save</button>
                  </div>
              </form>
            </div>
            <div className="addEducationBtnContainer hidden">
              <button className='addEducationBtn' onClick={handleClickAddEducation}>Add +</button>
            </div>
          </div>

          {/* Experience Tab */}
          <div className="experience">
            <div className="experienceHeader">
                <h1 onClick={handleClickExperience}>Experience <img className="down" src="/cv-application/chevron-down.svg" alt="Picture of expand down arrow" /> </h1>
            </div>
            <div className="userExperienceTabs hidden">
              {userExperienceList.map(experience => {
                return (
                  <div key={expIndex} className="experienceTab" data-index={expIndex++} onClick={handleExpandExpSubtab}>
                    {experience.userPosition}
                    <form className="subExperienceForm hidden" onSubmit={handleEditExperience}>
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
                      <div className="btnContainer">
                        {/* Cancel Button */}
                        <button className="cancelBtn" onClick={handleCancelExpSubtab}>Cancel</button>
                        {/* Save Button */}
                        <button className='saveBtn' type='submit'>Save</button>
                      </div>
                    </form>
                  </div>
                )
              })}
            </div>
            <div className="experienceBody hidden">
              <form className="experienceForm" onSubmit={handleSubmitExperience}>
                <h3>Add New Experience</h3>
                  {/* Company Name Field */}
                  <label htmlFor="userCompany">* Company Name</label>
                  <input 
                    type="text" 
                    id="userCompany" 
                    name="userCompany" 
                    value={userCompany} 
                    onChange={(e) => setUserCompany(e.target.value)}
                    required 
                  />
                  {/* Position @ Company */}
                  <label htmlFor="userPos">* Position Title</label>
                  <input 
                    type="text" 
                    id="userPos" 
                    name="userPos" 
                    value={userPosition}
                    onChange={(e) => setUserPosition(e.target.value)}
                    required 
                  />
                  {/* Position Start Date */}
                  <label htmlFor="userPosStartDate">* Start Date</label>
                  <input 
                    type="text" 
                    id="userPosStartDate" 
                    name="userPosStartDate" 
                    value={userStartDate}
                    onChange={(e) => setUserStartDate(e.target.value)}
                    required 
                  />
                  {/* Position End Date */}
                  <label htmlFor="userPosEndDate">* End Date</label>
                  <input 
                    type="text" 
                    id="userPosEndDate" 
                    name="userPosEndDate" 
                    value={userEndDate}
                    onChange={(e) => setUserEndDate(e.target.value)}
                    required 
                  /> 
                  {/* Position Location */}
                  <label htmlFor="userPosLoc">* Location</label>
                  <input 
                    type="text" 
                    id="userPosLoc" 
                    name="userPosLoc" 
                    value={positionLocation}
                    onChange={(e) => setPositionLocation(e.target.value)}
                  />
                  {/* Position Description */}
                  <label htmlFor="userPosDesc">* Description</label>
                  <textarea 
                    name="userPosDesc" 
                    id="userPosDesc" 
                    cols="30" 
                    rows="10"
                    value={positionDescription}
                    onChange={(e) => setPositionDescription(e.target.value)}
                    required 
                  ></textarea>
                  <div className="btnContainer">
                    {/* Cancel Button */}
                    <button className="cancelBtn" onClick={handleCancelExp}>Cancel</button>
                    {/* Save Button */}
                    <button className='saveBtn' type='submit'>Save</button>
                  </div>
              </form>
            </div>
            <div className="addExperienceBtnContainer hidden">
              <button className='addExperienceBtn' onClick={handleClickAddExperience}>Add +</button>
            </div>
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
            userExperienceList={userExperienceList}
        />
        </section>  
      </main>
    </>
  )
}

export default App;

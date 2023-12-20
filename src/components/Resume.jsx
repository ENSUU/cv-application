import ResumeHeader from './ResumeHeader';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';

import '../styles/resume.css';
// userSchool, userDegree, userGPA, userGradDate, userCourses, 
// userCompany, userPosition, userStartDate, userEndDate, positionLocation, positionDescription 
function Resume({ userName, userMail, userCity, userLinkedIn, userGitHub, userEducationList, userExperienceList}) {
    return ( 
        <div className="userResume">
            <ResumeHeader userName={userName} userMail={userMail} userCity={userCity} userLinkedIn={userLinkedIn} userGitHub={userGitHub} />
            <div className="userEducation">
                <h4>Education</h4>
                <hr />
                {userEducationList.map(education => {
                    console.log(education);
                    return <ResumeEducation key={education.userSchool} education={education} />
                })}
            </div>
            <div className="userExperience">
                <h4>Experience</h4>
                <hr />
                {userExperienceList.map(experience => {
                    return <ResumeExperience key={experience.userCompany + experience.userStartDate} userExperience={experience} />
                })}
            </div>
        </div>
    )
}

export default Resume; 
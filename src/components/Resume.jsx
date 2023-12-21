import ResumeHeader from './ResumeHeader';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';

// app.css is also being applied to this component. 
import '../styles/resume.css';

function Resume({ userName, userMail, userCity, userLinkedIn, userGitHub, userEducationList, userExperienceList}) {
    return ( 
        <div className="userResume">
            <ResumeHeader userName={userName} userMail={userMail} userCity={userCity} userLinkedIn={userLinkedIn} userGitHub={userGitHub} />
            {/* Conditionally render the Education section of the user's resume. Only after user adds at least one Education entry.  */}
            {userEducationList.length !== 0 && (
                <div className="userEducation">
                    <h4>Education</h4>
                    <hr />
                    {userEducationList.map(education => {
                        console.log(education);
                        return <ResumeEducation key={education.userSchool} education={education} />
                    })}
                </div>
              )
            }
            {/* Conditionally render the Experience section of the user's resume. Only after user adds at least one Experience entry.  */}
            {userExperienceList.length !== 0 && (
                <div className="userExperience">
                    <h4>Experience</h4>
                    <hr />
                    {userExperienceList.map(experience => {
                        return <ResumeExperience key={experience.userCompany + experience.userStartDate} userExperience={experience} />
                    })}
                </div>
              )
            }
        </div>
    )
}

export default Resume; 
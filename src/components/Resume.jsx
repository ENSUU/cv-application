import ResumeHeader from './ResumeHeader';

import '../styles/resume.css';

function Resume() {
    return (
        <div className="userResume">
            <ResumeHeader />
            <div className="userEducation">
                <h6>Education</h6>
                <hr />
                <p>(College Name) | (College Location) <span className="gradDate">(Grad Date)</span></p>
                <p><i>(Some Degree in Some Major)</i> <span className="GPA">(Some GPA)</span></p>
                <p><b>Relevant Coursework</b>: (List coursework here)</p>
            </div>
            <div className="userExperience">
                <h6>Experience</h6>
                <hr />
                <p>(Company Name) - (Position Title) | (Location) <span className='employmentDates'>(Start Date) - (End Date)</span></p>
                <p>(Make a list here, iterating through each sentence of inputted description)</p>
            </div>
        </div>
    )
}

export default Resume; 
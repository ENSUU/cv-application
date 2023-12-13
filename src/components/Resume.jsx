import '../styles/resume.css';

function Resume() {
    return (
        <div className="userResume">
            <h6 className="userName">(First Name) (Last Name)</h6>
            <div className="userInfo">
                <h6>(City) | (Email) | (LinkedIn) | (GitHub)</h6>
            </div>
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
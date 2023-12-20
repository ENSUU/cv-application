function ResumeEducation ({ education }) {
    return (
        <div className='educationBullet'>
            <p>
                <b>{education.userSchool}</b> 
                <span className="gradDate">{education.userGradDate}</span>
            </p>
            <p>
                <i>{education.userDegree}</i> 
                {education.userGPA && <span className="GPA">Cumulative GPA: {education.userGPA}</span>}
            </p>
            {education.userCourses && <p><b>Relevant Coursework</b>: {education.userCourses}</p>}
        </div>
    );
}

export default ResumeEducation; 
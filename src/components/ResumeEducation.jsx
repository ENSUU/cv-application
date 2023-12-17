function ResumeEducation ({ education }) {
    return (
        <div className='educationBullet'>
            <p><b>{education.userSchool}</b> <span className="gradDate">{education.userGradDate}</span></p>
            <p><i>{education.userDegree}</i> <span className="GPA">Cumulative GPA: {education.userGPA}</span></p>
            <p><b>Relevant Coursework</b>: {education.userCourses}</p>
        </div>
    );
}

export default ResumeEducation; 
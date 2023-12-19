function ResumeExperience( { userExperience } ) {
    return (
        <div className='experienceBullet'>
            <p><b>{userExperience.userPosition}</b> <span className='employmentDates'>{userExperience.userStartDate} - {userExperience.userEndDate}</span></p>
            <p>{userExperience.userCompany} <span className='experienceLocation'>{userExperience.positionLocation}</span></p>
            <ul>
                {userExperience.positionDescription.split('.').map(bulletPoint => {
                    const sentence = bulletPoint.trim(); 
                    return sentence.length > 0 && <li key={bulletPoint}>{sentence + '.'}</li>
                })}
            </ul>
        </div>
    ); 
}

export default ResumeExperience; 
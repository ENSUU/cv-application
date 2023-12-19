function ResumeHeader({ userName, userCity, userMail, userLinkedIn, userGitHub }) {
    return (
        <div className='userHeader'>
            <h1 className="userName">{userName}</h1>
            <div className="userInfo">
                <h4>
                    {userCity && (userCity)} 
                    {userMail && (' • ' + userMail)} 
                    {userLinkedIn && (' • ' + userLinkedIn)} 
                    {userGitHub && (userGitHub)}
                </h4>
            </div>
        </div>
    );
}

export default ResumeHeader; 
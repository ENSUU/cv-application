import { useState } from 'react';

function General() {
    // State
    const [userName, setUserName] = useState('');
    const [userMail, setUserMail] = useState('');
    const [userNumber, setUserNumber] = useState('');
    const [userLinkedIn, setUserLinkedIn] = useState(''); 
    const [userGitHub, setUserGitHub] = useState('');

    const handleClick = () => {
        // Handling opening animation(s). 
        const form = document.querySelector('.generalForm'); 
        const arrow = document.querySelector('.generalHeader .down'); 

        arrow.classList.toggle('clicked');
        form.classList.toggle('hidden');
        form.classList.toggle('extended');
    }

    const handleSubmit = (e) => {
        // Prevent page reload. 
        e.preventDefault(); 
        // Send the user-inputted data to another component. 
        console.log({userName, userMail, userNumber, userLinkedIn, userGitHub}); 
        // Reset all the fields in the form. 
        setUserName(''); 
        setUserMail('');
        setUserNumber('');
        setUserLinkedIn('');
        setUserGitHub('');
    }

    return (
        <div className="general">
            <div className="generalHeader">
                <h1 onClick={handleClick}>General <span><img className="down" src="/chevron-down.svg" alt="Picture of expand down arrow" /></span></h1>
            </div>
            <form className="generalForm hidden" onSubmit={handleSubmit}>
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
                <label htmlFor="userPhone">Phone Number</label>
                <input 
                    id="userPhone" 
                    name="userPhone" 
                    value={userNumber} 
                    onChange={(e) => setUserNumber(e.target.value)}
                    type="number"
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
                <div className="saveBtnContainer">
                    <button className='saveBtn' type='submit'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default General; 
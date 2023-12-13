function General() {
    return (
        <form>
            <h1>General</h1>
            {/* User's Name Field */}
            <label htmlFor="userName">Name</label>
            <input id="userName" name="userName" type="text"/>
            {/* User's Email Field */}
            <label htmlFor="userEmail">Email</label>
            <input id="userEmail" name="userEmail" type="email"/>
            {/* User's Phone Number */}
            <label htmlFor="userPhone">Phone Number</label>
            <input id="userPhone" name="userPhone" type="number"/>
            {/* User's LinkedIn Profile */}
            <label htmlFor="userLinkedIn">LinkedIn Profile URL</label>
            <input id="userLinkedIn" name="userLinkedIn" type="text"/>
            {/* User's Phone Number */}
            <label htmlFor="userGitHub">GitHub Profile URL</label>
            <input id="userGitHub" name="userGitHub" type="text"/>
            {/* Save Button */}
            <div className="saveBtnContainer">
                <button className='saveBtn' type='submit'>Save</button>
            </div>
        </form>
    )
}

export default General; 
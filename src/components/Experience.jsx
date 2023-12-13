function Experience() {
    return (
        <form>
            <h1>Experience</h1>
            {/* Company Name Field */}
            <label htmlFor="userCompany">Company Name</label>
            <input type="text" id="userCompany" name="userCompany"/>
            {/* Position @ Company */}
            <label htmlFor="userPos">Position Title</label>
            <input type="text" id="userPos" name="userPos" />
            {/* Position Start Date */}
            <label htmlFor="userPosStartDate">Start Date</label>
            <input type="text" id="userPosStartDate" name="userPosStartDate" />
            {/* Position End Date */}
            <label htmlFor="userPosEndDate">End Date</label>
            <input type="text" id="userPosEndDate" name="userPosEndDate" />
            {/* Position Location */}
            <label htmlFor="userPosLoc">Location</label>
            <input type="text" id="userPosLoc" name="userPosLoc" />
            {/* Position Description */}
            <label htmlFor="userPosDesc">Description</label>
            <textarea name="userPosDesc" id="userPosDesc" cols="30" rows="20"></textarea>
        </form>
    )
}

export default Experience; 
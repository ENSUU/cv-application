function Experience() {

    const handleClick = () => {
        const form = document.querySelector('.experienceForm'); 
        const arrow = document.querySelector('.experienceHeader .down'); 
        
        arrow.classList.toggle('clicked');
        form.classList.toggle('hidden');
        form.classList.toggle('extended');
    }

    return (
        <div className="experience">
            <div className="experienceHeader">
                <h1 onClick={handleClick}>Experience <span><img className="down" src="/chevron-down.svg" alt="Picture of expand down arrow" /></span></h1>
            </div>
            <form className="experienceForm hidden">
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
                <textarea name="userPosDesc" id="userPosDesc" cols="30" rows="10"></textarea>
                {/* Save Button */}
                <div className="saveBtnContainer">
                    <button className='saveBtn' type='submit'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Experience; 
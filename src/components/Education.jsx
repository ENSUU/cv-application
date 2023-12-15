function Education() {

    const handleClick = () => {
        const form = document.querySelector('.educationForm'); 
        const arrow = document.querySelector('.educationHeader .down'); 
        
        arrow.classList.toggle('clicked');
        form.classList.toggle('hidden');
        form.classList.toggle('extended');
    }

    return (
        <div className="education">
            <div className="educationHeader">
                <h1 onClick={handleClick}>Education <span><img className="down" src="/chevron-down.svg" alt="Picture of expand down arrow" /></span></h1>
            </div>
            <form className="educationForm hidden">
                {/* User's School Field */}
                <label htmlFor="">School</label>
                <input id="userSchool" name="userSchool" type="text"/>
                {/* User's Degree Field */}
                <label htmlFor="">Degree</label>
                <input id="userDegree" name="userMajor" type="email"/>
                {/* User's GPA */}
                <label htmlFor="userGPA">Cumulative GPA</label>
                <input type="number" id="userGPA" name="userGPA" />
                {/* User's Education End/Graduation Date */}
                <label htmlFor="userGradDate">Graduation Date</label>
                <input type="text" id="userGradDate" name="userGradDate"/>
                {/* User's Relevant Coursework */}
                <label htmlFor="userRelCourses">Relevant Coursework</label>
                <textarea name="userRelCourses" id="userRelCourses" cols="30" rows="10"></textarea>
                {/* Save Button */}
                <div className="saveBtnContainer">
                    <button className='saveBtn' type='submit'>Save</button>
                </div>
            </form>
        </div>
    )
}

export default Education; 
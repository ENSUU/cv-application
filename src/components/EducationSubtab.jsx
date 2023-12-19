function EducationSubtab({userSchool, userDegree, userGPA, userGradDate, userCourses}) {
    return (
        <div className="educationBody hidden">
            <form className="educationForm hidden" onSubmit={handleSubmitEducation}>
                {/* User's School Field */}
                <label htmlFor="">School</label>
                <input 
                id="userSchool" 
                name="userSchool" 
                value={userSchool}
                onChange={(e) => setUserSchool(e.target.value)}
                type="text"
                />
                {/* User's Degree Field */}
                <label htmlFor="">Degree</label>
                <input 
                id="userDegree" 
                name="userMajor" 
                value={userDegree}
                onChange={(e) => setUserDegree(e.target.value)}
                type="text"
                />
                {/* User's GPA */}
                <label htmlFor="userGPA">Cumulative GPA</label>
                <input
                id="userGPA"
                name="userGPA" 
                value={userGPA}
                onChange={e => setUserGPA(e.target.value)}
                type="number" 
                />
                {/* User's Education End/Graduation Date */}
                <label htmlFor="userGradDate">Graduation Date</label>
                <input 
                id="userGradDate" 
                name="userGradDate"
                value={userGradDate}
                onChange={(e) => setUserGradDate(e.target.value)}
                type="text" 
                />
                {/* User's Relevant Coursework */}
                <label htmlFor="userRelCourses">Relevant Coursework</label>
                <textarea
                id="userRelCourses"
                name="userRelCourses"  
                value={userCourses}
                onChange={(e) => setUserCourses(e.target.value)}
                cols="30" 
                rows="10"
                ></textarea>
                <div className="btnContainer">
                {/* Cancel Button */}
                <button className="cancelBtn" onClick={handleCancelEdu}>Cancel</button>
                {/* Save Button */}
                <button className='saveBtn' type='submit'>Save</button>
                </div>
            </form>
        </div>
    ); 
}

export default EducationSubtab;
function Education() {
    return (
        <form>
            <h1>Education</h1>
            {/* User's School Field */}
            <label htmlFor="">School</label>
            <input id="userSchool" name="userSchool" type="text"/>
            {/* User's Degree Field */}
            <label htmlFor="">Degree</label>
            <input id="userDegree" name="userMajor" type="email"/>
            {/* User's Education Start Date */}
            <label htmlFor="">Start Date</label>
            <input type="text" id="userStartDate" name="userStartDate"/>
            {/* User's Education End Date */}
            <label htmlFor="">End Date</label>
            <input type="text" id="userEndDate" name="userEndDate"/>
            {/* Save Button */}
            <div className="saveBtnContainer">
                <button className='saveBtn' type='submit'>Save</button>
            </div>
        </form>
    )
}

export default Education; 
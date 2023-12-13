function General() {
    return (
        <form>
            <h1>General</h1>
            {/* User's Name Field */}
            <label htmlFor="">Name</label>
            <input id="userName" name="userName" type="text"/>
            {/* User's Email Field */}
            <label htmlFor="">Email</label>
            <input id="userEmail" name="userEmail" type="email"/>
            {/* User's Phone Number */}
            <label htmlFor="">Phone Number</label>
            <input id="userPhone" name="userPhone" type="number"/>
        </form>
    )
}

export default General; 
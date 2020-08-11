import React, { useState } from 'react'
import './home.scss'

function Home() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [verifypassword, setVerifypassword] = useState('')
    const [gender, setGender] = useState('')
    const [showdata, setShowdata] = useState(false)
    const [showinfo, setShowinfo] = useState(false)



    const onSubmitHandle = () => {
        setShowdata(true)
        if(firstname !== '' && lastname !== '' && email !== '' && gender !== '' && password !== '' && verifypassword !== '') {
            setShowinfo(true)
        }
    }

    const showalert = (input) => {
        if(input.length === 0){
            return(
                <p className="alert_show">please fill data</p>
            )
        }
    }

    const validateEmail = (email) => {
        if(email.length !== 0){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                return (
                    <p className="approve_show">This email can be used</p>
                )
            }
            else {
                return (
                    <p className="alert_show">You have entered an invalid email address!</p>
                )
            }
        }
        else {
            return ('')
        }
    }
    
    return (
        <div className="home_container">
            <h1>Home form validation</h1>
            <div className="form_container">
                <form onSubmit={e => {e.preventDefault(); onSubmitHandle()}} >
                    <div className="input_group">
                        <div className="first_group">
                            <h3>First name</h3>
                            <input type="text" name="firstname" onChange={e => setFirstname(e.target.value)} placeholder="Firstname" />
                        </div>
                        <div>
                            {firstname && firstname.length > 0 ?  <p className="approve_show">Can use Firstname</p> : ''}
                            {showdata === true ? showalert(firstname) : ''}
                        </div>
                    </div>
                    <div className="input_group">
                        <div className="first_group">
                            <h3>Last name</h3>
                            <input type="text" name="lastname" onChange={e => setLastname(e.target.value)} placeholder="Lastname" />
                        </div>
                        <div>
                            {lastname && lastname.length > 0 ? <p className="approve_show">Can use Lastname</p> : ''}
                            {showdata === true ? showalert(lastname) : ''}
                        </div>
                    </div>
                    <div className="input_group">
                        <div className="first_group">
                            <h3>Email</h3>
                            <input type="email" name="email" onChange={e => setEmail(e.target.value)} placeholder="Email" />
                        </div>
                        <div>
                            {validateEmail(email)}
                            {showdata === true ? showalert(email) : ''}
                        </div>
                    </div>
                    <div className="input_group">
                        <div className="first_group">
                            <h3>Password</h3>
                            <input type="password" name="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <div>
                            {password && password.length > 0 ?  <p className="approve_show">Can use Password</p>: ''}
                            {showdata === true ? showalert(password) : ''}
                        </div>
                    </div>
                    <div className="input_group">
                        <div className="first_group">
                            <h3>Verify password</h3>
                            <input type="password" name="verifypassword" onChange={e => setVerifypassword(e.target.value)} placeholder="verifypassword"  />
                        </div>
                        <div>
                            {verifypassword && verifypassword.length !== 0 ? verifypassword !== password ?  <p className="alert_show">password is not match</p> : <p className="approve_show">Can use password</p>: ''  }
                            {showdata === true ? showalert(verifypassword) : ''}
                        </div>
                    </div>
                    <div className="input_group">
                        <div className="first_group">
                            <h3>Gender</h3>
                            <select name="gender" defaultValue={gender} onChange={e => setGender(e.target.value)} >
                                <option value=""></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div>
                            {showdata === true ? showalert(firstname) : ''}
                        </div>
                    </div>
                    <div>
                        <button className="btn_submit" >Submit</button>
                    </div>
                </form>
                {
                    showinfo === true ? 
                    <div className="box_info">
                        <h3>Result</h3>
                        <h3><span>Firstname :</span> {firstname}</h3>
                        <h3><span>Lastname :</span> {lastname}</h3>
                        <h3><span>E mail :</span> {email}</h3>
                        <h3><span>Gender :</span> {gender}</h3>
                    </div>
                    : ''
                }
            </div>
        </div>
    )
}


export default Home

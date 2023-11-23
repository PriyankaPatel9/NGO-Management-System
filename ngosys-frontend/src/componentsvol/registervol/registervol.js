import React, { useState } from "react"
import "./registervol.css"
import axios from "axios"
import { useHistory } from "react-router-dom";
import Navbar from "../../commoncomponent/navbar";
import img1 from "../../firstpage/images/logart.png"
import Footer from "../../commoncomponent/footer/footer2/footer2";

const Registervol = () => {
     const history = useHistory();
     const [user, setUser] = useState({
          firstname: "",
          lastname: "",
          address: "",
          city: "",
          state: "",
          gender: "",
          pnumber: "",
          email: "",
          passwd: "",
          reenterpassword: ""
     })

     const handleChange = e => {
          const { name, value } = e.target
          setUser({
               ...user,
               [name]: value
          })
     }

     const registerVol = () => {
          const { firstname, lastname, address, city, state, gender, pnumber, email, passwd, reenterpassword } = user
          if (emailErrorstatus === "false") {
               if (firstname && lastname && email && address && city && state && gender && pnumber && passwd) {
                    if (passwd === reenterpassword) {

                         axios.post("http://localhost:9002/registervol", user)
                              .then(res => alert(res.data.message))
                         history.push("/loginvol")
                    }
                    else {
                         alert("Passwords don't match.")
                    }
               }
               else {
                    alert("Please check whether all the fields have been filled.")
               }
          } else {

          }
     }


     const [emailError, setEmailError] = useState('')
     const [emailErrorstatus, setEmailErrorstatus] = useState('')

     const validateEmail = (e) => {

          let email = e.target.value
          let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          console.log(e)
          if (re.test(email)) {
               setEmailError('Valid Email :)')
               setEmailErrorstatus("false");
               handleChange(e);
          } else {
               setEmailError('Enter valid Email!')
               setEmailErrorstatus("true");

          }
     }

     return (
          <>
                    <div className="regvolbox">
                         <div className="formB">
                              <h1>Register as a Volunteer</h1>
                              <div className="fields">
                                   <label> First name: </label>
                                   <input type="text" name="firstname" value={user.firstname} placeholder="Enter First Name" onChange={handleChange}></input>
                              </div>
                              <div className="fields">
                                   <label> Last name: </label>
                                   <input type="text" name="lastname" value={user.lastname} placeholder="Enter Last Name" onChange={handleChange}></input>
                              </div>
                              <div className="fields">
                                   <label> Address: </label>
                                   <textarea name="address" value={user.address} placeholder="Enter Address" onChange={handleChange}></textarea>
                              </div>
                              <div className="fields">
                                   <label> City: </label>
                                   <input type="text" name="city" value={user.city} placeholder="Enter City" onChange={handleChange}></input>
                              </div>
                              <div className="fields">
                                   <label> State: </label>
                                   <input type="text" name="state" value={user.state} placeholder="Enter State" onChange={handleChange} ></input>
                              </div>
                              <div className="fields" >
                                   <label className="gender2"> Gender : </label>
                                   <input type="radio" name="gender" value="male" style={{ paddingLeft: '20px' }} onChange={handleChange}></input>
                                   <label> Male </label>
                                   <input type="radio" name="gender" value="female" onChange={handleChange}></input>
                                   <label> Female </label>
                              </div>
                              <div className="fields">
                                   <label> Number: </label>
                                   <input type="text" name="pnumber" value={user.pnumber} placeholder="Enter Phone Number" onChange={handleChange}></input>
                              </div>
                              <div className="fields">
                                   <label> E-mail: </label>
                                   <input type='email' name="email" value={user.email} placeholder="Enter E-mail" onChange={handleChange} onInput={(e) => validateEmail(e)} ></input>
                                   <span style={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                   }}>{emailError}</span>
                              </div>
                              <div className="fields">
                                   <label> Password: </label>
                                   <input type="password" name="passwd" value={user.passwd} placeholder="Enter Password" onChange={handleChange} ></input>
                              </div>
                              <div className="fields">
                                   <label> Confirm Password: </label>
                                   <input type="password" name="reenterpassword" value={user.reenterpassword} placeholder="Re-Enter Password" onChange={handleChange} ></input>
                              </div>
                              <div className="btn" id="rVol" onClick={registerVol}> Register </div>
                              <div>OR</div>
                              <div>
                                   <text>Already have Account? </text>
                                   <a className="loglinkvol" onClick={() => history.push("/loginvol")} title="Click here to sign in" style={{ cursor: 'pointer' }}> Sign In here </a>
                              </div>
                         </div>
                    </div>
          </>
     )
}

export default Registervol
import React from 'react'
import { useState } from 'react';
import './Form.css'

const Form = () => {
    const [render, setRender] = useState(false)
    const [user, setUser] = useState({
        name: "",
        email: "",
        website: "",
        image: "",
        gender: "",
        skills: ""
    })

    const [skill, setSkill] = useState({
        HTML: false,
        CSS: false,
        JavaScript: false,
        React: false,
        NodeJs: false,
    });

    const onHandleUserChange = (event) => {
        const { name, value } = event.target

        setUser({ ...user, [name]: value })
    }

    const handleSkillChange = (event) => {
        const { name, checked } = event.target;

        setSkill(prevSkills => ({ ...prevSkills, [name]: checked }));
    }

    const userSubmit = (e) => {
        e.preventDefault()
        setUser({ ...user, ['skills']: skill })
        setRender(true)
    }

    const RenderSkills = () => {
        const skillObject = user.skills
        const skillArray = []
        for (const key in skillObject) {
            if (skillObject[key] === true) {
                skillArray.push(key)
            }
        }
        console.log(skillArray)
        return (
            skillArray.map((skill) => <span key={skill}>{skill}</span>)
        )
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-evenly mt-5 mb-5">
                    <div className="col-md-5 col-11 mb-5">
                        <form onSubmit={userSubmit}>
                            {/* Name */}
                            <label htmlFor="name" className="field_label"><b>Name</b></label>
                            <input type="text" placeholder="Enter Name" name="name" id="name" value={user.name} onChange={onHandleUserChange} required />
                            <br />

                            {/* Email */}
                            <label htmlFor="email" className="field_label"><b>Email</b></label>
                            <input type="text" placeholder="Enter Email" name="email" id="email" value={user.email} onChange={onHandleUserChange} required />
                            <br />

                            {/* Website Link */}
                            <label htmlFor="website" className="field_label"><b>Website</b></label>
                            <input type="text" placeholder="Enter Website Link" name="website" id="website" value={user.website} onChange={onHandleUserChange} required />
                            <br />

                            {/* Image Link */}
                            <label htmlFor="image" className="field_label"><b>Image Link</b></label>
                            <input type="text" placeholder="Enter Image Link" name="image" id="image" value={user.image} onChange={onHandleUserChange} required />
                            <br />

                            {/* Gender Radio Button */}
                            <div>
                                <label htmlFor="gender" className="field_label"><b>Gender</b></label>
                                <label className='input_button'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={user.gender === 'Male'}
                                        onChange={onHandleUserChange}
                                    />
                                    Male
                                </label>
                                <label className='input_button'>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={user.gender === 'Female'}
                                        onChange={onHandleUserChange}
                                    />
                                    Female
                                </label>
                            </div>

                            {/* Skills Checkbox */}
                            <div>
                                <label htmlFor="skills" className="field_label"><b>Skills</b></label>

                                <label className='input_button'>
                                    <input
                                        type="checkbox"
                                        name="HTML"
                                        checked={skill.HTML}
                                        onChange={handleSkillChange}
                                    />
                                    HTML
                                </label>
                                <label className='input_button'>
                                    <input
                                        type="checkbox"
                                        name="CSS"
                                        checked={skill.CSS}
                                        onChange={handleSkillChange}
                                    />
                                    CSS
                                </label>
                                <label className='input_button'>
                                    <input
                                        type="checkbox"
                                        name="JavaScript"
                                        checked={skill.JavaScript}
                                        onChange={handleSkillChange}
                                    />
                                    JavaScript
                                </label>
                                <label className='input_button'>
                                    <input
                                        type="checkbox"
                                        name="React"
                                        checked={skill.React}
                                        onChange={handleSkillChange}
                                    />
                                    React
                                </label>
                                <label className='input_button'>
                                    <input
                                        type="checkbox"
                                        name="NodeJs"
                                        checked={skill.NodeJs}
                                        onChange={handleSkillChange}
                                    />
                                    Node.js
                                </label>
                            </div>
                            <button type='submit'>Submit</button>
                        </form>
                    </div>

                    {/* Display Data */}
                    <div className="col-md-5 col-11">
                        {
                            render ? <div className="row justify-content-center">
                                <div className="col-10 text-center card">
                                    <div className='card_img'>
                                        <img src={user.image} alt="" className='card_img' />
                                    </div>
                                    <div className='card_details'>
                                        <h5>{user.name}</h5>
                                        <p>{user.gender}</p>
                                        <p>{user.email}</p>
                                        <p className='mb-2'>{user.website}</p>
                                        <p>{RenderSkills()}</p>
                                    </div>
                                </div>
                            </div> : null
                        }
                    </div>

                </div>
            </div >
        </>
    )
}

export default Form
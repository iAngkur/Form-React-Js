import React from 'react';

class Inputs extends React.Component {

    state = {
        name: '',
        country: '',
        bio: '',
        birthday: '',
        gender: '',
        agree: false,
        skills: []
    }

    handleChnage = event => {
        // console.log(event.target.name);;
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleCheckbox = event => {
        // this.setState({agree: event.target.checked });
        this.setState({ agree: !this.state.agree });
    }

    handleSkillChange = event => {
        if (event.target.checked) {
            this.setState({ 
                skills: [...this.state.skills, event.target.value] 
            });
        } else {
            const skills = this.state.skills.filter(skill =>
                skill !== event.target.value);
            this.setState({skills});
        }
    }

    render() {
        const {name, country, bio, birthday, agree, skills} = this.state;
        return(
            <div className='container'>
                <input 
                    className='form-control my-2' 
                    type="text" 
                    name='name' 
                    placeholder='Enter name'
                    value={name}
                    onChange={this.handleChnage}
                />
                <select value={country} onChange={this.handleChnage} className='form-control my-2' name="country">
                    <option value="select-country">Select Country</option>
                    <option value="bangladesh">Bangladesh</option>
                    <option value="inida">India</option>
                    <option value="america">America</option>
                    <option value="srilanka">Srilanka</option>
                    <option value="china">China</option>
                    <option value="south-korea">South Korea</option>
                </select>
                <textarea 
                    className='form-control my-2' 
                    name="bio" 
                    value={bio}
                    placeholder='Tell me about yourself...'
                    onChange={this.handleChnage}>
                </textarea>
                <input 
                    className='form-control my-2' 
                    type="date" 
                    name='birthday' 
                    value={birthday}
                    onChange={this.handleChnage}
                />
                
                <div className ='form-check form-check-inline'>
                    <input className='form-check-input' type="radio" name='gender' id='inlineRadio1' value='Male' onChange={this.handleChnage}/>
                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                </div>
                <div className ='form-check form-check-inline'>
                    <input className='form-check-input' type="radio" name='gender' id='inlineRadio2' value='Female' onChange={this.handleChnage}/>
                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                </div>
                <div className ='form-check form-check-inline'>
                    <input className='form-check-input' type="radio" name='gender' id='inlineRadio3' value='Other' onChange={this.handleChnage}/>
                    <label className="form-check-label" htmlFor="inlineRadio3">Other</label>
                </div>

                <div>
                    <b>Skills: </b><br/>
                    <input
                        className='ml-2 mr-1' 
                        type="checkbox" 
                        name='skills' 
                        value='Java' 
                        checked={skills.includes("Java")} 
                        onChange={this.handleSkillChange}
                    />
                    Java
                    <input 
                        className='ml-2 mr-1' 
                        type="checkbox" 
                        name='skills' 
                        value='Python' 
                        checked={skills.includes("Python")} 
                        onChange={this.handleSkillChange}
                    />
                    Python
                    <input
                        className='ml-2 mr-1'  
                        type="checkbox" 
                        name='skills' 
                        value='JavaScript' 
                        checked={skills.includes("JavaScript")} 
                        onChange={this.handleSkillChange}
                    />
                    JavaScript
                    <input 
                        className='ml-2 mr-1' 
                        type="checkbox" 
                        name='skills' 
                        value='C++' 
                        checked={skills.includes("C++")} 
                        onChange={this.handleSkillChange}
                    />
                    C++
                </div>
            
                <div>
                    <input 
                        type="checkbox" 
                        name='agree' 
                        checked={agree}
                        onChange={this.handleCheckbox}
                    />
                     I agree to all the terms and conditions.
                </div>

                <button 
                    className='btn btn-primary mt-3'
                    onClick={() => console.log(this.state)}>
                    Show Data
                </button>
            </div>
        );
    }
}

export default Inputs;
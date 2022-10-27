import './studentclass_style.css';
import React from 'react';

class StudentClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "Illuminati", age: 18};
        this.increaseAge = this.increaseAge.bind(this);
        this.resetInfo = this.resetInfo.bind(this)
    };

    increaseAge() {
        this.setState((prevState) => {
            return {name: "Illuminati", age: prevState.age+1};
        })
    };

    resetInfo() {
        this.setState({name: "Illuminati", age: 18});
    };

    render() {
        return (
            <div className="student">
                <div className="student-buttons">
                    <button onClick={this.resetInfo}>Reset ...</button>
                    <button onClick={this.increaseAge}>Increase Age!</button>
                </div>
                <span>Hello! My name is {this.state.name} and I am {this.state.age} years old!</span>
            </div>
        )
    }
}

export default StudentClass;
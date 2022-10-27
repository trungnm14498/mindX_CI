import './student_style.css'
import { useState } from 'react'

function Student() {
    const [student, setStudent] = useState({name: "Kiritsu", age: 24});
    const increaseAge = () => {
        setStudent({...student, age: student.age + 1});
        console.log(student.age);
    }

    const resetStudent = () => {
        setStudent({name: "Kiritsu", age: 24})
    }
    return (
        <div className="student">
            <div className="student-buttons">
                <button onClick={resetStudent}>Reset ...</button>
                <button onClick={increaseAge}>Increase Age!</button>
            </div>
            <span>Hello! My name is {student.name} and I am {student.age} years old!</span>
        </div>
    )
}

export default Student;
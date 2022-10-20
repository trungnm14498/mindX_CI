import './style.css'

function InputItem() {
    return (
        <div className='input_field'>
            <input type="text" className="input_item" placeholder='Enter your task here ...'/>
        </div>
    )
}

function Checkbox() {
    return (            
        <span class="checkmark"></span>
    )
}

function TodolistItem(props) {
    return (
        <div className="content">
            <input type="checkbox" className="checkbox"/>
            {Checkbox()}      
            <div className="item">{props.text}</div>
        </div>
    )
}

function Footer(props) {
    return (
        <div className="footer_content">
            <p className='remaining_tasks'>{props.count} tasks left!</p>
            <p>MindX todolist</p>
        </div>
    )
}

export {TodolistItem};
export {InputItem};
export {Footer};
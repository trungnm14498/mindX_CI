import './layout_style.css'

function SplitPane({left, right}) {
    return (
        <div className="SplitPane container">
            <div className="SplitPane-left split_container">
                {left}
            </div>
            <div className="SplitPane-right split_container">
                {right}
            </div>
        </div>
    )
}

export default SplitPane;
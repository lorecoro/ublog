import React from "react"

class PaneHeader extends React.Component {
    render() {
        return (
            <>
                <button className="btn waves-effect waves-light" onClick={this.props.buttonAction}>{this.props.buttonText}</button>
            </>
        )
    }
}

export default PaneHeader
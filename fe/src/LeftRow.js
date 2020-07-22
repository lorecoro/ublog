import React from "react";

class LeftRow extends React.Component {
    render() {
        return (
            <>
                <div className="divider"></div>
                <div className="section">
                <h5>{this.props.user}</h5>
                <p>{this.props.post}</p>
                </div>
            </>
        )
    }
}

export default LeftRow
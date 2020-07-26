import React from "react"
import Avatar from "./Avatar"

class LeftUser extends React.Component {
    render() {
        return (
            <>
                <div className="row">
                    <Avatar name={this.props.name} userAction={this.props.userAction} />

                    <div className="col s9">
                        <div className="row">
                            <div className="col s6">
                                <p className="user">{this.props.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </>
        )
    }
}

export default LeftUser
import React from "react"
import LeftUser from "./LeftUser"

class LeftUsers extends React.Component {
    render() {
        const nOfUsers = this.props.users ? this.props.users.length : 0
        let leftUsers = []
        if (nOfUsers > 0) {
            for (let i = 0; i < nOfUsers; i++) {
                const { _id, name } = this.props.users[i]
                leftUsers.push(<LeftUser key={_id} name={name} userAction={this.props.userAction}/>)
            }
        }
        return (
            <div className="vscroll">
                { leftUsers }
            </div>
        )
    }
}

export default LeftUsers
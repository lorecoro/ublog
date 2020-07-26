import React from "react"
import Form from "./Form"
import LogIn from "./LogIn"
import PaneHeader from "./PaneHeader"

class Right extends React.Component {
    render() {
        const {logInOrOut, rightPane, users} = this.props
        
        let child = <></>
        switch (rightPane) {
            case "LogIn":
                child = <LogIn users={users}/>
                break
            case "Form":
                child = <Form />
                break
            default:
        }
        return (
            <>
                <PaneHeader buttonAction={logInOrOut} buttonText="Sign up / Log In"/>
                <div className="section">
                    {child}
                </div>
            </>
        )
    }
}

export default Right
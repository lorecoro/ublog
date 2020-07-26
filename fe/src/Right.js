import React from "react"
import Form from "./Form"
import LogIn from "./LogIn"
import PaneHeader from "./PaneHeader"

class Right extends React.Component {
    render() {
        const {loggedIn, loggedInUser, logInOrOut, rightPane, showLogInForm, users} = this.props
        const buttonAction = loggedIn ? logInOrOut : showLogInForm
        const buttonText = loggedIn ? "Log out" : "Sign up / Log In"
        let child = <></>
        switch (rightPane) {
            case "LogIn":
                child = <LogIn users={users} logInOrOut={logInOrOut}/>
                break
            case "Form":
                child = <Form user={loggedInUser}/>
                break
            default:
        }
        return (
            <>
                <PaneHeader buttonAction={buttonAction} buttonText={buttonText}/>
                <div className="section">
                    {child}
                </div>
            </>
        )
    }
}

export default Right
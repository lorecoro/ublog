import React, {Component} from "react"

class LogIn extends Component {
    constructor() {
        super()
        this.state = {
            user: "",
            password: "",
            buttonLabel: "Log In",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        // Check if the user name exists, and change the button accordingly
        const exists = this.props.users.filter((user) => {
            return user.name === value
        })
        const buttonLabel = exists[0] ? "Log in" : "Sign up"
        this.setState({
            buttonLabel: buttonLabel
        })
    }

    handleClick(event) {
        event.preventDefault();

        // Send the post request to the backend
        const url = "/api/user";
        const post = {
            user: this.state.user,
            password: this.state.password
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let status = ""
        fetch(url, options)
        .then(res => {
            status = res.status
            return res.json()
        })
        .then(res => {
            switch (status) {
                case 200:
                    // logged in successfully
                    this.setState({
                        message: "Welcome back " + res.name,
                        messageColor: "lightblue"
                    })
                    this.props.logInOrOut(res.name)
                    break
                case 201:
                    // new user
                    this.setState({
                        message: "Welcome " + res.name,
                        messageColor: "green"
                    })
                    this.props.logInOrOut(res.name)
                    break
                case 401:
                    // authentication failed
                    this.setState({
                        message: "Authentication failed",
                        messageColor: "red"
                    })
                    break
                default:
                    this.setState({
                        message: "The server responded with code " + res.status,
                        messageColor: "yellow"
                    })
            }
        })
    }

    render() {
        const messageStyle = `message ${this.state.messageColor}`
        return (
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            required
                            id="user"
                            name="user"
                            type="text"
                            value={this.state.user}
                            onChange={this.handleChange}
                            placeholder="Your Name"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input
                            required
                            id="password"
                            name="password"
                            type="text"
                            value={this.state.password}
                            onChange={this.handleChange}
                            placeholder="Your Password"
                        />
                    </div>
                </div>

                <button className="btn waves-effect waves-light" type="submit" onClick={this.handleClick}>{this.state.buttonLabel}
                    <i className="material-icons right">lock_open</i>
                </button>

                <p className={messageStyle}>{this.state.message}</p>
            </form>
        )
    }
}

export default LogIn

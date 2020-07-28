import React from 'react'
import logo from './logo.svg'
import './App.css'
import Left from "./Left"
import Right from "./Right"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            leftPane: "Users",
            loggedIn: false,
            loggedInUser: "",
            posts: [],
            rightPane: "",
            selectedUser: "",
            users: [],
        }
        this.logIn = this.logIn.bind(this)
        this.logOut = this.logOut.bind(this)
        this.showAllUsers = this.showAllUsers.bind(this)
        this.showLogInForm = this.showLogInForm.bind(this)
        this.showOneUser = this.showOneUser.bind(this)
        this.showAllPosts = this.showAllPosts.bind(this)
    }

    componentDidMount() {
        setInterval(()=> {
            // fetch all the users
            fetch('/api/users')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    users: res
                })
            })
            // fetch the latest 20 posts
            fetch('/api/posts')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res
                })
            })
        }, 2000)
    }

    logIn(user) {
        this.setState({
            loggedIn: true,
            loggedInUser: user,
            rightPane: "Form"
        })
    }
    
    logOut() {
        this.setState({
            loggedIn: false,
            rightPane: "LogIn"
        })
    }

    showAllUsers(event) {
        event.preventDefault()
        this.setState({
            leftPane: "Users"
        })
    }

    showAllPosts(event) {
        event.preventDefault()
        this.setState({
            leftPane: "Posts",
            selectedUser: ""
        })
    }

    showLogInForm(event) {
        event.preventDefault()
        this.setState({
            rightPane: "LogIn"
        })
    }

    showOneUser(event) {
        const userName = event.target.dataset.user
        event.preventDefault()
        this.setState({
            leftPane: "Posts",
            selectedUser: userName
        })
    }

    render() {
        const logInOrOut = this.state.loggedIn ? this.logOut : this.logIn
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p><strong>Microblogging App</strong></p>
                </header>
                <div className="row">
                    <div className="col s12 l6">
                        <Left 
                            leftPane={this.state.leftPane}
                            posts={this.state.posts}
                            selectedUser={this.state.selectedUser}
                            showAllPosts={this.showAllPosts}
                            showAllUsers={this.showAllUsers}
                            showOneUser={this.showOneUser}
                            users={this.state.users}
                        />
                    </div>
                    <div className="col s12 l6">
                        <Right 
                            loggedIn={this.state.loggedIn}
                            loggedInUser={this.state.loggedInUser}
                            logInOrOut={logInOrOut}
                            rightPane={this.state.rightPane}
                            showLogInForm={this.showLogInForm}
                            users={this.state.users}
                        />
                    </div>
                </div>
                <div className="row credits">Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            </div>
        )
    }
}

export default App

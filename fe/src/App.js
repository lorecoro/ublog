import React from 'react'
import logo from './logo.svg'
import './App.css'
import Left from "./Left"
import Right from "./Right"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            users: [],
            posts: [],
            leftPane: "Users",
            selectedUser: "",
            loggedIn: false,
            rightPane: ""
        }
        this.logInOrOut = this.logInOrOut.bind(this)
        this.showAllUsers = this.showAllUsers.bind(this)
        this.showOneUser = this.showOneUser.bind(this)
        this.showAllPosts = this.showAllPosts.bind(this)
    }

    componentDidMount() {
        setInterval(()=> {
            // fetch all the users
            fetch('http://localhost:3002/api/users')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    users: res
                })
            })
            // fetch the latest 20 posts
            fetch('http://localhost:3002/api/posts')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res
                })
            })
        }, 2000)
    }

    logInOrOut(event) {
        event.preventDefault()
        this.setState({
            rightPane: "LogIn"
        })
    }

    showAllPosts(event) {
        event.preventDefault()
        this.setState({
            leftPane: "Posts",
            selectedUser: ""
        })
    }
    
    showAllUsers(event) {
        event.preventDefault()
        this.setState({
            leftPane: "Users"
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
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Microblogging App
                    </p>
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
                            logInOrOut={this.logInOrOut}
                            rightPane={this.state.rightPane}
                            users={this.state.users}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App

import React, {Component} from "react"

class Form extends Component {
    constructor() {
        super()
        this.state = {
            user: "",
            post: "",
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleClick(event) {
        event.preventDefault();

        // Send the post request to the backend
        const url = "http://localhost:3002/api/post";
        const post = {
            user: this.state.user,
            post: this.state.post
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        fetch(url, options)
        .then(res => res.json())
        .then(res => console.log(res));

        // Reset the message, leaving the user name
        this.setState({
            post: ''
        })
    }

    render() {
        return (
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="user"
                            name="user"
                            type="text"
                            value={this.state.user}
                            onChange={this.handleChange}
                            placeholder="Your Name"
                        />
                        <label htmlFor="user">Your Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="post"
                            name="post"
                            type="text"
                            value={this.state.post}
                            onChange={this.handleChange}
                            placeholder="Your Message"
                        />
                        <label htmlFor="post">Your Message</label>
                    </div>
                </div>

                <button className="btn waves-effect waves-light" type="submit" onClick={this.handleClick}>Submit
                    <i className="material-icons right">send</i>
                </button>
            </form>
        )
    }
}

export default Form

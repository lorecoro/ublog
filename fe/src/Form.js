import React, {Component} from "react"
import M from "materialize-css"

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

    componentDidMount() {
        this.setState({
            user: this.props.user
        })
        // Initialize the character counter for the #post text input
        const field = document.querySelector('#post')
        M.CharacterCounter.init(field, {})
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

        // Reset the message, leaving the user name
        this.setState({
            post: ''
        })
    }

    render() {
        return (
            <form className="col s12">
                <div className="row">
                <p><strong>{this.state.user}'s post:</strong></p>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                        <input
                            required
                            id="post"
                            name="post"
                            type="text"
                            value={this.state.post}
                            onChange={this.handleChange}
                            placeholder="Your Message"
                            data-length="100"
                        />
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

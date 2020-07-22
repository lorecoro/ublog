import React from "react";
import LeftRow from "./LeftRow";

class Left extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3002/api/posts')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res
                })
            });
    }

    render() {
        const nOfPosts = this.state.posts ? this.state.posts.length : 0;
        if (nOfPosts === 0) {
            return(<></>);
        }
        else {
            let leftRows = [];
            for (let i = 0; i < nOfPosts; i++) {
                const { _id, user, post, date } = this.state.posts[i];
                leftRows.push(<LeftRow key={_id} user={user} post={post} date={date} />);
            }
            return (
                <>
                    { leftRows }
                </>
            )
        }
    }
}

export default Left
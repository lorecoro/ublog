import React from "react"
import LeftRow from "./LeftRow"

class LeftPosts extends React.Component {
    render() {
        const selectedUser = this.props.selectedUser
        let posts = this.props.posts
        let leftRows = []
        if (posts.length > 0) {
            if (selectedUser !== "") {
                const userPosts = posts.filter((post) => post.user === selectedUser)
                posts = userPosts
            }
            for (let i = 0; i < posts.length; i++) {
                const { _id, user, post, date } = posts[i]
                leftRows.push(<LeftRow key={_id} user={user} post={post} date={date} userAction={this.props.userAction} />)
            }
        }
        return (
            <>
                { leftRows }
            </>
        )
    }
}

export default LeftPosts
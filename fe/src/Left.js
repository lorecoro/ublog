import React from "react"
import PaneHeader from "./PaneHeader"
import LeftPosts from "./LeftPosts"
import LeftUsers from "./LeftUsers"

class Left extends React.Component {
    render() {
        const {leftPane, posts, selectedUser, showAllPosts, showAllUsers, showOneUser, users} = this.props
        if (leftPane === "Users") {
            return (
                <>
                    <PaneHeader buttonAction={showAllPosts} buttonText="Show all posts"/>
                    <LeftUsers users={users} userAction={showOneUser} />
                </>
            )
        }
        else {
            return (
                <>
                    <PaneHeader buttonAction={showAllUsers} buttonText="Show all users"/>
                    <LeftPosts posts={posts} selectedUser={selectedUser} userAction={showOneUser} />
                </>
            )
        }
        
    }
}

export default Left
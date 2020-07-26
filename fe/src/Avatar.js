import React from "react"

function Avatar(props) {
    const avatar = "https://avatars.dicebear.com/api/human/" + props.name + ".svg"
    return (
        <div className="col s3">
            <img src={avatar} height="80px" alt="avatar" onClick={props.userAction} data-user={props.name}/>
        </div>
    )
}

export default Avatar
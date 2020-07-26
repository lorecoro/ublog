import React from "react";
import Avatar from "./Avatar"

class LeftRow extends React.Component {
    render() {
        const current_datetime = new Date();
        const post_datetime = new Date(this.props.date);
        const difference_ms = current_datetime - post_datetime;
        let elapsed = "";
        switch (true) {
            case (difference_ms < 60 * 1000):
                elapsed = "moments ago"; break;
            case (difference_ms < 60 * 60 * 1000):
                elapsed = Math.floor(difference_ms / 60000) + " minutes ago"; break;
            case (difference_ms < 24 * 60 * 60 * 1000):
                elapsed = Math.floor(difference_ms / 3600000) + " hours ago"; break;
            default:
                elapsed = post_datetime.getDate() + "/" + (post_datetime.getMonth() + 1) + "/" + post_datetime.getFullYear();
        }

        return (
            <>
                <div className="row">
                    <Avatar name={this.props.user} userAction={this.props.userAction} />

                    <div className="col s9">
                        <div className="row">
                            <div className="col s6">
                                <p className="user">{this.props.user}</p>
                            </div>
                            <div className="col s6">
                                <p className="date">{elapsed}</p>
                            </div>
                        </div>
                        <p className="post">{this.props.post}</p>
                    </div>
                </div>
                <div className="divider"></div>
            </>
        )
    }
}

export default LeftRow
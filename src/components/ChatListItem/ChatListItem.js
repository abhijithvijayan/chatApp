import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Comment } from 'semantic-ui-react';

class ChatListItem extends Component {
    renderMessageItem = (key, value) => {
        const messageDate = new Date(value.when);
        const messageDateTime = `${messageDate.toLocaleDateString()} at ${messageDate.toLocaleTimeString()}`;

        return (
            <React.Fragment key={key}>
                <Comment>
                    <Comment.Avatar
                        src={value.who.photoURL || 'https://react.semantic-ui.com/images/avatar/small/elliot.jpg'}
                    />
                    <Comment.Content>
                        <Comment.Author as="a">{value.who.displayName}</Comment.Author>
                        <Comment.Metadata>
                            <div>{messageDateTime}</div>
                        </Comment.Metadata>
                        <Comment.Text>{value.what}</Comment.Text>
                    </Comment.Content>
                </Comment>
            </React.Fragment>
        );
    };

    renderMessages = () => {
        if (!this.props.messages) {
            return null;
        }
        return Object.entries(this.props.messages).map(([key, value]) => {
            return this.renderMessageItem(key, value);
        });
    };

    render() {
        return <React.Fragment>{this.renderMessages()}</React.Fragment>;
    }
}

const mapStateToProps = state => {
    return {
        messages: state.chat.messages,
    };
};

export default connect(mapStateToProps)(ChatListItem);

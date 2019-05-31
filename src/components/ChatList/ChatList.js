import React, { Component } from 'react';
import { Comment, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import ChatListItem from '../ChatListItem';
import { fetchMessages } from '../../containers/ChatSection/actions';

class ChatList extends Component {
    componentWillMount() {
        this.props.fetchMessages();
    }

    render() {
        return (
            <React.Fragment>
                <Comment.Group relaxed="very" size="huge">
                    <Header as="h3" dividing>
                        Chat History
                    </Header>
                    <ChatListItem />
                </Comment.Group>
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    {
        fetchMessages,
    }
)(ChatList);

import React from 'react';
import { Comment, Header } from 'semantic-ui-react';
import ChatListItem from '../ChatListItem';

const ChatList = () => {
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
};

export default ChatList;

import React from 'react';
import { Comment } from 'semantic-ui-react';

const ChatListItem = () => {
    return (
        <React.Fragment>
            <Comment>
                <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
                <Comment.Content>
                    <Comment.Author as="a">Matt</Comment.Author>
                    <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                    </Comment.Metadata>
                    <Comment.Text>How artistic!</Comment.Text>
                </Comment.Content>
            </Comment>
        </React.Fragment>
    );
};

export default ChatListItem;

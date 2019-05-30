import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const ChatHeader = () => {
    return (
        <div>
            <Header as="h2" icon textAlign="center" style={{ paddingBottom: '1.4em' }}>
                <Icon name="users" circular />
                <Header.Content>Chat Room | Friends</Header.Content>
            </Header>
        </div>
    );
};

export default ChatHeader;

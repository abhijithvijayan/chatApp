import React from 'react';
import { Container } from 'semantic-ui-react';
import ChatList from '../../components/ChatList';
import ChatHeader from '../../components/ChatHeader';
import MessageSendForm from '../../components/MessageSendForm';

import './styles.scss';

const ChatSection = () => {
    return (
        <Container>
            <section id="chat__section">
                <ChatHeader />
                <ChatList />
                <MessageSendForm />
            </section>
        </Container>
    );
};

export default ChatSection;

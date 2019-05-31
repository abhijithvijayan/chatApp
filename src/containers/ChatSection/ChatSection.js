import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ChatList from '../../components/ChatList';
import ChatHeader from '../../components/ChatHeader';
import MessageSendForm from '../../components/MessageSendForm';

import './styles.scss';

class ChatSection extends Component {
    render() {
        return (
            <Container>
                <section id="chat__section">
                    <ChatHeader />
                    <ChatList />
                    <MessageSendForm />
                </section>
            </Container>
        );
    }
}

export default ChatSection;

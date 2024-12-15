import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

export default function Chat() {
    return (
        <GiftedChat
        // messages={[
        //     {
        //         _id: 1,
        //         text: 'Hello, how are you?',
        //         createdAt: new Date(),
        //         user: {
        //             _id: 2,
        //             name: 'User',
        //             avatar: 'https://placeimg.com/140/140/any',
        //         },
        //     },
        // ]}
        // onSend={messages => console.log(messages)}
        // user={{
        //     _id: 1,
        //     name: 'User',
        //     avatar: 'https://placeimg.com/140/140/any',
        // }}
        />
    )
}


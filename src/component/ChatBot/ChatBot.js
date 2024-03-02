import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from "@chatscope/chat-ui-kit-react";
import "./ChatBot.css"
import chatMessage from "../Asset/Image/smilechat.avif"


const API_KEY = process.env.REACT_APP_API_KEY;

console.log(process.env.REACT_APP_API_KEY)

const ChatBot = () => {
    const [typing, setTyping] = useState(false);
    const [messages, setMessage] = useState([
        {
            message: "Hello, I am AI Doctor!",
            sender: "AI Doctor"
        }
    ]);




    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing"
        }

        const newMessages = [...messages, newMessage]; // all the old messages, + the new message

        // update our messages state
        setMessage(newMessages);

        //set a chatting indicator
        setTyping(true);

        //process message to chatGPT (send it over and see the respnse)
        await processMessageToChatGPT(newMessages);

    }


    async function processMessageToChatGPT(chatMessages) {
        //chatMessages {sender: "user" or "ChatGPT", message: "The message content here"}
        //apiMessages {role: "user" or "assistant", content: "The message content here"}


        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "AI Doctor") {
                role = "assistant"
            } else {
                role = "user"
            }
            return { role: role, content: messageObject.message }
        });


        // role: "user" -> a message from the user, "assistant" -> a response from chatGPT
        // "system" -> generally one initial message defining HOW we want chatgpt to talk

        const systemMessage = {
            role: "system",
            content: "Explain Like a Medical Consultant with 20 years experience "//Explain like a venture capitalist with 10 years experience and multiple portfolio"//Explain all concept like I am 10 years old." // Speak like a pirate, Explain like I am a 10 years old experience Software Engineer or Speak like I'm a Travel agent or Like I am a Medical consultant and give details
        }

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages // [message1, ]
            ]
        }

        await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + API_KEY
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            //console.log(data.choices[0].message.content);

            setMessage(
                [...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: "AI Doctor"
                }]
            );
            setTyping(false);
        })

    }


    return (
        <div className="chat-block">
            <div className="chat-right">
                <img src={chatMessage} alt=""></img>
                <p>Our AI Doctor is here to help you diagnose your health and give you a personalized advice on your health and well being</p>
            </div>
            <div className="chat-left">
                <MainContainer>
                    <ChatContainer>
                        <MessageList
                            scrollBehavior="smooth"
                            typingIndicator={typing ? <TypingIndicator content="AI Doctor is typing" /> : null}
                        >
                            {messages.map((message, i) => {
                                return <Message key={i} model={message} />
                            })}
                        </MessageList>
                        <MessageInput placeholder="Type message here" onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    )
}

export default ChatBot;
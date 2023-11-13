/* eslint-disable react-hooks/exhaustive-deps */ // Disable exhaustive-deps rule for React Hooks

"use client"; // Importing "use client" (it seems like a custom import, not standard JavaScript/React)

import { addIsTypingToUserColl } from "@/actions"; // Importing action for adding isTyping to user collection
import { db } from "@/lib/firebase.config"; // Importing Firebase configuration
import { MessageType } from "@/type"; // Importing MessageType type
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"; // Importing Firestore functions
import { useSession } from "next-auth/react"; // Importing useSession hook from next-auth
import React, { useEffect, useRef, useState } from "react"; // Importing React and its hooks/components
import PasswordModal from "./PasswordModal"; // Importing PasswordModal component
import Form from "./form/Form"; // Importing Form component
import MessageFromMe from "./messages/MessageFromMe"; // Importing MessageFromMe component
import MessageFromOther from "./messages/MessageFromOther"; // Importing MessageFromOther component
import Navbar from "./navbar/Navbar"; // Importing Navbar component

function ChatPage() {
  const session = useSession(); // Using the useSession hook to get authentication status
  const [messages, setMessages] = useState<MessageType[] | []>([]); // State for storing messages
  const [currentEmail, setCurrentEmail] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    // Effect to update currentEmail when session is authenticated
    if (session.status === "authenticated") {
      const userEmail = session?.data?.user?.email;
      if (userEmail) {
        console.log(userEmail);
        setCurrentEmail(userEmail);
      }
    }
  }, [session, session.status]);

  //! Get all messages
  useEffect(() => {
    // Effect to fetch and update messages from Firestore
    const collectionRef = collection(db, "messages");
    const q = query(collectionRef, orderBy("servertimestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshots) => {
      setMessages(
        snapshots.docs.map((doc) => ({ ...(doc.data() as any), docID: doc.id }))
      );
    });
    return unsubscribe; // Cleanup function to unsubscribe from Firestore snapshots
  }, []);

  // //! Get all users
  useEffect(() => {
    // Effect to fetch and update users from Firestore
    const collectionRef = collection(db, "users");
    const q = query(collectionRef);

    const unsubscribe = onSnapshot(q, (snapshots) => {
      snapshots.docs.forEach((doc) => {
        const data = doc.data();
        const email = data.email;

        setMessages((prevMessages) => {
          const index = prevMessages.findIndex(
            (message) => message.isTyping === true && message.email == email
          );

          if (data.isTyping) {
            if (index === -1) {
              return [...prevMessages, data as any];
            }
          } else {
            // If isTyping is false and the email exists in setMessages, remove it
            if (index !== -1) {
              const updatedMessages = [...prevMessages];
              updatedMessages.splice(index, 1);
              return updatedMessages;
            }
          }

          // If no changes needed, return the current state
          return prevMessages;
        });
      });
    });

    return () => {
      unsubscribe(); // Cleanup function to unsubscribe from Firestore snapshots
    };
  }, []);

  //! Function to add isTyping false when a user is logged in
  useEffect(() => {
    addIsTypingToUserColl(false, session.data?.user?.email);
  }, [session]);

  //! Open Modal if password is not set to localstorage
  useEffect(() => {
    if (localStorage.getItem("isPasswordSet") !== "true") {
      // @ts-ignore
      document.getElementById("my_modal_1")?.showModal();
    }
  }, []);

  if (localStorage.getItem("isPasswordSet") !== "true") {
    return <PasswordModal />; // Return PasswordModal component if password is not set
  }

  //! Show loading if user is not loaded
  if (session.status === "loading") {
    return (
      <>
        <div className="h-[100dvh] grid place-items-center">
          <span className="loading loading-spinner w-[4rem] opacity-70 text-white" />
        </div>
      </>
    );
  }

  const ScrollToBottom = () => {
    // Component to scroll to the bottom of the chat
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const element = elementRef.current;
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }, []);

    return <div ref={elementRef} />;
  };

  return (
    <>
      <div className="container mx-auto max-w-4xl max-h-[100dvh] h-[100dvh] p-2 px-0 pr-2 flex flex-col">
        <Navbar />
        <div className="flex-grow overflow-y-auto overflow-x-hidden p-2 no-scrollbar scroll-smooth">
          <div className="h-full w-full" />
          {messages.map((message, index) => (
            <React.Fragment key={index}>
              {message.email === session.data?.user?.email ? (
                <>
                  {!message.isTyping && (
                    <>
                      <MessageFromMe
                        text={message.text}
                        isTyping={false}
                        timestamp={message.timestamp}
                      />
                    </>
                  )}
                </>
              ) : (
                <MessageFromOther
                  text={message.text}
                  isTyping={message.isTyping}
                  name={message.name}
                  email={message.email}
                  image={message.image}
                  timestamp={message.timestamp}
                />
              )}
            </React.Fragment>
          ))}
          <ScrollToBottom />
        </div>
        <Form />
      </div>
    </>
  );
}

export default ChatPage;

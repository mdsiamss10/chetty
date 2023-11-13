/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { addIsTypingToUserColl } from "@/actions";
import { db } from "@/lib/firebase.config";
import { MessageType } from "@/type";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import PasswordModal from "./PasswordModal";
import Form from "./form/Form";
import MessageFromMe from "./messages/MessageFromMe";
import MessageFromOther from "./messages/MessageFromOther";
import Navbar from "./navbar/Navbar";

function ChatPage() {
  const session = useSession();
  const [messages, setMessages] = useState<MessageType[] | []>([]);

  //! Get all messages
  useEffect(() => {
    const collectionRef = collection(db, "messages");
    const q = query(collectionRef, orderBy("servertimestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshots) => {
      setMessages(
        snapshots.docs.map((doc) => ({ ...(doc.data() as any), docID: doc.id }))
      );
    });
    return unsubscribe;
  }, []);

  // //! Get all users
  // useEffect(() => {
  //   const collectionRef = collection(db, "users");
  //   const q = query(collectionRef);
  //   const unsubscribe = onSnapshot(q, (snapshots) => {
  //     snapshots.docs.forEach((doc) => {
  //       const data = doc.data();
  //       if (data.isTyping) {
  //         setMessages((prev) => [...prev, data as any]);
  //       }
  //     });
  //   });
  //   return unsubscribe;
  // }, []);

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
    return <PasswordModal />;
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
          {messages.map((message) => (
            <>
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
            </>
          ))}
          <ScrollToBottom />
        </div>
        <Form />
      </div>
    </>
  );
}

export default ChatPage;

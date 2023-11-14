"use client";

import { MessageType } from "@/type";
import { useEffect, useRef } from "react";

function ScrollToBottomCond({ messages }: { messages: MessageType[] }) {
  //! Scroll to bottom always
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
  // Check if any object in the messages state has the isTyping property
  const isTypingPresent = messages.some((message) => message.isTyping);

  return (
    <div>
      {/* Other components or UI elements */}

      {/* Conditionally render the ScrollToBottom component */}
      {!isTypingPresent && <ScrollToBottom />}
    </div>
  );
}

export default ScrollToBottomCond;

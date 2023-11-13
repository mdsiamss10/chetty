import { MessageType } from "@/type"; // Importing MessageType type
import moment from "moment"; // Importing the moment library for date/time formatting

function MessageFromMe({ text, timestamp }: MessageType) {
  return (
    <>
      <div className="chat chat-end z-[-1]">
        <div className="chat-bubble bg-primary text-white text-sm flex items-center mb-1 break-all">
          {text}
        </div>
        <div className="chat-footer opacity-50 text-[.675rem]">
          {moment(timestamp).fromNow()}{" "}
          {/* Displaying the timestamp in a human-readable format using moment */}
        </div>
      </div>
    </>
  );
}

export default MessageFromMe;

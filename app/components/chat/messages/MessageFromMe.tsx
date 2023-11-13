import { MessageType } from "@/type"; // Importing MessageType type
import moment from "moment"; // Importing the moment library for date/time formatting

function MessageFromMe({ text, timestamp, isSeen }: MessageType) {
  return (
    <>
      <div className="chat chat-end z-[-1] my-2">
        <div className="chat-header opacity-50 text-[.675rem]">
          {isSeen ? "Seen" : "Delivered"}
        </div>
        <div className="chat-bubble bg-primary text-white text-sm flex items-center mb-1 break-all">
          {text}
        </div>
        <div className="chat-footer opacity-50 text-[.675rem]">
          {moment(timestamp)
            .fromNow()
            .replace(/(minute[s]?)/, "min")
            .replace(/(hour[s]?)/, "hr")
            .replace(/(day[s]?)/, "day")}{" "}
          {/* Displaying the timestamp in a human-readable format using moment */}
        </div>
      </div>
    </>
  );
}

export default MessageFromMe;

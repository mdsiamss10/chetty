import { MessageType } from "@/type";
import moment from "moment";

function MessageFromMe({ text, timestamp }: MessageType) {
  return (
    <>
      <div className="chat chat-end">
        <div className="chat-bubble bg-primary text-white text-sm flex items-center mb-1">
          {text}
        </div>
        <div className="chat-footer opacity-50 text-[.675rem]">
          {moment(timestamp).fromNow()}
        </div>
      </div>
    </>
  );
}

export default MessageFromMe;

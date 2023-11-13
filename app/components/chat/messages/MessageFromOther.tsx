import { MessageType } from "@/type";
import moment from "moment";
import Image from "next/image";

function MessageFromOther({
  name,
  email,
  image,
  text,
  isTyping,
  timestamp,
}: MessageType) {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <Image
            src={image as string}
            width={35}
            height={35}
            quality={100}
            alt="Image"
            className="rounded-full"
            title={email}
          />
        </div>
        <div className="chat-bubble glass text-sm flex items-center my-1">
          {isTyping ? (
            <>
              <span className="loading loading-dots loading-md"></span>
            </>
          ) : (
            <>{text}</>
          )}
        </div>
        <div className="chat-footer opacity-50 text-[.675rem]">
          <span>{name?.split(" ")[0]}</span>
          <span> - </span>
          <span>{moment(timestamp).fromNow()}</span>
        </div>
      </div>
    </>
  );
}

export default MessageFromOther;

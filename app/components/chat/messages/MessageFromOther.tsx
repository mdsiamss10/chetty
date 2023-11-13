import { MessageType } from "@/type"; // Importing MessageType type
import moment from "moment"; // Importing the moment library for date/time formatting
import Image from "next/image"; // Importing Image component from next/image

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
      <div className="chat chat-start z-[-1]">
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
              <span className="loading loading-dots loading-md"></span>{" "}
              {/* Displaying loading dots if the other user is typing */}
            </>
          ) : (
            // Displaying the message text if the other user is not typing
            <>{text}</>
          )}
        </div>
        <div className="chat-footer opacity-50 text-[.675rem]">
          <span>{name?.split(" ")[0]}</span>{" "}
          {/* Displaying the first name of the user */}
          <span> - </span>
          <span>{moment(timestamp).fromNow()}</span>{" "}
          {/* Displaying the timestamp in a human-readable format using moment */}
        </div>
      </div>
    </>
  );
}

export default MessageFromOther;

import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";
import ChatFooter from "./ChatFooter";
import { useSelector } from "react-redux";

const ChatMessenger = () => {
    const { conversation } = useSelector(
        (state) => state.conversations
    );
    return (
        <main className="main is-visible" data-dropzone-area="">
            <div className="container h-100">
                <div className="d-flex flex-column h-100 position-relative">
                    {/* Chat: Header  */}
                    <ChatHeader conversation={conversation} />
                    {/* Chat: Header  */}

                    {/* Chat: Content> */}
                    <ChatContent conversation={conversation}/>
                    {/* Chat: Content> */}

                    {/* Chat: Footer  */}
                    <ChatFooter conversation={conversation}/>
                    {/* Chat: Footer  */}
                </div>
            </div>
        </main>
    );
};

export default ChatMessenger;

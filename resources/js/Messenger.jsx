import { useDispatch, useSelector } from "react-redux";

import Echo from "laravel-echo";
import Pusher from "pusher-js";
window.Pusher = Pusher;

import Navigation from "./components/Layout/Navigation/Navigation";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import ChatMessenger from "./components/Messages/Messenger";
import { getMessage } from "./redux/slices/messageSlice";

const Messenger = () => {
    const { user } = useSelector((state) => state.auth);
    console.log("🚀 ~ file: Messenger.jsx ~ line 15 ~ Messenger ~ user", user);
    // dispatch
    const dispatch = useDispatch();

    const echo = new Echo({
        broadcaster: "pusher",
        key: import.meta.env.VITE_PUSHER_APP_KEY,
        wsHost:
            import.meta.env.VITE_PUSHER_HOST ??
            `ws-${import.meta.env.VITE_PUSHER_APP_CLUSTER}.pusher.com`,
        wsPort: import.meta.env.VITE_PUSHER_PORT ?? 80,
        wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
        forceTLS: (import.meta.env.VITE_PUSHER_SCHEME ?? "https") === "https",
        enabledTransports: ["ws", "wss"],
    });
    echo.join(`Messenger.${user?.id}`).listen(".new-message", (data) => {
        console.log(
            "🚀 ~ file: ChatContent.jsx ~ line 37 ~ echo.join ~ data.message",
            data.message
        );
        dispatch(getMessage(data.message));
    });

    return (
        <div className="layout overflow-hidden">
            <Navigation />
            <Sidebar />
            <ChatMessenger />
        </div>
    );
};

export default Messenger;

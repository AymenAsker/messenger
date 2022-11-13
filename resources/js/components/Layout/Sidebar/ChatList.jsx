import moment from "moment/moment";
import React, { useEffect,useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedUser } from "../../../redux/actions/authAction";
import { getAllConversation } from "../../../redux/actions/conversationsAction";
import { getAllMessage } from "../../../redux/actions/messageAction";
import { getConversation } from "../../../redux/slices/conversationSlice";

const ChatList = () => {
    // state
    const { conversations, loading, error } = useSelector(
        (state) => state.conversations
    );
    console.log(
        "🚀 ~ file: ChatList.jsx ~ line 11 ~ ChatList ~ conversations",
        conversations
    );

    // dispatch
    const dispatch = useDispatch();

    // function
    const pushConversation = useCallback( async (conversation) => {
        dispatch(getConversation(conversation));
         await dispatch(getAllMessage(conversation.id));
    }, [dispatch]);

    // useEffect
    useEffect(() => {
        const run = async () => {
            await dispatch(getAllConversation());
        };
        run();
    }, [dispatch]);

      // useEffect
      useEffect(() => {
        const run = async () => {
            await dispatch(getLoggedUser());
        };
        run();
    }, [dispatch]);

    return (
        <div
            className="tab-pane fade h-100 show active"
            id="tab-content-chats"
            role="tabpanel"
        >
            <div className="d-flex flex-column h-100 position-relative">
                <div className="hide-scrollbar">
                    <div className="container py-8">
                        {/* Title */}
                        <div className="mb-8">
                            <h2 className="fw-bold m-0">Chats</h2>
                        </div>
                        {/* Search */}
                        <div className="mb-6">
                            <form action="#">
                                <div className="input-group">
                                    <div className="input-group-text">
                                        <div className="icon icon-lg">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-search"
                                            >
                                                <circle cx={11} cy={11} r={8} />
                                                <line
                                                    x1={21}
                                                    y1={21}
                                                    x2="16.65"
                                                    y2="16.65"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control form-control-lg ps-0"
                                        placeholder="Search messages or users"
                                        aria-label="Search for messages or users..."
                                    />
                                </div>
                            </form>
                        </div>
                        {/* Chats */}
                        <div className="card-list">
                            {/* Card */}
                            {loading ? (
                                <a
                                    href="chat-direct.html"
                                    className="card border-0 text-reset"
                                >
                                    <div className="card-body">
                                        <div className="row gx-5">
                                            <div className="col-auto">
                                                <div className="avatar">
                                                    <svg
                                                        className="avatar-img placeholder-img"
                                                        width="100%"
                                                        height="100%"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        role="img"
                                                        aria-label="Placeholder"
                                                        preserveAspectRatio="xMidYMid slice"
                                                        focusable="false"
                                                    >
                                                        <title>
                                                            Placeholder
                                                        </title>
                                                        <rect
                                                            width="100%"
                                                            height="100%"
                                                            fill="#868e96"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="d-flex align-items-center mb-3">
                                                    <h5 className="placeholder-glow  w-100  mb-0">
                                                        <span className="placeholder col-5" />
                                                    </h5>
                                                </div>
                                                <div className="placeholder-glow">
                                                    <span className="placeholder col-12" />
                                                    <span className="placeholder col-8" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            ) : conversations.data ? (
                                conversations.data.map((conversation) => {
                                    return (
                                        <a
                                        onClick={() => pushConversation(conversation)}
                                            href={`#${conversation.id}`}
                                            key={conversation.id}
                                            className="card border-0 text-reset"
                                        >
                                            <div className="card-body">
                                                <div className="row gx-5">
                                                    <div className="col-auto">
                                                        <div className="avatar avatar-online">
                                                            <img className="avatar-img"
                                                                src={
                                                                    conversation
                                                                        .participants[0]
                                                                        .avatar_url
                                                                }
                                                                alt="asd"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="d-flex align-items-center mb-3">
                                                            <h5 className="me-auto mb-0">
                                                                {
                                                                    conversation
                                                                        .participants[0]
                                                                        .name
                                                                }
                                                            </h5>
                                                            <span className="text-muted extra-small ms-2">
                                                                {moment(
                                                                    conversation
                                                                        .last_message
                                                                        .created_at
                                                                ).fromNow()}
                                                            </span>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <div className="line-clamp me-auto">
                                                                {
                                                                    conversation
                                                                        .last_message
                                                                        .body
                                                                }
                                                            </div>
                                                            <div className="badge badge-circle bg-primary ms-5">
                                                                <span>3</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    );
                                })
                            ) : null}
                        </div>
                        {/* Chats */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatList;

import React from "react";

const ChatHeader = ({ conversation }) => {
    return (
        <div className="chat-header border-bottom py-4 py-lg-7">
            <div className="row align-items-center">
                {/* Mobile: close */}
                <div className="col-2 d-xl-none">
                    <a
                        className="icon icon-lg text-muted"
                        href="#"
                        data-toggle-chat
                    >
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
                            className="feather feather-chevron-left"
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </a>
                </div>
                {/* Mobile: close */}
                {/* Content */}
                <div className="col-8 col-xl-12">
                    <div className="row align-items-center text-center text-xl-start">
                        {/* Title */}
                        <div className="col-12 col-xl-6">
                            <div className="row align-items-center gx-5">
                                <div className="col-auto">
                                    <div className={`avatar d-none d-xl-inline-block ${ conversation.participants[0].isOnline && "avatar-online" }`}>
                                        <img
                                            className="avatar-img"
                                            src={ conversation && 
                                                conversation.participants[0]
                                                    .avatar_url
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="col overflow-hidden">
                                    <h5 className="text-truncate">
                                        {conversation &&
                                            conversation.participants[0].name}
                                    </h5>
                                    <p className="text-truncate">
                                        35 members, 3 online
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Title */}
                        {/* Toolbar */}
                        <div className="col-xl-6 d-none d-xl-block">
                            <div className="row align-items-center justify-content-end gx-6">
                                <div className="col-auto">
                                    <a
                                        href="#"
                                        className="icon icon-lg text-muted"
                                        data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvas-more-group"
                                        aria-controls="offcanvas-more-group"
                                    >
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
                                            className="feather feather-more-horizontal"
                                        >
                                            <circle cx={12} cy={12} r={1} />
                                            <circle cx={19} cy={12} r={1} />
                                            <circle cx={5} cy={12} r={1} />
                                        </svg>
                                    </a>
                                </div>
                                <div className="col-auto">
                                    <div className="avatar-group">
                                        <a
                                            href="#"
                                            className="avatar avatar-sm"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modal-user-profile"
                                        >
                                            <img
                                                className="avatar-img"
                                                src="assets/img/avatars/1.jpg"
                                                alt="#"
                                            />
                                        </a>
                                        <a
                                            href="#"
                                            className="avatar avatar-sm"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modal-user-profile"
                                        >
                                            <img
                                                className="avatar-img"
                                                src="assets/img/avatars/11.jpg"
                                                alt="#"
                                            />
                                        </a>
                                        <a
                                            href="#"
                                            className="avatar avatar-sm"
                                            data-bs-toggle="modal"
                                            data-bs-target="#modal-user-profile"
                                        >
                                            <img
                                                className="avatar-img"
                                                src="assets/img/avatars/7.jpg"
                                                alt="#"
                                            />
                                        </a>
                                        <a
                                            href="#"
                                            className="avatar avatar-sm"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvas-add-members"
                                            aria-controls="offcanvas-add-members"
                                        >
                                            <span
                                                className="avatar-text"
                                                data-bs-toggle="tooltip"
                                                data-bs-placement="bottom"
                                                title="<strong>Add People</strong><p>Invite friends to group</p>"
                                            >
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
                                                    className="feather feather-plus"
                                                >
                                                    <line
                                                        x1={12}
                                                        y1={5}
                                                        x2={12}
                                                        y2={19}
                                                    />
                                                    <line
                                                        x1={5}
                                                        y1={12}
                                                        x2={19}
                                                        y2={12}
                                                    />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Toolbar */}
                    </div>
                </div>
                {/* Content */}
                {/* Mobile: more */}
                <div className="col-2 d-xl-none text-end">
                    <div className="dropdown">
                        <a
                            className="text-muted"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
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
                                    className="feather feather-more-vertical"
                                >
                                    <circle cx={12} cy={12} r={1} />
                                    <circle cx={12} cy={5} r={1} />
                                    <circle cx={12} cy={19} r={1} />
                                </svg>
                            </div>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvas-add-members"
                                    aria-controls="offcanvas-add-members"
                                >
                                    Add members
                                </a>
                            </li>
                            <li>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvas-more-group"
                                    aria-controls="offcanvas-more-group"
                                >
                                    More
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Mobile: more */}
            </div>
        </div>
    );
};

export default ChatHeader;

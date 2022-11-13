import moment from 'moment';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMessage } from '../../redux/slices/messageSlice';




const ChatContent = () => {

  // state
  const { messages, loading, error } = useSelector((state) => state.messages);
  const { user } = useSelector((state) => state.auth);

    return (
    <div className="chat-body hide-scrollbar flex-1 h-100">
      <div className="chat-body-inner">
        <div className="py-6 py-lg-12">

        { messages.messages?.data ? (messages.messages?.data.map((message) => {
         return (
               <div key={message.id} className={`message  ${ message.user_id === user.id && "message-out"}`}>
                  <a href="#" data-bs-toggle="modal" data-bs-target="#modal-profile" className="avatar avatar-responsive">
                    <img className="avatar-img" src={ message.user.avatar_url }  />
                  </a>
                  <div className="message-inner">
                    <div className="message-body">
                      <div className="message-content">
                        <div className="message-text">
                          <p>{ message.body }</p>
                        </div>
                        {/* Dropdown */}
                        <div className="message-action">
                          <div className="dropdown">
                            <a className="icon text-muted" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical">
                                <circle cx={12} cy={12} r={1} />
                                <circle cx={12} cy={5} r={1} />
                                <circle cx={12} cy={19} r={1} />
                              </svg>
                            </a>
                            <ul className="dropdown-menu">
                              <li>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                  <span className="me-auto">Edit</span>
                                  <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3">
                                      <path d="M12 20h9" />
                                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item d-flex align-items-center" href="#">
                                  <span className="me-auto">Reply</span>
                                  <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left">
                                      <polyline points="9 14 4 9 9 4" />
                                      <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                              <li>
                                <hr className="dropdown-divider" />
                              </li>
                              <li>
                                <a className="dropdown-item d-flex align-items-center text-danger" href="#">
                                  <span className="me-auto">Delete</span>
                                  <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2">
                                      <polyline points="3 6 5 6 21 6" />
                                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                      <line x1={10} y1={11} x2={10} y2={17} />
                                      <line x1={14} y1={11} x2={14} y2={17} />
                                    </svg>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="message-footer">
                      <span className="extra-small text-muted"> { moment(message.created_at).fromNow() }</span>
                    </div>
                  </div>
                </div>
                      );
                  })
              ) : null} 
          {/* Divider */}
          <div className="message-divider">
            <small className="text-muted">Monday, Sep 16</small>
          </div>


          {/* Message */}
          <div className="message">
            <a href="#" data-bs-toggle="modal" data-bs-target="#modal-user-profile" className="avatar avatar-online avatar-responsive">
              <img className="avatar-img" src="assets/img/avatars/7.jpg"  />
            </a>
            <div className="message-inner">
              <div className="message-body">
                <div className="message-content">
                  <div className="message-text">
                    <p>William is typing<span className="typing-dots"><span>.</span><span>.</span><span>.</span></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatContent
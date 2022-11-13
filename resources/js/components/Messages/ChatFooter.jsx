import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createMessage } from '../../redux/actions/messageAction';

const ChatFooter = ({conversation}) => {
console.log("🚀 ~ file: ChatFooter.jsx ~ line 6 ~ ChatFooter ~ conversation", conversation)

  // state
  const [message, setMessage] = useState('');

  console.log("🚀 ~ file: ChatFooter.jsx ~ line 6 ~ ChatFooter ~ message", message);

  // dispatch
  const dispatch = useDispatch();

  const sendMassage = useCallback(async (e) => {
    e.preventDefault();
    console.log("🚀 ~ file: ChatFooter.jsx ~ line 17 ~ sendMassage ~ conversation", conversation)
      await dispatch(createMessage({conversation_id: conversation.id,message}))
      .unwrap()
      .then((originalPromiseResult) => {
        setMessage('');
      })
      .catch((rejectedValueOrSerializedError) => {
      });
    },[dispatch,conversation,message]);
  
  return (
          <div className="chat-footer pb-3 pb-lg-7 position-absolute bottom-0 start-0">
            {/* Chat: Files */}
            <div className="dz-preview bg-dark" id="dz-preview-row" data-horizontal-scroll>
            </div>
            {/* Chat: Files */}
            {/* Chat: Form */}
            <form className="chat-form rounded-pill bg-dark" data-emoji-form>
              <div className="row align-items-center gx-0">
                <div className="col-auto">
                  <a href="#" className="btn btn-icon btn-link text-body rounded-circle" id="dz-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-paperclip">
                      <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                  </a>
                </div>
                <div className="col">
                  <div className="input-group">
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="form-control px-0" placeholder="Type your message..." rows={1} data-emoji-input data-autosize="true"  />
                    <a href="#" className="input-group-text text-body pe-0" data-emoji-btn>
                      <span className="icon icon-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile"><circle cx={12} cy={12} r={10} /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1={9} y1={9} x2="9.01" y2={9} /><line x1={15} y1={9} x2="15.01" y2={9} /></svg>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <button onClick={sendMassage} className="btn btn-icon btn-primary rounded-circle ms-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-send">
                      <line x1={22} y1={2} x2={11} y2={13} />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            {/* Chat: Form */}
          </div>
        )
      }

export default ChatFooter
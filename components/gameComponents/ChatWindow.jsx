

'use client'

import { useEffect, useState } from 'react';
import './ChatWindow.scss';



export function ChatWindow(props) {
  const { num = 50, cols, className } = props;
  let elements = [];

  for (let i = 0; i < num; i++) {
    elements.push(<li>text {i}</li>);
  }

  return (
    <div className={`chat-window flex flex-col gap-2 h-full col-span-${cols} min-h-0`}>
      <div className='chat-window__header'>name</div>

      <div className='message-area flex flex-col flex-auto h-full overflow-y-hidden'>
        <div className='message-container flex-auto overflow-y-scroll'>
          <BunchOfElements />
          <BunchOfElements />
        </div>
      </div>
      {/* NOTE!!! using the message area wrapper outside the container stops the input from being squished */}

      <ChatInput />
    </div>
  )
}


function ChatInput() {
  const [value, setValue] = useState('');
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    if (/^[!\/]/.test(value)) {
      setShowPrompt(true);
    }
    else {
      setShowPrompt(false);
    }
  }, [value])

  function PromptPopup() {
    return (
      <div className={`prompt-popup ${showPrompt ? '' : 'hidden'} p-2 min-w-1/2 rounded-lg drop-shadow-md `}>
        <div className='prompt__option'>/hello-world</div>
        <div className={`prompt__option --selected`}>/foo-bar</div>
        <div className='prompt__option'>@dave</div>
        <div className='prompt__option'>/roll 2d6</div>
      </div>
    )
  }

  return (
    <div className='relative'>
      <PromptPopup />

      <input
        type="text"
        value={value}
        placeholder="Type here"
        className="input input-bordered input-primary w-full"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}






const createExampleChatComponents = (num) => {
  let elements = [];

  for (let i = 0; i < num; i++) {

  }

  return elements;
}

export const BunchOfElements = () => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-secondary">What kind of nonsense is this</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-accent">Put me on the Council and not make me a Master!??</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-info">That's never been done in the history of the Jedi. It's insulting!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-success">Calm down, Anakin.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-warning">You have been given a great honor.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-error">To be on the Council at your age.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble cb-neutral-focus">It's never happened before.</div>
      </div>
    </>
  )
}
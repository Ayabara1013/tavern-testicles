



export function ChatWindow(props) {
  // const { item } = props;

  return (
    <div className={`p-2 gap-2 w-full h-full bg-neutral rounded-xl`}>
      <div className='box flex-1 rounded-xl overflow-y-scroll'>  
        <BunchOfElements />
        <BunchOfElements />
        {/* <BunchOfElements /> */}
        {/* <BunchOfElements /> */}
      </div>

      <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
    </div>
  )
}





const createExampleChatComponents = (num) => {
  let elements = [];

  for (let i = 0; i < num; i++) {

  }

  return elements;
}

export const exampleElement = () => {
  return (
    div
  )
}

export const BunchOfElements = () => {
  return (
    <>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-primary">What kind of nonsense is this</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-secondary">Put me on the Council and not make me a Master!??</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-bubble chat-bubble-accent">That's never been done in the history of the Jedi. It's insulting!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-info">Calm down, Anakin.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-success">You have been given a great honor.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-warning">To be on the Council at your age.</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble chat-bubble-error">It's never happened before.</div>
      </div>
    </>
  )
}
import { Breadcrumbs } from '@/components/daisyui/breadcrumbs'
import { BunchOfElements } from '@/components/game/ChatWindow'
import { RollWindow } from '@/components/game/RollWindow'

export default function Home() {
  return (
    <>
      <Game />
    </>
  )
}



const HomeScreen = () => {
  return (
    <div className='border border-dotted'>
      <p className='text-5xl font-semibold text-center m-4'>home</p>
      <Breadcrumbs />


    </div>
  )
}

const Game = (props) => {
  const { num = 50 } = props;
  let elements = [];

  for (let i = 0; i < num; i++) {
    elements.push(<li>text {i}</li>);
  }

  const chatColumns = 2;
  const rollColumns = Math.floor(chatColumns / 2) || 1;
  const numChatColumns = 2;
  const totalColumns = chatColumns * numChatColumns + rollColumns;

  return (
    <div className='game-page'>
      <div className={`chat-row grid grid-cols-${totalColumns} p-4 gap-4 gridcols`}>

        <RollsWindow cols={1} className={``} />
        {
          [...Array(numChatColumns)].map((_, i) => (
            <ChatWindow cols={chatColumns} key={i} className={``} />
          ))
        }
        
      </div>
        
      <div className='tool-container h-1/4'>
        <div className='bg-neutral h-full'>toolbox</div>
      </div>
    </div>
  )
}

// OH FUCK WOULD FLEX HAVE BEEN BETTER??! WITH FLEX, I CAN MAKE THE COLUMNS SUPER TINY FOR A GROW-IN-GROW-OUT EFFECT!!!! FUCK MEEE!!!!!

const Discover = () => {
  return (
    <div className='border border-dotted'>
      <p className='text-5xl font-semibold text-center m-4'>discover</p>
      <Breadcrumbs />
    </div>
  )
}

{/* <div className="chat-col` w-full `p-2">
  <div className='chat-window flex flex-col h-full w-100'>
    <div className='message-area flex flex-col flex-auto h-full overflow-y-hidden'>
      <div className='message-container flex-auto overflow-y-scroll'>{elements}</div>
    </div>
    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
  </div>
</div> */}

{/* <div className='col-span-1 h-full border border-accent p-2'></div>
<div className='col-span-2 h-full border border-accent p-2'></div>
<div className='col-span-2 h-full border border-accent p-2'></div> */}

{/* <div className='flex-grow-[1] h-full border border-accent p-2'></div>
<div className='flex-grow-[2] h-full border border-accent p-2'></div>
<div className='flex-grow-[2] h-full border border-accent p-2'></div> */}

const GameInfo = () => {
  return (
    <div className='border border-dotted'>
      <p className='text-5xl font-semibold text-center m-4'>game info</p>
      <Breadcrumbs />
    </div>
  )
}

const GameCreate = () => {
  return (
    <div className='border border-dotted'>
      <p className='text-5xl font-semibold text-center m-4'>game create</p>
      <Breadcrumbs />
    </div>
  )
}

function ChatWindow(props) {
  const { num = 50, cols, className } = props;
  let elements = [];

  for (let i = 0; i < num; i++) {
    elements.push(<li>text {i}</li>);
  }

  return (
    <div className={`chat-window flex flex-col gap-2 h-full col-span-${cols} min-h-0`}>
      <div className='message-area flex flex-col flex-auto h-full overflow-y-hidden'>
        <div className='message-container flex-auto overflow-y-scroll'>
          <BunchOfElements />
          <BunchOfElements />
        </div>
      </div>
      {/* NOTE!!! using the message area wrapper outside the container stops the input from being squished */}

      <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
    </div>
  )
}



/**
 * 
 * @param {*} props num (chat elements), cols to span, className
 * @returns 
 */
function RollsWindow(props) {
  const { num = 50, cols, className } = props;
  let elements = [];

  const RollElement = (num) => {
    return (
      <div key={num}
        className='bg-primary m-2 p-2 min-w-fit w-16 text-center text-primary-content font-bold rounded-xl '>
        {Math.floor(Math.random() * 6) + 1}
      </div>
    )
  }

  for (let i = 0; i < num; i++) {
    elements.push(<RollElement num={i} />);
  }

  return (
    <div className={`chat-window flex flex-col gap-2 h-full col-span-${cols} min-h-0`}>
      <div className='message-area flex flex-col flex-auto h-full overflow-y-hidden'>
        <div className='message-container flex-auto overflow-y-scroll'>
          {elements}
        </div>
      </div>
      {/* NOTE!!! using the message area wrapper outside the container stops the input from being squished */}

      <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
    </div>
  )
}
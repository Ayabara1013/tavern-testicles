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

  return (
    <div className='game-page'>
      <div className='chat-row p-4 gap-2'>
        {/* <div className="chat-col` w-full `p-2">
          <div className='chat-window flex flex-col h-full w-100'>
            <div className='message-area flex flex-col flex-auto h-full overflow-y-hidden'>
              <div className='message-container flex-auto overflow-y-scroll'>{elements}</div>
            </div>
            <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
          </div>
        </div> */}

        <ChatWindow />
        <ChatWindow />
        <ChatWindow />

        
      </div>
        
      <div className='tool-container h-1/4'>
        <div className='bg-neutral h-full'>toolbox</div>
      </div>
    </div>
  )
}

const Discover = () => {
  return (
    <div className='border border-dotted'>
      <p className='text-5xl font-semibold text-center m-4'>discover</p>
      <Breadcrumbs />
    </div>
  )
}

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
  const { num = 50 } = props;
  let elements = [];

  for (let i = 0; i < num; i++) {
    elements.push(<li>text {i}</li>);
  }

  return (
    <div className='chat-window flex flex-col h-full  w-full '>
      <div className='message-area flex flex-col flex-auto h-full overflow-y-hidden'>
        <div className='message-container flex-auto overflow-y-scroll'>{elements}</div>
      </div>

      <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
    </div>
  )
}

// const Chatbox = (props) => {
//   return (
//     <div className='border-2 border-secondary p-2 '>
//       {props.children}
//     </div>
//   )
// }

// const Messagebox = (props) => {
//   const { num = 50 } = props;

//   let elements = [];

//   for (let i = 0; i < num; i++) {
//     elements.push(<div>text {i}</div>);
//   }

//   return (
//     <div className='border-2 border-primary mb-2 p-2 h-full align-self-auto'>
//       {elements}
//     </div>
//   )
// }

// const Inputbox = (props) => {
//   return (
//     <div className='border-2 border-primary p-2'>
//       {props.children}
//     </div>
//   )
// }
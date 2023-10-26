import { Breadcrumbs } from '@/components/daisyui/breadcrumbs'
import { BunchOfElements, ChatWindow } from '@/components/game/ChatWindow'
import { RollWindow } from '@/components/game/RollWindow'

export default function Home() {
  return (
    <div className='h-full'>
      {/* <HomeScreen />
      <Discover /> */}
      <Game />
      {/* <GameInfo />
      <GameCreate /> */}
    </div>
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
    <div className='game-page block h-full'>
      <div className='window-container flex h-3/4'>
        <div className="window-wrapper block flex-1 h-full p-2">
          <div className='chat-window h-full'></div>
        </div>

        <div className="window-wrapper block flex-1 h-full p-2">
          <div className='chat-window h-full'></div>
        </div>

        <div className="window-wrapper block flex-1 h-full p-2">
          <div className='chat-window h-full'></div>
        </div>

        <div className="window-wrapper block flex-1 h-full p-2">
          <div className='chat-window h-full'></div>
        </div>
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




const Chatbox = (props) => {
  return (
    <div className='border-2 border-secondary p-2 '>
      {props.children}
    </div>
  )
}

const Messagebox = (props) => {
  const { num = 50 } = props;

  let elements = [];

  for (let i = 0; i < num; i++) {
    elements.push(<div>text {i}</div>);
  }

  return (
    <div className='border-2 border-primary mb-2 p-2 h-full align-self-auto'>
      {elements}
    </div>
  )
}

const Inputbox = (props) => {
  return (
    <div className='border-2 border-primary p-2'>
      {props.children}
    </div>
  )
}
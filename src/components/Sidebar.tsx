
import Logo from '../assets/Logo.png'
import chat from '../assets/Chats.png'
import chat1 from '../assets/Chats (1).png'
import home from '../assets/Home.png'
import divider from '../assets/Divider.png'
const Sidebar = () => {
    return (
        <div className="fixed inset-y-0 left-0 w-16 bg-emerald-800 h-[100dvh] ">
        <div className="flex flex-col items-center py-4 space-y-4">
          <div className="p-2">
            <img src={Logo} alt="" className="w-10 h-10" />
          </div>
          <img src={divider} alt="" />
          <button className="p-2 text-white hover:bg-emerald-700 rounded-lg">
          <img src={home} alt="" className="w-10 h-10" />
          </button>
          <button className="p-2 text-white hover:bg-emerald-700 rounded-lg">
           <img src={chat} alt="" className="w-10 h-10" />
          </button>
          <button className="p-2 text-white hover:bg-emerald-700 rounded-lg">
            <img src={chat1} alt="" className="w-10 h-10"/>
          </button>
        </div>
      </div>
    )
}

export default Sidebar
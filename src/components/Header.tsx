import chart from '../assets/ChartPieSlice.png'
import tag from '../assets/Tag.png'
import chat from '../assets/ChatTeardropText.png'
import Main from './Main'
const Header = () => {
    return (
        <div>
        <div className='w-full border border-[#DCDFE4]'>
        <div className=" max-w-7xl mx-auto py-4 flex flex-row gap-8">
            <a className="hover:bg-[#CCFBEF] p-2 rounded-2xl flex flex-row gap-4 text-[#8A94A6] hover:text-black items-center justify-center" >
                <img src={chart} alt=""  className='h-6 w-6'/>
                Summary</a>
            <a className="hover:bg-[#CCFBEF] p-2 rounded-2xl flex flex-row gap-4 text-[#8A94A6] hover:text-black">
            <img src={tag} alt=""  className='h-6 w-6'/>
                Sales</a>
            <a className="hover:bg-[#CCFBEF] p-2 rounded-2xl flex flex-row gap-4 text-[#8A94A6] hover:text-black">
            <img src={chat} alt=""  className='h-6 w-6'/>
                Chats</a>
        </div>
        </div>
        <div className='p-8'>
        <Main/>
        </div>

        </div>

    )
}

export default Header
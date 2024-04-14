import Vite from '../assets/vite.svg'

export default function Header() {
    return (
        <div className='mt-10 bg-orange-400 w-full py-5'>
            <img className='mx-auto mb-5 w-20' src={Vite} alt='Vite logo'></img>
            <h1 className='text-5xl text-center text-[#f8f8f8] font-medium'>Groceries List</h1>
        </div>
    )
}
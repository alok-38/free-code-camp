import About from './sub/About';

const MainContent = () => {
    return (
        <div className='bg-[#1A1B21]'>
            <h2 className='text-[#FFFFFF]'>Laura Smith</h2>
            <p className='text-[#F3BF99]'>Frontend Developer</p>
            <p className='text-[#F5F5F5]'><a href="www.laurasmith.com">laurasmith.website</a></p>
            <div className='flex justify-center gap-5'>
                <button className='bg-[#FFFFFF] text-[#374151] w-[115px] text-[14px]'>
                    <i className="fas fa-envelope mr-2"></i>Email
                </button>
                <button className='bg-[#5093E2] text-[#FFFFFF] w-[115px] text-[14px]'>
                    <i className="fab fa-linkedin mr-2"></i>LinkedIn
                </button>
            </div>
            <About />
        </div>
    )
}

export default MainContent;

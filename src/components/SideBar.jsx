import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../assets/logo.svg';
import Homelogo from '../assets/homelogo.svg';
import Patient from '../assets/patient.svg';
import History from '../assets/history.svg';
import Calendarlogo from '../assets/calendar.svg';
import Edit from '../assets/edit.svg';
import Logout from '../assets/logout.svg';
import { useState } from 'react';
import MiniNav from './MiniNav';
const SideBar = () => {
    const [hover, setHover]= useState(false);

    return ( 
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={'bg-indigo-800 shadow text-white transition duration-3000 w-32 hover:w-64 hover:duration-3000 hover:transition flex flex-col items-center justify-between '}>
                <div className='flex items-center'>
                    <img src={Logo} alt="Logo" className='w-14 h-14 rounded-xl mt-12'/>
                    <h2 className={`text-2xl font-bold mt-12 ml-5 ${hover ? 'block ' : 'hidden'}`}>DocTech</h2>
                </div>
                <div className='flex-wrap flex items-center '>
                <ul className='flex flex-col items-center'>
                        <li className='mb-7 '>
                            <Link to="/home" className='flex py-2 px-4 items-center'>
                                <img src={Homelogo} alt="Homelogo" className='h-8 w-8 '/> 
                                <p className={`ml-5 text-xl font-bold ${hover ? 'block ' : 'hidden'}`}>Home</p>                               
                            </Link>
                        </li>
                        <li className='mb-7'>
                            <Link to="/patients" className='flex py-2 px-4 items-center'>
                                <img src={Patient} alt="Patient" className='h-8 w-8'/> 
                                <p className={`ml-5 text-xl font-bold ${hover ? 'block ' : 'hidden'}`}>Patients</p>                               
                            </Link>
                        </li>
                        <li className='mb-7'>
                            <Link to="/calendar" className='flex py-2 px-4 items-center'>
                                <img src={Calendarlogo} alt="Calendar" className='h-8 w-8'/> 
                                <p className={`ml-5 text-xl font-bold ${hover ? 'block ' : 'hidden'}`}>Calendar</p> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/History" className='flex py-2 px-4 items-center'>
                                <img src={History} alt="History" className='h-8 w-8' />
                                <p className={`ml-5 text-xl font-bold ${hover ? 'block ' : 'hidden'}`}>History</p> 
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='mb-16'>
                    <ul>
                        <li className='mb-7'><img src={Edit} alt="Edit" className='h-8 w-8'/></li>
                        <li><img src={Logout} alt="Logout" className='h-8 w-8'/></li>
                    </ul>
                </div>
            </div>
     );
}
 
export default SideBar;

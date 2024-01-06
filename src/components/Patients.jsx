import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Logo from '../assets/logo.svg';
import Homelogo from '../assets/homelogo.svg';
import Patient from '../assets/patient.svg';
import History from '../assets/history.svg';
import Calendar from '../assets/calendar.svg';
import Edit from '../assets/edit.svg';
import Logout from '../assets/logout.svg';
import Bell from '../assets/bell.svg';
import Avatar from '../assets/avatar.svg';
import ArrowDown from '../assets/arrowdown.svg';
import Rectangle from '../assets/Rectangle.svg';
import Search from '../assets/search.svg';
import Filter from '../assets/filter.svg';
import Add from '../assets/add.svg';
import Threepoints from '../assets/threepoints.svg';
import { useState } from 'react';
import AddPatientPopup from './AddPatientPopup';

const Patients = () => {
    const [hover, setHover]= useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };
    return (
        <div className='flex h-screen'>
            <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className={'bg-indigo-800 shadow text-white transition duration-3000 w-32 hover:w-64 hover:duration-3000 hover:transition flex flex-col items-center justify-between'}>
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
                                <img src={Calendar} alt="Calendar" className='h-8 w-8'/> 
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
            <div className='flex-1'>
                <div className='flex justify-between'>
                    <h1 className='text-indigo-800 text-4xl font-bold ml-12 mt-14'>Patients</h1>
                    <div className='flex gap-5 mr-6 mt-10'>
                        <img className='mr-6' src={Bell} alt="Bell" />
                        <img src={Avatar} alt="avatar" />
                        <p>Dr. Name</p>
                        <img src={ArrowDown} alt="arrowdown" />
                    </div>
                </div>
                    <div className="w-[75rem] h-[40rem] bg-neutral-100 rounded-2xl border-2 border-zinc-100 ml-28 mt-8">
                        <div className='flex justify-between'>
                            <h2 className='text-indigo-800 text-4xl font-semibold ml-16 mt-11'>List</h2>
                            <div className='relative w-[32rem] h-8 mt-11'>
                                <img className='absolute' src={Rectangle} alt="Rectangle" />
                                <img className='ml-1 mt-1 absolute' src={Search} alt="Search" />
                            </div>
                            <div className='flex gap-8 mr-14'>
                                <img className='mt-11' id='Add' src={Add} alt="Add" onClick={togglePopup}/>  
                                <img className='mt-11' src={Filter} alt="Filter" />
                            </div>
                        </div>
                        <AddPatientPopup show={showPopup} handleClose={togglePopup} className='w-2/3 h-[32rem] bg-white rounded-2xl shadow'/>
                        <div className="w-[64rem] h-28 gap-40 flex mt-20 justify-center mb-9 ml-14">
                            <div className='font-semibold'>Name</div>
                            <div className='font-semibold'>Age</div>
                            <div className='font-semibold'>Last Appointment</div>
                            <div className='font-semibold'>Next Appointment</div>
                        </div>
                        <div className='flex justify-around items-center mt-4'>
                            <div className='flex gap-4'>
                                <img src={Avatar} alt="Avatar" />
                                <p>Nassim Hadjebbar</p>
                            </div>
                            <p>19</p>
                            <p>01 June 2004</p>
                            <p>01 June 2004</p>
                            <img className='-ml-4' src={Threepoints} alt="Threepoints" />
                        </div>
                        <div className='flex justify-around items-center mt-4'>
                            <div className='flex gap-4'>
                                <img src={Avatar} alt="Avatar" />
                                <p>Nassim Hadjebbar</p>
                            </div>
                            <p>19</p>
                            <p>01 June 2004</p>
                            <p>01 June 2004</p>
                            <img className='-ml-4' src={Threepoints} alt="Threepoints" />
                        </div>    <div className='flex justify-around items-center mt-4'>
                            <div className='flex gap-4'>
                                <img src={Avatar} alt="Avatar" />
                                <p>Nassim Hadjebbar</p>
                            </div>
                            <p>19</p>
                            <p>01 June 2004</p>
                            <p>01 June 2004</p>
                            <img className='-ml-4' src={Threepoints} alt="Threepoints" />
                        </div>    <div className='flex justify-around items-center mt-4'>
                            <div className='flex gap-4'>
                                <img src={Avatar} alt="Avatar" />
                                <p>Nassim Hadjebbar</p>
                            </div>
                            <p>19</p>
                            <p>01 June 2004</p>
                            <p>01 June 2004</p>
                            <img className='-ml-4' src={Threepoints} alt="Threepoints" />
                        </div>    <div className='flex justify-around items-center mt-4'>
                            <div className='flex gap-4'>
                                <img src={Avatar} alt="Avatar" />
                                <p>Nassim Hadjebbar</p>
                            </div>
                            <p>19</p>
                            <p>01 June 2004</p>
                            <p>01 June 2004</p>
                            <img className='-ml-4' src={Threepoints} alt="Threepoints" />
                        </div>
        
                    </div>    
            </div>
        </div>
    );
};
 
export default Patients;
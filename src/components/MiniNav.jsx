import Bell from '../assets/bell.svg';
import Avatar from '../assets/avatar.svg';
import ArrowDown from '../assets/arrowdown.svg';
const MiniNav = () => {
    return ( 

        <div className='flex-1 bg-gray-200'>
<div className='flex gap-7 justify-end mr-6 mt-6'>
    <img src={Bell} alt="Bell" />
    <div className='flex gap-3'>
        <img src={Avatar} alt="avatar" />
        <p>Dr. Name</p>
        <img src={ArrowDown} alt="arrowdown" />
    </div>
</div>
<div>Welcome to Calendar page!</div>    
</div>

     );
}
 
export default MiniNav;

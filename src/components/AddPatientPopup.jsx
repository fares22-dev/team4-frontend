
const AddPatientPopup = ({ show, handleClose }) => {
  const showHideClassName = show ? 'block' : 'hidden';

  return (
    <div className={`${showHideClassName} fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center`}>
      <div className="bg-white p-8 rounded-lg">
        <div className="flex justify-end">
          <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <h2 className="text-xl font-semibold mb-4">Add Patient</h2>
        <form>
          <div className="flex flex-col mb-4">
            <label htmlFor="firstName" className="mb-1">First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder="Enter first name" className="border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="lastName" className="mb-1">Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Enter last name" className="border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="age" className="mb-1">Age</label>
            <input type="number" id="age" name="age" placeholder="Enter age" className="border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="gender" className="mb-1">Gender</label>
            <select id="gender" name="gender" className="border border-gray-300 rounded-md p-2">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="address" className="mb-1">Address</label>
            <input type="text" id="address" name="address" placeholder="Enter address" className="border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="phoneNumber" className="mb-1">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter phone number" className="border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="mb-1">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter email" className="border border-gray-300 rounded-md p-2" />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="socialNumber" className="mb-1">Social Number</label>
            <input type="text" id="socialNumber" name="socialNumber" placeholder="Enter social number" className="border border-gray-300 rounded-md p-2" />
          </div>
          
          <button onClick={handleClose} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPatientPopup;

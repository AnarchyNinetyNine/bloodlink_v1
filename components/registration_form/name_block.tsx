const NameBlock = ({ name, setName }: { name: { firstName: string; lastName: string }; setName: React.Dispatch<React.SetStateAction<{ firstName: string; lastName: string }>> }) => {
    return (
      <div className="flex space-x-4">
        <div className="w-1/2 space-y-4">
          <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            value={name.firstName}
            onChange={(e) => setName({ ...name, firstName: e.target.value })}
            className="w-full p-2 border-2 rounded-md bg-background outline-none focus-within:border-blue-700 border-gray-500 transition"
          />
        </div>
        <div className="w-1/2 space-y-4">
          <label htmlFor="surname" className="block text-sm font-medium">Last Name</label>
          <input
            id="surname"
            type="text"
            placeholder="Surname"
            value={name.lastName}
            onChange={(e) => setName({ ...name, lastName: e.target.value })}
            className="w-full p-2 border-2 rounded-md bg-background outline-none focus-within:border-blue-700 border-gray-500 transition"
          />
        </div>
      </div>
    );
  };
  
  export default NameBlock;
  
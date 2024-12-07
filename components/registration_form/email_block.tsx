const EmailBlock = (
  { email, setEmail }: { email: string; setEmail: React.Dispatch<React.SetStateAction<string>> }
) => {
  return (
    <div className="space-y-4">
      <label htmlFor="email" className="block text-sm font-medium">Email</label>
      <input
        id="email"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border-2 rounded-md bg-background outline-none focus-within:border-blue-700 border-gray-500 transition"
        required
      />
    </div>
  );
};

export default EmailBlock;

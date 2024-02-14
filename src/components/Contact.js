const Contact = () => {
  return (
    <div className="m-4">
      <h1 className="mb-2 text-2xl">Contact page</h1>
      <input
        className="h-10 border border-gray-400 rounded-lg"
        placeholder="Name"
      />
      <input
        className="h-10 ml-2 border border-gray-400 rounded-lg "
        placeholder="Message"
      />
      <button className="px-2 py-1 ml-6 text-white bg-green-500 rounded ">
        Submit
      </button>
    </div>
  );
};
export default Contact;

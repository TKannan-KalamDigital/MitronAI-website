const Button = ({ name, className }) => {
  return (
    <button
      className={`px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      {name}
    </button>
  );
};

export default Button;

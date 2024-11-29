// components/Input.jsx
function Input({ type, placeholder, value, onChange }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-300 p-3 rounded-md mb-4 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    );
  }
  
  export default Input;
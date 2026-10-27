// components/Input.jsx
function Input({ type, placeholder, value, onChange }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-secondary p-3 rounded-md mb-4 w-full focus:outline-none focus:ring-2 focus:ring-primary"
      />
    );
  }
  
  export default Input;
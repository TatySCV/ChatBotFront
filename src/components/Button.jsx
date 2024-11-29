// components/Button.jsx
function Button({ type = 'button', children, onClick }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition-all"
      >
        {children}
      </button>
    );
  }
  
  export default Button;
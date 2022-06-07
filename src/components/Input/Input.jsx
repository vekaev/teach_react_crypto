import PropTypes from 'prop-types';

const Input = ({
   value,
   onChange,
   type,
   name,
   placeholder,
}) => {
    const handleChange = (e) => {
        const { value: v } = e.target;
        onChange(v, e)
    };

    return (
        <input
            value={value}
            onChange={handleChange}
            type={type}
            name={name}
            id={name}
            placeholder={placeholder}
            className="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
        />
    );
};

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    type: 'text'
};

export default Input;

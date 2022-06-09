import PropTypes from 'prop-types';

const Input = ({
    value,
    onChange = () => {},
    type = 'text',
    id,
    name,
    placeholder,
}) => {
    const handleChange = (e) => {
        const { value: v } = e.target;
        onChange(v, e)
    };

    return (
        <div className="mt-1 relative rounded-md shadow-md">
            <input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className="block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md"
            />
        </div>
    );
};

Input.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

// Input.defaultProps = {
//     type: 'text'
// };

export default Input;

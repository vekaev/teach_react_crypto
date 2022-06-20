import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';

// const INTRO_VALUE == "TICKER: ";

const a = Symbol('a');
const a1 = Symbol('a');


console.log(a  === a1);

const Input = React.memo(({ onChange, className, value, ...props }) => {
    const handleChange = useCallback((e) => {
        const { value: v } = e.target;

        onChange(
            v
            // v.slice(INTRO_VALUE.length)
            , e)
    }, [onChange]);
    const changedValue = useMemo(() =>
        // INTRO_VALUE +
        value, [value]);

    return (
        <div className="mt-1 relative rounded-md shadow-md">
            <input
                {...props}
                value={changedValue}
                onChange={handleChange}
                className={`block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md ${className}`}
            />
        </div>
    );
});

Input.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

Input.defaultProps = {
    type: 'text',
    onChange: () => {},
    className: '',
};

export default Input;

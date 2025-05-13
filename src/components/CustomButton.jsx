import {forwardRef} from "react";
import {Button} from '@mui/material';
import PropTypes from "prop-types";

export const CustomButton =forwardRef(({ color = 'primary', onClick, children, className = '', logo, logoDescription= "", ...rest }, ref) => {

    const colorClass = {
            primary: `${ref?.current?.disabled?'bg-[var(--primary-disabled)]':'bg-[var(--primary)]'} text-[var(--primary-text)]  hover:bg-[var(--primary-darker)] shadow-[0_4px_10px_rgba(20,168,100,0.2)]`,
            secondary: `${ref?.current?.disabled?'bg-[var(--secondary-disabled)]':'bg-[var(--secondary)]'} text-[var(--secondary-text)]  shadow-[0_4px_10px_rgba(0,0,0,0.05)]`
    }

    return (
        <Button
            className={`rounded-full border-1 border-solid border-gray-300   hover:-translate-y-1 transition-transform duration-300 ease-in-out flex justify-center items-center gap-4 text-lg font-bold !p-2 ${colorClass[color]} ${className} `}
            onClick={onClick} {...rest} ref={ref}>
            {logo && <img className="w-[1rem] h-[1rem]" src={logo}
                          alt={`logo for a button to describe what the button do ${logoDescription}`}/>}
            <span>{children}</span>
        </Button>
    );
});

Button.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary']),
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};


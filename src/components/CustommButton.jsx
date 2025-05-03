import React, { forwardRef } from "react";
import { Button } from '@mui/material';
import PropTypes from "prop-types";

export const CustomButton = forwardRef(({ color = 'primary', onClick, children, className = '', logo, logoDescription = "",disabled = false, ...rest }, ref) => {
    const baseClasses = ` hover:-translate-y-1 transition-transform duration-300 ease-in-out flex justify-center items-center gap-4 text-lg font-bold !py-2 !px-6`;
    
    const colorStyles = {
        primary: `
            bg-[#0DC0DE]                    
            text-black                      
            hover:bg-[#0BABB8]               
            shadow-[0_4px_10px_rgba(13,192,222,0.25)] 
            disabled:bg-[#A0E0E8]            
            disabled:text-gray-500           
            disabled:transform-none          
            disabled:shadow-none             
        `,
        secondary: `
            bg-[var(--secondary)]            
            text-[var(--secondary-text)]
            hover:bg-gray-50
            shadow-[0_4px_10px_rgba(0,0,0,0.05)]
            disabled:bg-[var(--secondary-disabled)]
            disabled:text-gray-400
            disabled:transform-none
            disabled:shadow-none
        `
    };

    return (
        <Button
        variant="contained"
            sx={{
                backgroundColor: '', 
                color: 'inherit',             
                boxShadow: 'none',  
                borderRadius: '1rem', 
                '&:hover': {
                    backgroundColor: '', 
                    boxShadow: 'none',
                    borderRadius: '1rem'
                },}}
            className={`${baseClasses} ${colorStyles[color]} ${className}`}
            onClick={onClick}
            {...rest}
            ref={ref}
            disabled={disabled} 
        >
            {logo && <img className="w-[1rem] h-[1rem]" src={logo}
                alt={`logo for a button to describe what the button do ${logoDescription}`} />}
            <span>{children}</span>
        </Button>
    );
});

CustomButton.propTypes = {
    color: PropTypes.oneOf(['primary', 'secondary']),
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    logo: PropTypes.string,
    logoDescription: PropTypes.string,
    disabled: PropTypes.bool
};

CustomButton.displayName = 'CustomButton';
export default CustomButton;


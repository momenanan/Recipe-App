import {forwardRef, useRef, useState} from "react";

export const CheckBox = forwardRef (({label}, ref) => {
    const  [rememberMe, setRememberMe] = useState(false);
    return (
        <div className="flex items-center">
            <label className="inline-flex items-center relative select-none font-semibold text-[var(--primary)] cursor-pointer transition duration-150 ease-in-out gap-2">
                <input
                    ref= {ref}
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                />
                <span className="relative inline-block bg-white border-[var(--gray-300)] mr-[var(--space-2)]  duration-[var(--transition-fast)] group-hover:border-[var(--primary)] group-hover:bg-[var(--primary-lighter)] h-5 w-5 border rounded border-gray-300 transition-colors peer-checked:bg-[var(--primary)] peer-checked:border-[var(--primary)] peer-focus:shadow-[var(--focus-ring)] after:content-[''] after:absolute  after:left-[7px] after:top-[3px] after:w-[5px] after:h-[10px] after:hidden after:border-white after:border-r-2 after:border-b-2 after:rotate-45 peer-checked:after:block text-[var(--primary)]" ></span>
                {label}
            </label>
        </div>
    )
});
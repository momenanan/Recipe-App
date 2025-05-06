export const FormInput = ({ label, placeholder, isRequired = false, icon = null, className='', ...props }) => {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-left font-semibold text-[1rem]">
                {label}
                {isRequired && <span className="text-red-500">*</span>}
            </label>
            <div className="relative">
                <input
                    placeholder={placeholder}
                    className={`px-4 py-2 pr-10 rounded-xl shadow-sm  text-sm placeholder-gray-400 bg-white border border-gray-200 focus:outline-none focus:ring-2  ${className}`}
                    {...props}
                />
                {icon && (
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600">
                        <img src={icon} alt="This is an icon for input fields" />
                    </div>
                )}
            </div>
        </div>
    )
}
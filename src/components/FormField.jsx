import React from 'react'

const FormField = ({ LabelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className='flex-1 w-full flex flex-col'>
        {LabelName && (
            <span className='font-epilogue font-medium text-[14px] leading-[22px] text-[#808191] mb-[10px]'>
                {LabelName}
            </span>
        )}
        {isTextArea ? (
            <textarea 
            required
            value={value}
            onChange={handleChange}
            rows={10}
            placeholder={placeholder}
            className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'
            />
        ) : (
            <input 
            type={inputType}
            required
            value={value}
            onChange={handleChange}
            step="0.1"
            placeholder={placeholder}
            className='py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-[#3a3a43] bg-transparent font-epilogue text-white text-[14px] placeholder:text-[#4b5264] rounded-[10px] sm:min-w-[300px]'
            />
        )}
    </label>
  )
}

export default FormField

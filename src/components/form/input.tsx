import React from "react";
import {
    Input as AreaInput,
    Label,
    TextField,
    TextFieldProps,
} from "react-aria-components";

interface InputFieldProps extends TextFieldProps {
    label: string;
}

const Input: React.FC<InputFieldProps> = (props) => {
    const { label, ...rest } = props;
    return (
        <React.Fragment>
            <TextField
                className={`flex flex-col`}
                {...rest}
            >
                <Label className='mb-[10px] font-medium text-[18px]'>
                    {label}
                </Label>
                <AreaInput
                    className={`focus:outline-0 bg-[#F1F4F9] p-[16px] border-[1px] border-[#D8D8D8] rounded-[8px] text-[#A6A6A6]`}
                />
            </TextField>
        </React.Fragment>
    );
};

export default Input;

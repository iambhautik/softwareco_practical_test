import { Checkbox as AreaCheckBox, CheckboxProps } from "react-aria-components";

const CheckBox: React.FC<CheckboxProps> = ({ children, ...props }) => {
    return (
        <AreaCheckBox
            {...props}
            className={`flex items-center gap-2 data-[selected=true]:border-blue-500`}
        >
            <div className='checkbox border-[1px] rounded-[4px] p-[3px] data-[selected=true]:text-6xl'>
                <svg
                    width='12'
                    height='12'
                    viewBox='0 0 12 9'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M1.62427 4.17574C1.38996 3.94142 1.01006 3.94142 0.775742 4.17574C0.541427 4.41005 0.541427 4.78995 0.775742 5.02427L3.77574 8.02427C4.01006 8.25858 4.38996 8.25858 4.62427 8.02427L11.2243 1.42427C11.4586 1.18995 11.4586 0.810052 11.2243 0.575737C10.99 0.341423 10.6101 0.341423 10.3757 0.575737L4.20001 6.75147L1.62427 4.17574Z'
                        fill='#656565'
                    />
                </svg>
            </div>
            {children}
        </AreaCheckBox>
    );
};

export default CheckBox;

import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export interface ReCaptchaProps {
    siteKey: string;
    onChange: (value: string | null) => void;
    theme?: 'dark' | 'light';
}

const ReCaptcha: React.FC<ReCaptchaProps> = ({siteKey, onChange, theme = 'dark', }) => {

    return (
        <>
            <ReCAPTCHA
                sitekey={siteKey}
                onChange={onChange}
                theme={theme}
            />
        </>
    );
};

export default ReCaptcha;
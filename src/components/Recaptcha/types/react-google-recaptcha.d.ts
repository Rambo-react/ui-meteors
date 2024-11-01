declare module 'react-google-recaptcha' {
    import * as React from 'react';

    interface ReCAPTCHAProps {
        sitekey: string,
        onChange: (value: string | null) => void,
        theme?: string,
    }

    const ReCAPTCHA: React.FC<ReCAPTCHAProps>;

    export default ReCAPTCHA;
}
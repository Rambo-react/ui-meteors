declare module 'react-google-recaptcha' {
    import * as React from 'react';

    interface ReCAPTCHAProps {
        onChange: (value: null | string) => void,
        sitekey: string,
        theme?: string,
    }

    export const ReCAPTCHA: React.FC<ReCAPTCHAProps>;
}
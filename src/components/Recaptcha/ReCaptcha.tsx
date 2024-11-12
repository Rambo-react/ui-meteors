import { ReCAPTCHA } from 'react-google-recaptcha'

type Props = {
  onChange: (value: null | string) => void
  siteKey: string
  theme?: 'dark' | 'light'
}

export const ReCaptcha = ({ onChange, siteKey, theme = 'dark' }: Props) => {
  return <ReCAPTCHA onChange={onChange} sitekey={siteKey} theme={theme} />
}

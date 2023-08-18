import { Text } from '../Text'
import { InputContainer } from './styles'

export interface InputProps
  extends React.ButtonHTMLAttributes<HTMLInputElement> {
  label: string
}

export function Input({ label, ...rest }: InputProps) {
  return (
    <InputContainer>
      <label htmlFor="">
        <Text content={label} color="black" size="xxsmall" weight="regular" />
      </label>
      <input {...rest} />
    </InputContainer>
  )
}

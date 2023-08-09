import { Text } from '../Text'
import { InputContainer } from './styles'

export function Input() {
  return (
    <InputContainer>
      <label htmlFor="">
        <Text content="Data" color="black" size="xxsmall" weight="regular" />
      </label>
      <input type="date" />
    </InputContainer>
  )
}

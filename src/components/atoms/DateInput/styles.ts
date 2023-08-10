import DatePicker from 'react-datepicker'

import styled from 'styled-components'

export const DataPickerContainer = styled('div')`
  .react-datepicker-wrapper {
    width: 100%;
  }
`

export const DataPickerElement = styled(DatePicker)`
  background-color: #f5f5f5;
  padding: 14px 10px;
  border: 0px;
  border-radius: 5px;
  width: 100%;

  input {
    width: 100%;
  }
`

export const CustomDataPickerButton = styled('div')`
  background-color: #f5f5f5;
  padding: 14px 10px;
  border: 0px;
  border-radius: 5px;
  width: 100%;
`

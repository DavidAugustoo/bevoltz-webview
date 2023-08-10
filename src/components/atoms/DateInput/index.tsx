import React, { forwardRef } from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { CustomDataPickerButton, DataPickerContainer } from './styles'

const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
  <CustomDataPickerButton
    className="custom-date-input"
    onClick={onClick}
    ref={ref}
  >
    {value}
  </CustomDataPickerButton>
))

CustomInput.displayName = 'CustomInput'

export function DateInput() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <DataPickerContainer>
      <DatePicker
        customInput={<CustomInput />}
        selected={startDate}
        onChange={(date) => setStartDate(date as Date)}
      />
    </DataPickerContainer>
  )
}

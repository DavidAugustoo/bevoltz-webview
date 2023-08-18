import React, { forwardRef } from 'react'
import { useState } from 'react'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import { Text } from '../Text'
import { CustomDataPickerButton, DataPickerContainer } from './styles'

import { CalendarBlank } from '@phosphor-icons/react'
import { format, parse } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => {
  const formatDateAsString = (dateString: string) => {
    console.log(dateString)

    const date = parse(dateString, 'MM/dd/yyyy', new Date())
    return format(date, "dd 'de' MMMM, yyyy", { locale: ptBR })
  }

  const formattedDate = formatDateAsString(value)

  return (
    <>
      <label htmlFor="">
        <Text content="Data" color="black" size="xxsmall" weight="regular" />
      </label>
      <CustomDataPickerButton
        className="custom-date-input"
        onClick={onClick}
        ref={ref}
      >
        <Text
          content={formattedDate}
          color="gray_100"
          size="xxsmall"
          weight="light"
        />
        <CalendarBlank size={17} color="#515151" />
      </CustomDataPickerButton>
    </>
  )
})

CustomInput.displayName = 'CustomInput'

export function DateInput() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <DataPickerContainer>
      <DatePicker
        customInput={<CustomInput />}
        selected={startDate}
        onChange={(date) => setStartDate(date as Date)}
        popperPlacement="auto"
      />
    </DataPickerContainer>
  )
}

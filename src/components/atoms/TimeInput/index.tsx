import React, { useEffect, useRef } from 'react'

import { TimePickerArea, TimePickerContainer } from './styles'

import flatpickr from 'flatpickr'

import 'flatpickr/dist/flatpickr.min.css'
import { Text } from '../Text'

export function TimePicker() {
  const timeInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (timeInputRef.current) {
      flatpickr(timeInputRef.current, {
        enableTime: true,
        noCalendar: true,
        dateFormat: 'H:i',
        time_24hr: true,
      })
    }
    return () => {
      if (timeInputRef.current) {
        // @ts-ignore: Object is possibly 'null'.
        timeInputRef.current._flatpickr.destroy()
      }
    }
  }, [])

  return (
    <TimePickerArea>
      <label htmlFor="">
        <Text content="Horário" color="black" size="xxsmall" weight="regular" />
      </label>
      <TimePickerContainer
        type="text"
        ref={timeInputRef}
        placeholder="Selecione um horário"
      />
    </TimePickerArea>
  )
}

export default TimePicker

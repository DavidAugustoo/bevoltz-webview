import { useState, forwardRef } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export function DateInput() {
  const [startDate, setStartDate] = useState(new Date())

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date as Date)}
    />
  )
}

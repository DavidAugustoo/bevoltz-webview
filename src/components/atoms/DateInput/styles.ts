import DatePicker from 'react-datepicker'

import styled from 'styled-components'

export const DataPickerContainer = styled('div')`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker {
    width: 67vw;
    transform: scale(1.5);
    transform-origin: top left;
  }

  .react-datepicker__month-container {
    width: 100% !important;
  }

  .react-datepicker-popper {
    position: fixed !important; /* Usamos 'fixed' para posicionar o datepicker em relação à janela do navegador */
    top: 37% !important; /* Centraliza verticalmente */
    left: 33% !important; /* Centraliza horizontalmente */
    transform: translate(
      -50%,
      -50%
    ) !important; /* Ajusta para que o centro do datepicker esteja exatamente no centro da tela */
    z-index: 1050 !important; /* Garante que o datepicker apareça acima de outros elementos; ajuste conforme necessário */
  }

  .react-datepicker-popper[data-placement^='bottom']
    .react-datepicker__triangle,
  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle {
    display: none !important;
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`

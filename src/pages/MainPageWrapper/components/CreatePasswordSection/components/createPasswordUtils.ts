interface IPasswordSettings {
  length: number
  withUpperCase: boolean
  withLowerCase: boolean
  withNumbers: boolean
  withSpecialSymbols: boolean
  minimumNumber: number
  minimumSpecialSymbol: number
}
const mixPassword = (password: string): string => {
  let initialPassword = password
  let configuredResult = ''
  const mixValue = (incomingString: string, createdPassword: string): string => {
    if (!!incomingString.length) {
      const tempValue = incomingString[Math.floor(Math.random() * incomingString.length)]
      createdPassword += tempValue
      initialPassword = initialPassword.replace(tempValue, '')
      return mixValue(initialPassword, createdPassword)
    } else {
      return createdPassword
    }
  }
  return mixValue(password, configuredResult)
}

const configurePassword = (
  minNum: number,
  minSpecial: number,
  len: number,
  numbers: string,
  specialSymbols: string,
  fullInitialState: string
) => {
  let configuredPassword = ''
  if (minNum + minSpecial > len) {
    return 'Неверно заданные ограничения'
  } else {
    for (let i = 0; i < len; i++) {
      if (i < minNum) {
        configuredPassword += numbers.charAt(Math.floor(Math.random() * numbers.length))
      } else {
        if (i < minNum + minSpecial) {
          configuredPassword += specialSymbols.charAt(Math.floor(Math.random() * specialSymbols.length))
        } else {
          configuredPassword += fullInitialState.charAt(Math.floor(Math.random() * fullInitialState.length))
        }
      }
    }
  }
  return configuredPassword
}
const setFullInitialState = (
  withNumber: boolean,
  withSpecialSymbols: boolean,
  withLowerCase: boolean,
  withUpperCase: boolean,
  numbers: string,
  specialSymbols: string,
  lowerCaseLetters: string,
  upperCaseLetters: string
) => {
  let tempState = ''
  if (withNumber) {
    tempState += numbers
  }
  if (withSpecialSymbols) {
    tempState += specialSymbols
  }
  if (withLowerCase) {
    tempState += lowerCaseLetters
  }
  if (withUpperCase) {
    tempState += upperCaseLetters
  }
  return tempState
}

export const createPassword = ({
  length,
  minimumNumber,
  minimumSpecialSymbol,
  withLowerCase,
  withNumbers,
  withSpecialSymbols,
  withUpperCase,
}: IPasswordSettings) => {
  const upperCaseLetters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCaseLetters: string = 'abcdefghijklmnopqrstuvwxyz'
  const specialSymbols: string = '!@#$%^&*()<>,.?/[]{}-=_+|/'
  const numbers: string = '0123456789'

  const fullInitialState = setFullInitialState(
    withNumbers,
    withSpecialSymbols,
    withLowerCase,
    withUpperCase,
    numbers,
    specialSymbols,
    lowerCaseLetters,
    upperCaseLetters
  )

  const password = configurePassword(minimumNumber, minimumSpecialSymbol, length, numbers, specialSymbols, fullInitialState)
  return mixPassword(password)
}

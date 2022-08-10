interface IPasswordSettings {
  length: number
  withUpperCase: boolean
  withLowerCase: boolean
  withNumbers: boolean
  withSpecialSymbols: boolean
  minimumNumber: number
  minimumSpecialSymbol: number
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
  const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const specialSymbols = '!@#$%^&*()<>,.?/[]{}-=_+|/'
  const numbers = '0123456789'
  let tempPull = ''

  const setFullInitialState = (
    withNumber: boolean,
    withSpecialSymbols: boolean,
    withLowerCase: boolean,
    withUpperCase: boolean,
    initial: string
  ) => {
    let tempState = initial
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

  let fullInitialState = setFullInitialState(withNumbers, withSpecialSymbols, withLowerCase, withUpperCase, tempPull)

  const configurePassword = (minNum: number, minSpecial: number, len: number, initialPull: string) => {
    let init = initialPull
    if (minNum + minSpecial > len) {
      return 'Неверно заданные ограничения'
    } else {
      for (let i = 0; i < len; i++) {
        if (i < minNum) {
          init += numbers.charAt(Math.floor(Math.random() * numbers.length))
        } else {
          if (i < minNum + minSpecial) {
            init += specialSymbols.charAt(Math.floor(Math.random() * specialSymbols.length))
          } else {
            init += fullInitialState.charAt(Math.floor(Math.random() * fullInitialState.length))
          }
        }
      }
    }
    return init
  }
  const resultPassword = configurePassword(minimumNumber, minimumSpecialSymbol, length, tempPull)
  return resultPassword
}

import { isNumber } from 'lodash'

declare global {
  interface String {
    isNumber(): boolean
  }
}

const ext = () => {
  String.prototype.isNumber = function () {
    return /^(\s|\d)+$/.test(this.toString())
  }
}

export default ext

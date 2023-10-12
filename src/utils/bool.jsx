export function stringToBoolean(str) {
  str = str.toLowerCase().trim()

  switch (str) {
    case "true":
    case "yes":
    case "1":
      return true
    case "false":
    case "no":
    case "0":
    case null:
      return false
    default:
      throw new Error("Invalid input")
  }
}

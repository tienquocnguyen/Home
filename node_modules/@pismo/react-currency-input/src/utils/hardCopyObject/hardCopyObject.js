const hardCopyObject = (obj = {}) =>
  JSON.parse(JSON.stringify(obj))

export default hardCopyObject


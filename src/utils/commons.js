function setEmptyToNull(obj) {
    if (obj) {
        Object.keys(obj).forEach((key) => {
            if (obj[key] != null) {
                if (Array.isArray(obj[key])) {
                    obj[key].map((o) => {
                        if (typeof o === 'object') {
                            setEmptyToNull(o)
                        }
                    })
                } else if (typeof obj[key] === 'string') {
                    if (obj[key].trim() === '') {
                        obj[key] = null
                    }
                } else if (typeof obj[key] === 'object') {
                    setEmptyToNull(obj[key])
                }
            }
        })
    }
    return obj
}

function cpfIsValid(strCPF) {
    cpfWithoutSpecialCharacters = strCPF.replace(/[.-]/g, '')

    let sum
    let module
    sum = 0
    if (cpfWithoutSpecialCharacters === '00000000000') return false
    if (cpfWithoutSpecialCharacters === '11111111111') return false
    if (cpfWithoutSpecialCharacters === '22222222222') return false
    if (cpfWithoutSpecialCharacters === '33333333333') return false
    if (cpfWithoutSpecialCharacters === '44444444444') return false
    if (cpfWithoutSpecialCharacters === '55555555555') return false
    if (cpfWithoutSpecialCharacters === '66666666666') return false
    if (cpfWithoutSpecialCharacters === '77777777777') return false
    if (cpfWithoutSpecialCharacters === '88888888888') return false
    if (cpfWithoutSpecialCharacters === '99999999999') return false

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpfWithoutSpecialCharacters.substring(i - 1, i)) * (11 - i)
    module = (sum * 10) % 11

    if (module === 10 || module === 11) module = 0
    if (module !== parseInt(cpfWithoutSpecialCharacters.substring(9, 10))) return false

    sum = 0
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpfWithoutSpecialCharacters.substring(i - 1, i)) * (12 - i)
    module = (sum * 10) % 11

    if (module === 10 || module === 11) module = 0
    if (module !== parseInt(cpfWithoutSpecialCharacters.substring(10, 11))) return false

    return true
}

function validateErrorNotNull(error) {
    error.message = ''
    error.errors.forEach((e) => {
        if (error.message == '') {
            error.message = e.message
        } else {
            error.message = error.message + '\nE ' + e.message
        }
    })
}

module.exports = {
    setEmptyToNull,
    cpfIsValid,
    validateErrorNotNull,
}

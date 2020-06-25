const generateRandomString = function(lenght) {
    let randomString = ''
    const possibleChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy0123456789'

    for (var i = 0; i< lenght; i++) {
        randomString += possibleChars.charAt(
            Math.floor(Math.random() * possibleChars.length)
        )
    }

    return randomString;

}

module.exports = generateRandomString
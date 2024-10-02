export function generatePassword(length = 16) {
    const allowedChars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%+-:;?@_';
    let randomString = "";
    for (let i = 0; i < length; i++) {
        randomString += allowedChars.charAt(
            Math.floor(Math.random() * allowedChars.length),
        );
    }
    return randomString;
}
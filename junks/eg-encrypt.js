var crypto = require('crypto-js');

var secretmmessage = {
    name:'John',
    secretNmae:'33erif9'
};
var secretkey = '123abc';


// Encrypt
var emcryptedMessgae = crypto.AES.encrypt(secretmmessage,secretkey);
console.log("Message "+emcryptedMessgae);

// Decrypt
var Byte =  crypto.AES.decrypt(emcryptedMessgae,secretkey);
var decryptedMesaage = Byte.toString(crypto.enc.Utf8);
console.log(decryptedMesaage);
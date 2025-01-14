//Write a JS program to return 6 digit OTP

function otpGenerator(digit){
    let otp = '';
    for(let i=1; i<=digit; i++){
        let temp = Math.floor(Math.random() * 10).toString();
        
        otp = otp + temp;
    }
    return otp;
};

const digit = 6;

console.log(otpGenerator(digit));
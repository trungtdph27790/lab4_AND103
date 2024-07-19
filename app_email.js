//npm i nodemailer
//import thu vien
const express=require('express');
const mailer=require('nodemailer');
const app_email=express();//tao doi tuong express
//tao thong tin nguoi gui
let transporter=mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'trungtdph27790@fpt.edu.vn',
        pass: 'gjlx ncrb vezm mqsh'
    }
});
//noi dung can gui
let mailOption={
    from: 'trungtdph27790@fpt.edu.vn',
    to: 'trung2482003@gmail.com',
    subject: 'tesssssssss gui mail',
    text: 'Day la email gui test'
};
//thuc hien gui
transporter.sendMail(mailOption,(error,info)=>{
    if(error){
        console.error(error);
    }
    else{
        console.log("Thanh cong: ",info.messageId);
    }
});
//lang nghe
app_email.listen(3002,()=>{
    console.log("server dang chay o cong 3002");
});
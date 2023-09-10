var key = "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"
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(key)



async function sendEmail(req,res){
    console.log(req.body)
    const msg = {
        to: req.body.receiver, // Change to your recipient
        from: req.body.sender, // Change to your verified sender
        subject:  req.body.subject,
        text: req.body.message,
      }
      
      sgMail
        .send(msg)
        .then((res_) => {
          console.log(res_)
          console.log('Email sent successfully');

          return res.json({msg:'sent'})
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          return res.json({error})
        });
}
module.exports ={
    sendEmail
}

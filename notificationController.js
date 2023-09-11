const admin = require("firebase-admin");
const { getMessaging , getToken } =require( "firebase/messaging")
const firebsae = require("firebase/app");




exports.pushMessage = async (req, res, next) => {
    const { password, email } = req.body
     try{
        const registrationToken = 'c60n3rLsdecAp1_BNHwIBl:APA91bE30H_gZxfxcna6rRIznyTXQXgEX53HbGv-mlMDdBeLgWVSi38hXNXaVbRMLPE6IK5dN1oA6kItVuQPXE7BXL11xAyhGDLxLTwXmJ0RrZuyToKo6Uo34Fg2gmw8zOmX9gYrDHFi';

        const message = {
            notification: {
                title: "Background Message Title",
                body: "Background message body"
              },
          
          token: registrationToken
        };
        const response=await admin.messaging().send(message)
      

           console.log(response)

      }catch(e){
        console.log(e)
      }

}

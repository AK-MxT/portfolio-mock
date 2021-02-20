import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {adminMailBody, thanksMailBody} from "./lib/mailBody";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

admin.initializeApp();
const db = admin.firestore();

export const sendMail = functions
    .region("asia-northeast1")
    .https.onCall(async function(data, context) {
      const {name, subject, email, content} = data;
      if (!email) {
        // emailが未定義ならエラー（フロントでチェックしてるので発生しない想定）
        throw new functions.https.HttpsError(
            "invalid-argument",
            "email is required"
        );
      }

      const adminMailData = {
        to: functions.config().mail.admin_address,
        message: {
          subject: subject,
          text: adminMailBody({name, subject, email, content}),
        },
      };

      console.log(adminMailData);

      const thanksMailData = {
        to: email,
        message: {
          subject: "お問い合わせありがとうございます",
          text: thanksMailBody({name, subject, email, content}),
        },
      };

      console.log(thanksMailData);

      await db.collection("mail").add(adminMailData);
      await db.collection("mail").add(thanksMailData);
    });

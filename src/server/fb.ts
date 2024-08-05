import { config } from "dotenv";

config()

export const handleFbRequest = async (req: any) => {

    const result: { success: boolean, error: string } = { success: false, error: '' };
    // {"typeWebhook":"incomingMessageReceived","instanceData":{"idInstance":7103961906,"wid":"972552683337@c.us","typeInstance":"whatsapp"},"timestamp":1721928636,"idMessage":"B80B6ED0AE66BC75BF1BB2AA1D35CE80","senderData":{"chatId":"972526526063@c.us","chatName":"Biz Techoff התאמת העסק לעידן הטכנולוגי","sender":"972526526063@c.us","senderName":"Biz Techoff התאמת העסק לעידן הטכנולוגי","senderContactName":""},"messageData":{"typeMessage":"pollMessage","pollMessageData":{"name":"מה דעתך","options":[{"optionName":"כן"},{"optionName":"לא"}],"multipleAnswers":true}}}
    // {"typeWebhook":"incomingMessageReceived","instanceData":{"idInstance":7103961906,"wid":"972552683337@c.us","typeInstance":"whatsapp"},"timestamp":1721924066,"idMessage":"D4CE9F6591E18FEC4D","senderData":{"chatId":"972526526063@c.us","chatName":"Biz Techoff התאמת העסק לעידן הטכנולוגי","sender":"972526526063@c.us","senderName":"Biz Techoff התאמת העסק לעידן הטכנולוגי","senderContactName":""},"messageData":{"typeMessage":"documentMessage","fileMessageData":{"downloadUrl":"https://do-media-7103.fra1.digitaloceanspaces.com/7103961906/821ea36d-646f-46f9-baf0-b2440023376e.txt","caption":"","fileName":"new 1.txt","jpegThumbnail":"","isAnimated":false,"mimeType":"text/plain","forwardingScore":0,"isForwarded":false}}}
    // {"from":"972526526063@c.us","typeWebhook":"incomingCall","instanceData":{"idInstance":7103961906,"wid":"972552683337@c.us","typeInstance":"whatsapp"},"status":"pickUp","timestamp":1721972558,"idMessage":"8C9FF0C458BF6CFE28364A5564E9F64E"}
    return result
}

const telegram = require('telegram-bot-api') //2.0.0

const teleBotToken = "1045261772:AAGJu_VgmKMhZ3wjLKNIq_AcWfBy_W3KTgA" // 换成你的Token
const api = new telegram({ token: teleBotToken })
const mp = new telegram.GetUpdateMessageProvider()
api.setMessageProvider(mp)

api.start().then(() => {
    console.log('API is started')
})
.catch(console.err)

api.on('update', update => {
    // 处理信息逻辑
    let message = update.message
    if (message.text) {
        const msgParam = {
            chat_id: message.chat.id,
            text: message.text
        }
        api.sendMessage(msgParam)
    }
})
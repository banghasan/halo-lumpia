const token = 'TOKEN:BOT-KAMU';

const bot = new lumpia.init(token);
bot.options.log_id = IDKAMU;

function doPost(e) {
  bot.doPost(e);
}

function setWebhook() {
  let url = 'URL_WEB';
  let result = bot.telegram.setWebhook(url);
  Logger.log(result);
}
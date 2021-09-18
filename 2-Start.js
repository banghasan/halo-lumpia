const button = lumpia.button;
const markup = lumpia.markup;
const helper = lumpia.helper;

// perintah start
bot.start(ctx => {
  // start dengan keyboard inline
  let nama = ctx.from.first_name;
  if (ctx.from.last_name) nama += ' ' + ctx.from.last_name;

  // cleansing nama biar tidak error karakter khusus HTML
  nama = helper.clearHTML(nama);

  let pesan = `Halo <b>${nama}</b>, perkenalkan aku ini bot!`;

  // menu keyboard inline
  let keyboard = [];

  // baris pertama
  // diawali dengan index 0
  keyboard[0] = [
    button.url('📚 Docs', 'https://lumpia.js.org'),
    button.url('👥 @botindonesia', 'https://t.me/botindonesia')
  ];

  // baris kedua
  keyboard[1] = [
    button.text('😼 Halo Human', 'me_halo'),
    button.text('👀 Apa kabar?', 'me_kabar')
  ];

  ctx.replyWithHTML(pesan, {
    reply_markup: markup.inlineKeyboard(keyboard)
  });

})

bot.action('me_halo', ctx => ctx.reply('Ya, saya.'))
bot.action('me_kabar', ctx => ctx.answerCallbackQuery('✊🏼 Tetap semangat ya!'));
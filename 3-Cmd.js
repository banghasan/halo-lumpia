bot.cmd('ping', ctx => ctx.replyIt('Pong!'));

bot.hears(['hai', 'hi', 'hallo', 'hei'], ctx => ctx.reply('Hai juga!'));

bot.hears(/ass?alamu'?ala[yi]+ku+m/i, ctx => ctx.replyIt("Wa'alaikumussalam Wr Wb"));

bot.cmd(['ver', 'versi', 'version'], ctx => {
    let version = lumpia.version;
    let pesan = `🤖 Bot ini dibangun menggunakan <b>${version.name}</b> <code>v${version.number}.${version.build}</code>`;
    pesan += `\n\n✅ Sumber bersama belajar <b>Bot Telegram Indonesia</b>`

    let keyboard = [
        button.url('📚 Docs', 'https://lumpia.js.org'),
        button.url('👥 @botindonesia', 'https://t.me/botindonesia')
    ]
    ctx.replyWithHTML(pesan, {
        reply_markup: markup.inlineKeyboard(keyboard)
    });
})
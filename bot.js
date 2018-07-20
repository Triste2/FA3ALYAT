const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "bc-";
client.on('ready', () => {
    console.log('I am ready!');
});

const adminprefix = "bc-";
const devs = ['413685264565927967'];
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
    
if (message.content.startsWith(adminprefix + 'sgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**${argresult} تم تغيير بلايينق البوت الى **`)
} else 
  if (message.content.startsWith(adminprefix + 'sname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير اسم البوت الى`)
return message.reply("**يجب عليك الإنتظار ساعتين لتغير الاسم مرة اخرى**");
} else
  if (message.content.startsWith(adminprefix + 'savatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغيير أفتآر البوت الي`);
      } else     
if (message.content.startsWith(adminprefix + 'st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**تم تغير تويتش البوت الى  ${argresult}**`)
}

});







   client.on("message", message => {
	var prefix ='bc';
     if (message.content === prefix + "help") {
         message.react('👌')
         if(!message.channel.guild) return message.reply('** This command only for servers **');
	 message.reply(" ** شوف خاصك ** ")
     }
});
//
client.on("message", message => {
	var prefix = 'bc';
 if (message.content === prefix + "help") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

** BC HELP **
**
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●

-  [ bc1 ] [ لإرسال برودكاست بدون ايمبد ]

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ●
**
`)


message.author.sendEmbed(embed)

}
});






client.on('message', message => {
  if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('bc1')){
if(!message.author.id === '413685264565927967') return;
message.channel.sendMessage('** تم إرسال البرودكاست **')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});



client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'
const owner = ['211969554061066243'];
const id = ['211969554061066243', '' , '' , '' , ''];
const ms = require("ms");
const fs = require('fs');
const Canvas = require("canvas");
const jimp = require("jimp");
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', message => {
    if (message.content.startsWith("تهكير")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("** رجائاََ منشن من تريد تهكيرة ** ");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(RANDOM)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:** Loading  [▓] 1%**').setColor(RANDOM)})
             }, 2500)
             setTimeout(function() {
                m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:** Loading [▓▓▓▓] 25%**').setColor(RANDOM)})
              }, 3000)
              setTimeout(function() {
                 m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:** Loading [▓▓▓▓▓▓▓▓] 50%**').setColor(RANDOM)})
               }, 6000)
               setTimeout(function() {
                  m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:** Loading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 75%**').setColor(RANDOM)})
                }, 9900)
           setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:** Hacking Done [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%**').setColor(RANDOM)})
             }, 10050)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:** ..يتم الدخول للحساب** ').setColor(RANDOM)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('** تم تهكيرك  __Done Hacking__ **')
           }, 6000)
           });
         }
 });







//voise online
client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('353991756519309333');//فويس صوتي 
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`.AG Online: [${currentSize}]`);
  if (currentSize !== size) channel.setName(`Voice Online: [${currentSize}]`);
});


/*
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","Members 🎮"));//here 
    });





client.on('guildCreate', guild => {
  client.channels.get("211969554061066243").send(`**
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("211969554061066243").send(`**
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__
Server Count: __${guild.memberCount}__**`)
});



client.on('message', message => {
   if (message.content === ".id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)


  message.channel.sendEmbed(embed);
    }
});
*/
client.on('message', message => {
    if (message.content === ".av") {
	message.channel.send( `${message.author.username} avatar URL: ${message.author.avatarURL}`);
    }
});

  // Avatar Server URL!
client.on('message', message => {
    if (message.content === ".avs") {
    message.channel.send( `${message.guild.name} رابط الصورة : ${message.guild.iconURL}`);
    }
});


client.login(process.env.BOT_TOKEN);

  
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
let guild = message.guild.id;   
var prefix = ayarlar.prefix;

  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`);
  
	let user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author;
  let reason = args.slice(1).join(' ');
  
  if (!user) return message.channel.send(`Kullanıcıyı Etiketlemen Gerek; \`${prefix}ban @YusufXHM Reklam\` `);
  if (user.id === message.author.id) return message.channel.send('Doğru kullanım !ban @yusufxhm reklam.');
  if (user.position > message.member.roles.highest.position) return message.channel.send(`Bu kullanıcı Senden daha yüksek bir rolde. yada aynı rollerdesiniz`);
    if (!reason) reason = 'Belirtilmemiş.'
    if (!user) return message.channel.send(`Bu kullanıcıyı Bulamıyorum`)
    let member = message.guild.member(user)
    if (!member) return message.channel.send(`BU kullanıcıyı Bulamıyorum`)

 if (!message.guild.member(user).bannable) return message.channel.send(`Bu kullanıcıyı banlayamam \`Kullanıcı Benim yetkimden yüksek\` yada \`Bana gereken Yetkileri Vermedin\`.`);

   if (!message.guild.member(user).bannable) return message.channel.send('Yetkilileri Banlayamam');

  message.guild.members.ban(user.id)
  message.channel.send(`<@${user.id}> **Banlandı!** **Sebep: \`${reason}\`**`)

};

exports.conf = {
  aliases: ['ban'],
  permLevel: 0,
  kategori: 'Moderasyon'
};

exports.help = {
  name: 'ban',
  description: 'Belirttiğiniz kişiyi sunucudan yasaklar.',
  usage: 'ban <@kullanıcı> <sebep>',

};
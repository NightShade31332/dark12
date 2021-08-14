const Discord = require('discord.js');
const db = require('quick.db')
// Lütfen Çalmayınız Emek Verdim - GamerWolf
exports.run = async (client, message, args) => { 

let aboneyetkili = '875833332590583848'    // Buraya Abone Sorumlusu Rolü ID Sini Koyunuz

  if(!message.member.roles.cache.has(aboneyetkili)) 
  return message.channel.send('Bu Komudu Sadece Yetkililer Kullanabilir.')
  let uye = message.mentions.members.first()
  let etiket = args[1]
  if (!uye) return message.channel.send('Lütfen Bir Kişi Etiketleyiniz.')
  
      setTimeout(function(){
  uye.roles.add(abonerolü)
  },500)
  
  let abonerolü = '875833352006037595'  // Buraya Abone Rolü ID Sini Koyunuz
  
  let gamerwolf = new Discord.MessageEmbed() 
  .setDescription(`<@&875833352006037595>
  
  
  
  
Rolü Başarıyla Hesabına Tanımlandı!`)   // Lütfen Çalmayınız Emek Verdim - GamerWolf
message.channel.send(gamerwolf)

};

exports.conf = {               
  enabled: true,
  guildOnly: true,
    aliases: ['a','Abone'],
  permLevel: 0
}
exports.help = {
  name: 'abone',
  description: "GamerWolf Abone Rolü Verme Komutu", // Lütfen Çalmayınız Emek Verdim - GamerWolf
  usage: 'GamerWolf Abone Rolü Verme Komutu' // Lütfen Çalmayınız Emek Verdim - GamerWolf
}

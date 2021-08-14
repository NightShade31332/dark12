const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

 let kayityetkili = '814023244154929154' //YETKİLİ İD                 // GAMERWOLF
let codeariusver = '813878242473672757' //VERİLİCEK ROL İD
let codeariusal = '813878441325625354' //ALINICAK ROL İD


  if(!message.member.roles.cache.has(kayityetkili))  // GAMERWOLF
  return message.channel.send(`**<a:no:791922067741999134> Bu Komudu Sadece **<@&814023244154929154>** Yetkisine Sahip Olanlar Kullanabilir**`);
  let member = message.mentions.members.first()
  let isim = args[1]
  let yaş = args[2] // GAMERWOLF
  let kayıtlımı = await db.fetch(`kayıtlıkişi_${member}`)
  let eskiismi = await db.fetch(`kayıtlıisim_${member}`)        // GAMERWOLF
  let toplamaisim = `${isim} ・ ${yaş}` // GAMERWOLF
  if (!member) return message.channel.send('**<a:no:791922067741999134> ・ Lütfen Bir Kişi Etiketleyiniz!**')
  if (!isim) return message.channel.send('**<a:no:791922067741999134> ・ Lütfen Bir İsim Yazınız!**')
  if (!yaş) return message.channel.send('**<a:no:791922067741999134> ・ Lütfen Bir Yaş Yazınız!**')
  // GAMERWOLF
      setTimeout(function(){
  member.roles.add(codeariusver)
  },800)
  setTimeout(function(){
  member.setNickname(`${isim} ・ ${yaş}`)
  },1000)
  setTimeout(function(){
  member.roles.remove(codeariusal)
  },1500)
// GAMERWOLF

let toplam = await db.fetch(`kayıttoplam_${message.author.id}`) + 1 || '0'

  if(kayıtlımı !== 'evet') {             // GAMERWOLF
  db.add(`kayıte_${message.author.id}`, 1)
  db.add(`kayıttoplam_${message.author.id}` , 1) // GAMERWOLF
  db.set(`kayıtlıkişi_${member}`, 'evet')
  db.set(`kayıtlıisim_${member}`, toplamaisim)
  db.push(`eskiad_${member.id}`, toplamaisim)                      // 
  db.add(`toplamik_${member.id}`, 1)  // GAMERWOLF
  let embed = new Discord.MessageEmbed()
  .setDescription(`
  **<a:hyper:814021705617768468> Kayıt Edilen Kullanıcı ・ ${member}**  
 **<a:emoji_57:814021257904390224> Verilen Rol ・ **<@&${codeariusver}>  \n                                                                               
   **<:discordstaff:814021399177592842> Kayıt Eden Yetkili ・** <@!${message.author.id}>
 **<:staff:814021164950224947> Bu Yetkili Toplamda ・ ${toplam} Kişi Kayıt Etmiş**
`)
  .setColor('#313131')
message.channel.send(embed)
  }  // GAMERWOLF
  if(kayıtlımı === 'evet'){
  db.set(`kayıtlıisim_${member}`, toplamaisim)                   // GAMERWOLF
  db.push(`eskiad_${member.id}`, toplamaisim)
  db.add(`toplamik_${member.id}`, 1)           // GAMERWOLF
    let embed = new Discord.MessageEmbed()
    .setTitle('<a:yes:814019968354091008>  ・ Bilgilendirme')
  .setDescription(` **Bu Üye Daha Öncedende Kayıt Edilmiş!**
                      
**İşte Eski Adı ・ ** \`${eskiismi}\``)
    .setFooter('Üye Başarıyla Kayıt Oldu!')
message.channel.send(embed)
  }
};  // GAMERWOLF

exports.conf = {                  // GAMERWOLF
  enabled: true,
  guildOnly: true,
    aliases: ['Kayıt'],
  permLevel: 0
}
exports.help = {
  name: 'kayıt',
  description: "Kayıt",
  usage: 'Kayıt'
}
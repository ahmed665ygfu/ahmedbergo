require('events').EventEmitter.defaultMaxListeners = 1000000000;
const express = require('express');
const Discord = require('discord.js');
const client = new Discord.Client();
const mongoose =require("mongoose")

mongoose.connect(`mongodb+srv://ahmedh:0129554281000@ahmedbego.9bhph.mongodb.net/bergo`,{useNewUrlParser : true,                                                         useNewUrlParser: true,
 }).then(console.log(`connected to mongo db!`))
const db = require('quick.db');
const ytdl = require("ytdl-core");
const fetchVideoInfo = require("youtube-info");
require('naar-music-bot').config(client);


const canvas = require('canvas');



process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});




const prefix = "+";
////// By Sparcet ///////
const enmap = require('enmap');

const settings = new enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
    });

///////
client.on('ready', () => {
  function abady() {
    let status = [`${prefix} help`,` Server: ${client.guilds.cache.size}`,`Users: ${client.users.cache.size}`]
    let S = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[S], { type: 'STREAMING' })
  };
  //ismailmgde
  setInterval(abady, 5000)
  
})
client.login(`process.env.token`);

const talkedRecently = new Set();
///////////bot info///////

client.on('message', async ans => {
if(ans.content === prefix +"info"){
  if (talkedRecently.has(message.author.id)) {
            message.channel.send("انتظر دقيقة عشان تستعمل الامر مرة ثانية " + message.author);
    } else {


        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 60000);
    }

const embed = new Discord.MessageEmbed()
.setTitle(`Info`)
.setColor("RANDOM")
.setThumbnail(client.user.displayAvatarURL())
.setDescription(`Hi, Please read that at the bottom`)
.addField('**⺁Owner⺄ 👑**',`**Bergo**`, true)
.addField('**⺁Servers⺄ 🌐**',`**${client.guilds.cache.size}**`, true)
.addField('**⺁Users⺄ 👥**',`**${client.users.cache.size}**`, true)
.setTimestamp()
.setFooter(`Request By ${ans.author.username}`, ans.author.avatarURL());
ans.channel.send(embed);
  }
});
///
client.on("message", message => {
  if (message.content.startsWith(prefix + "music")) {
 const alem = new Discord.MessageEmbed()
.setTitle("Command list")
    .addField("Music Command", "`play`, `loop`, `skip`, `stop`, `volume`, `remove`, `lyrics`, `queue`, `search`, `shuffle`, `pause`, `resume`, `nowplaying`, `ping`")
    .setColor("#e64b0e")
    .setFooter("This is all command");
 message.channel.send(alem)
}
})

//////////ping//////////


client.on("message", async (message) => {
  if(message.author.bot) return;
  if(!message.guild) return;
  let args = message.content.split(" ");
  if(args[0] === prefix + "ping") {
    try{
      let oldate = new Date().getMilliseconds()
      message.channel.send(new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setTitle(`🏓 Pinging....`)
      ).then(msg=>{
        let newtime = new Date().getMilliseconds() - oldate;
        msg.edit(new Discord.MessageEmbed()
          .setColor("#00ff00")
          
          .setDescription(`⌛ ${client.ws.ping}ms\n\n✨ ${client.ws.ping + newtime}ms\n\n⏱️ ${newtime}ms`)
        );
      })
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new Discord.MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
    
    }
});


//////////Help//////////

  client.on('message', message =>{
if(message.content === "اظهار"){
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : true
            }).then(() => {///////بيرجو
                                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
               .setThumbnail(message.guild.iconURL())
                .setDescription(`> **Done show This Room ${message.channel}**`)//////////بيرجو
                .setFooter(`By ${message.author.username}`)
                message.channel.send(embed)
                })
}
});

client.on('message', message =>{
if(message.content === "اخفاء"){
if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(' ** You dont have `MANAGE_CHANNELS` permission **');
let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');///////////////بيرجو
        message.channel.createOverwrite(everyone, {
              VIEW_CHANNEL : false
            }).then(() => {
                                const embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
               .setThumbnail(message.guild.iconURL())
                .setDescription(`> **Done Hide This Room ${message.channel}**`)
                .setFooter(`By ${message.author.username}`)
                message.channel.send(embed)
                })
}
});

/////

const disbut = require('discord-buttons'); // npm i discord-buttons

/* ↑ البكجات ↑ */

disbut(client); // لا تعدل عليها ( للأزرار )
const coolDown = new Set(); // تعريف الكول داون
const { MessageButton } = require('discord-buttons')

client.on('message', async message => {
    if(message.content.startsWith('help')|| message.content.startsWith(prefix+"help")|| message.content.startsWith(prefix+"بوت")) {
      message.delete({timeout:1})
      

    let batten1 = new MessageButton()
    .setStyle('blurple')
    .setLabel('Genral.')
    .setID('1')
    let batten2 = new MessageButton()
    .setStyle('blurple')
    .setLabel('Moderators.')
    .setID('2')
    let batten3 = new MessageButton()
    .setStyle('blurple')
    .setLabel('Premium.')
    .setID('3')
    let batten4 = new MessageButton()
    .setStyle('blurple')
    .setLabel('other.')
    .setID('4')
    let batten5 = new MessageButton()
    .setStyle('red')
    .setLabel('Music .')
    .setID('5')

    const embed = new Discord.MessageEmbed()
    .setTitle("> **Hi Iam HighBot My Prefix is + or ? <a:1041_discord_gif_benc:950791611242123264> **")
    .setDescription(`
     > **    <a:5a79b547504b43feaf6af6670e740a4d:950789182144524319> General : Commands **

    > **<a:739784819810238524:950789990735052840>  Moderators : Commands **

    > **<a:665192451677487155:950790266439209060>   Premium : Commands **

    > **<a:691185535817089036:950792694739898398>    other : Commands **

    > **<a:music:949575816185008188>   For Music**

    > **<a:LevelUp1:954031984722714664>  For Level system go to other commands**
    `)
    .setAuthor(message.author.tag,message.author.displayAvatarURL({ dynamic: true }))
    .setThumbnail(message.guild.iconURL())
    .setColor("RANDOM")
    .setImage('https://images-ext-2.discordapp.net/external/Agx-BWCmfbRYqQ7Jt-eeW-of-gU7wVAQR8jWQ9n6jS0/https/share.creavite.co/FFhleHz3MEuhAiaz.gif')
    .setTimestamp()
    .setFooter(client.user.tag,client.user.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed, { buttons: [batten1,batten2,batten3,batten4,batten5]})
  }
}).on('clickButton', async (button) => {
  if(button.id === '1') {
  button.reply.defer()
    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:5a79b547504b43feaf6af6670e740a4d:950789182144524319>  **🌍 General Commands\n\`#\`1|${prefix}tax : لمعرفة الضريبة\n \`#\`2| ${prefix}credits: لاظهار عدد الكريديت \n \`#\`3 | ${prefix}user: معلومات عن حسابك \n \`#\`4 | ${prefix}server : معلومات عن السيرفر \n \`#\`5 | ${prefix}avatar: صورة حسابك \n \`#\`6 | ${prefix}profile: بروفايل حقك \n \`#\`7 | ${prefix}rank: رانك حقك \n \`#\`8 | ${prefix}daily: دايلى بروبوت.\n \`#\`9 | ${prefix}top: لمعرفة توب سيرفر\n \`#\`10| ${prefix}top voice: توب صوت\n \`#\`11 | ${prefix}top text: توب كلام**`) 
      .setImage('https://images-ext-2.discordapp.net/external/Agx-BWCmfbRYqQ7Jt-eeW-of-gU7wVAQR8jWQ9n6jS0/https/share.creavite.co/FFhleHz3MEuhAiaz.gif')
    .setColor("#FF0000 ")
    .setTimestamp()
    .setFooter(client.user.tag,client.user.displayAvatarURL({ dynamic: true }))
    .setThumbnail(button.guild.iconURL())

    const but = new MessageButton()
    .setID('1')
    button.message.edit({button1: but, embed: embed})
  }
   if(button.id === '2') {
    button.reply.defer()
    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:739784819810238524:950789990735052840>   **🔧 Admin Commands\n\`#\`12|${prefix}lock: لقفل الروم \n \`#\`13 | ${prefix}open: لفتح الروم\n \`#\`14 | ${prefix}clear : لمسح\n \`#\`15 | ${prefix}join : لكى تضع البوت فى روم صوتى 24 ساعة \n \`#\`16 | ${prefix}role:لاعطاء شخص رول \n \`#\`| ${prefix}set-mute: لتحديد رتبة الاسكات او الميوت\n \`#\`17 | ${prefix}mute: لاسكات شخص\n \`#\`18 | ${prefix}unmute: فك الاسكات \n \`#\`19 | ${prefix}unban all: لفك البان عن الكل.\n \`#\`20 | ${prefix}ban: لعمل بان لشخص\n \`#\`21 | ${prefix}unban:لفك البان\n \`#\`22 | \n >  <a:ColorLine:954042485292793856>  سيت لاين و خط للسيرفر حقك 
${prefix}set-line : لتحديد الخط \n ${prefix}line  - لوضع الخط او اكتب خط\n${prefix}add-room | لاضافة روم الي الخط التلقائي \n${prefix}clear-db | لمسح الخط الذى وضعته فى سيرفرك \n \`#\`23 | ${prefix}warn: لتحذير شخص\n \`#\`24 | ${prefix}say: لجعل البوت يقول كلامك\n \`#\`25 | ${prefix}kick: لطرد شخص من السيرفر\n \`#\`26 | ${prefix}welcome-setup: لتحديد روم الترحيب لكى يرسل رسالة الترحيب \n \`#\`27 | ${prefix}set-welcome: لتحديد رسالة الترحيب مثل بوت نديكوا\n \`#\`28 | ${prefix}roleall: لاعطاء رتبة معينة لجميع أعضاء السيرفر\n \`#\`29 | ${prefix}rolerem:لمسح رتبة معينة من جميع اعضاء السيرفر\n \`#\`30 | ${prefix}welcome-setup: لتفعيل نظام الترحيب مع ذكر اسم الداعى\n \`#\`31 | ${prefix}show all: لاظهار جميع الرومات بامر واحد\n \`#\`32 | ${prefix}hide all: لاخفاء جميع الرومات بامر واحد \n \`#\`33 | ${prefix}createcolors: لعمل 137 لون فى السيرفر حقك **`) 
      .setImage('https://images-ext-2.discordapp.net/external/Agx-BWCmfbRYqQ7Jt-eeW-of-gU7wVAQR8jWQ9n6jS0/https/share.creavite.co/FFhleHz3MEuhAiaz.gif')
    .setColor("#FF0000 ")
    .setTimestamp()
    .setFooter(client.user.tag,client.user.displayAvatarURL({ dynamic: true }))
    .setThumbnail(button.guild.iconURL())

    const but = new MessageButton()
    .setID('2')
    button.message.edit({button2: but, embed: embed})
      }
      
      if(button.id === '3') {
      button.reply.defer()
    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:665192451677487155:950790266439209060>   ** 💵 premium\n\`#\`34 | ${prefix}set-name: تغيير اسم بوت \n \`#\`35 | ${prefix}tr: لترجمة اى شئ للعربى \n \`#\`37 | ${prefix}تقديم: لتقديم ادارة \n \`#\`38 | ${prefix}spin: لتدوير عجلة الحظ \n \`#\`39 | ${prefix}figlet: لزخرفة اسمك \n \`#\`40 | ${prefix}setlog:  لمعرفة اخر الرسائل المبعوتة وكل حاجة خاصة بالسيرفر \n \`#\`41 | ${prefix}random: لانشاء ايميل وباسورد عشوائى\n \`#\`41 | ${prefix}reply: لاضافة رد تلقائى\n \`#\`42 | ${prefix}remove: لمسح الرد التلقائى\n \`#\`43 | ${prefix}sug: لاضافة اقتراح\n \`#\`44 | ${prefix}set-autorole: لتحديد الرتبة التلقائية عند دخول العضو\n \`#\`45 | ${prefix}remove-autorole: لازالة الرتبة التلقائية.\n \`#\`46 | ${prefix}bans: كم واحد متبند فى السيرفر**`) 
      .setImage('https://images-ext-2.discordapp.net/external/Agx-BWCmfbRYqQ7Jt-eeW-of-gU7wVAQR8jWQ9n6jS0/https/share.creavite.co/FFhleHz3MEuhAiaz.gif')
    .setColor("#FF0000 ")
    .setTimestamp()
    .setFooter(client.user.tag,client.user.displayAvatarURL({ dynamic: true }))
    .setThumbnail(button.guild.iconURL())
    const but = new MessageButton()
    .setID('3')
    button.message.edit({button3: but, embed: embed})
    }
    if(button.id === '4') {
    button.reply.defer()
    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:1656_idle:950790560145371196>   ** 🎉 أوامر الجيفاواى\`#\`47 | ${prefix}gstart: لعمل جيفاواى \n \`#\`48 | ${prefix}antibots-on\nantibots-off: 🛡️ أوامر الحماية\n \`#\`49 | ${prefix}ticket:🎫 لاوامر التيكيت \n \`#\`50 | ${prefix}info: لمعرفة معلومات عن البوت\n \`#\`51 | ${prefix}games: لاوامر الالعاب\n \`#\`52 | ${prefix}vote: لعمل استطلاع رأى\n \`#\`53 | ${prefix}templets:يعطيك تمبلت جميلة\n \`#\`54 | ${prefix}short: لاختصار رابط \n \`#\`55 | ${prefix}صورة الالوان السيرفر : الوان\n \`#\`56 | ${prefix}roledel: يمسح كل الرولات لشخص انت تمنشله\n \`#\`57 | ${prefix}لسحب بانر اى شخص عنده نيترو : بنر\n \`#\`58 | ${prefix}: لازالة رول من شخص : سحب\n \`#\`59 | ${prefix}roleinfo:لمعرفة الاشخاص العندهم رول معين\n \`#\`60 | ${prefix}set-role:لوضع الرول العيتفعل بها العضو\n \`#\`61 | ${prefix}set-ch:لتحديد الروم العيبقى فيها التفعيل\n \`#\`62 | ${prefix}verify:هذا الامر يكتبة العضو لتفعيل نفسه بالروم التى تم تحديدها\n \`#\`63 | ${prefix}search-youtube:للبحث عن فيديو على اليوتيوب\n \`#\`64 | ${prefix}search-egybest:للبحث فى موقع ايجى بيست عن اى فيلم\n \`#\`65 | ${prefix}للاسئلة العشوائية :كت\n \`#\`66  | ${prefix}search-google:للبحث على جوجل عن اى حاجة \n \`#\`67 | ${prefix}للاسئلة العشوائية :كت\n \`#\`68  | ${prefix}search-top.gg:للبحث على موقع البوتات\n \`#\`69  | ${prefix}search-netflix:للبحث على النتفليكس\n \`#\`70 | ${prefix}سيت سجن : لتحديد رول السجن \n \`#\`71  | ${prefix}سجن : لسجن شخص سب مثلا\n \`#\`72 | ${prefix}روم :لتغيير اسم الروم  \n \`#\`73 | ${prefix}esay : ساى بامبيد \n > <a:LevelUp1:954031984722714664>  
    Level system Commands\n\`#\`74|${prefix}rank : لمعرفة الرانك\n \`#\`75| ${prefix}leaderboard: لاظهار توب رانك\n ${prefix}resetrankingall | لعمل ريسيت لجميع اللفلات لتصفير الرانك\n \`#\`76 | ${prefix}role-level: اعطاء رول عندما يصل احد الى لفل معين\n \`#\`77 | ${prefix}add-level : لاعطاء احد لفل  \n \`#\`78 | ${prefix}blacklist: لاعطاء احد بلاك ليست فيتم تصفيره للابد \n \`#\`79 | ${prefix}levelupmessage: لتحديد رسالة اللفل اب عندما تصل للفل الاعلى  \n \`#\`80 | ${prefix}xpsettings: لوضع اعدادات للفل  \n \`#\`81 | ${prefix}channel-levelup: لتحديد روم الفل عند الصعود للفل اعلى. **`) 
      .setImage('https://images-ext-2.discordapp.net/external/Agx-BWCmfbRYqQ7Jt-eeW-of-gU7wVAQR8jWQ9n6jS0/https/share.creavite.co/FFhleHz3MEuhAiaz.gif')
    .setColor("#FF0000 ")
    .setTimestamp()
    .setFooter(client.user.tag,client.user.displayAvatarURL({ dynamic: true }))
    .setThumbnail(button.guild.iconURL())
    const but = new MessageButton()
    .setID('4')
    button.message.edit({button4: but, embed: embed})
      

  }
  if(button.id === '5') {
    button.reply.defer()
    const embed = new Discord.MessageEmbed()
    .setDescription(`<a:music:949575816185008188>   **Music <a:music:949575816185008188>  Commands\n\`#\`82|!play: لسماع أغنية \n\`#\`83| !loop: لتكرار الاغنية\n\`#\`84| !pause: لايقاف الاغنية\n\`#\`85| !queue: قايمة الاغانى\n\`#\`86| !resume: لاستكمال الاغنية\n\`#\`87| !skip: عمل سكيب للاغنية\n\`#\`88| !stop: لايقاف الاغنية\n\`#\`89|!lyrics: لصفاء الاغنية**`) 
      .setImage('https://images-ext-2.discordapp.net/external/Agx-BWCmfbRYqQ7Jt-eeW-of-gU7wVAQR8jWQ9n6jS0/https/share.creavite.co/FFhleHz3MEuhAiaz.gif')
    .setColor("#FF0000 ")
    .setTimestamp()
    .setFooter(client.user.tag,client.user.displayAvatarURL({ dynamic: true }))
    .setThumbnail(button.guild.iconURL())

    const but = new MessageButton()
    .setID('5')
    button.message.edit({button5: but, embed: embed})
      }

})
///////////TAX/////////

 const probot = require("probot-tax");
client.on("message", async bader => {
    let args = bader.content
        .split(" ")
        .slice(1)
        .join(" ");
    if (bader.author.bot) return;
    if (!bader.guild) return;
    if (!bader.content.startsWith(prefix)) return;
    if (bader.content.toLowerCase().startsWith(prefix + "tax".toLowerCase()))  {
        let args2 = parseInt(args)
        let tax = Math.floor(args2 * (20) / (19) + (1))
        let tax2 = Math.floor(args2 * (20) / (19) + (1) - (args2))
        let tax3 = Math.floor(tax2 * (20) / (19) + (1))
        let tax4 = Math.floor(tax2 + tax3 + args2)
        let embed1 = new Discord.MessageEmbed()
            .setTitle(`**❌**`)
            .setColor("#f04747")
            .setDescription(`رقم :؟`)
            .setFooter(`${client.user.username}`);
        if (!args2) return bader.channel.send(embed1);
        let embed2 = new Discord.MessageEmbed()
            .setTitle(`**❌**`)
            .setColor("#f04747")
            .setDescription(`رقم :؟`)
            .setFooter(`${client.user.username}`);
        if (isNaN(args2)) return bader.channel.send(embed2);
        if (args2 < 1) return bader.channel.send(3);
        let embed4 = new Discord.MessageEmbed()
            .setTitle(`التكلفة النهائية هي:`)
            .setColor("#43b581")
            .setDescription(`1`)
        if (args2 == 1) return bader.channel.send(embed4);
        let taxbader = new Discord.MessageEmbed()
            .setTitle(`> **الضريبه**`)
            .setColor("RANDOM")
.setFooter(`By  : ${bader.author.username}`, `${bader.author.displayAvatarURL()}`)
 .setThumbnail(bader.author.displayAvatarURL({size: 256, dynamic: true}))
    .setTimestamp()
            .addFields(
      {
      name:"> `الكريديت مع الضريبه غير شامل الوسيط: `", value:` **${tax}**`
 
    },
    {
      name:"> `الكريديت شامل الوسيط:`", value:` **${tax4}**`
 
    },
          
        


        
 
    )
        bader.channel.send(taxbader);
    }
}); 
/////////



//////
client.on('message', dark =>
{
    if(dark.content === `<@${client.user.id}>`)
    {
        dark.reply(`My Prefix is : ${prefix}`);
    }
})
///////////spin////////

let bas = [//اول تعريف لل عشوائي
"5k",
"30k",
"Nitro Clasic",
"Nitro Gaming",
"Nitro 1y",
"100 $ baypal",
"100k",
"4k",
"10k",
"1k",
"try agin - اعادة محاولة",
]//اخر تعريف
client.on("message", basel => {//تعريف كلمة message ويقول بوت يشتغل وهيك
 if(basel.content.startsWith(prefix + "spin")) {
 
let bass = new Discord.MessageEmbed()//تعريف ايبمد في الكود
.setTitle(`عجلة الحظ`)//اول كلام في ايمبد
.setColor("RANDOM")
.setDescription(`${bas[Math.floor(Math.random() * bas.length)]}`)//ديسكربشن عشوائي
.setFooter(`made by : ! 𝐿𝑀 | β𝒆Ř𝑔ό#0843 `)//اخر ايبمد
.setImage("https://media.discordapp.net/attachments/901600751728603166/901616684278902794/R.gif?width=384&height=216")
basel.reply(bass)//رد لا تغيرو 
}
})

////////welcome//////


///////////welcome 2 //////////



//////////auto reaction///////

client.on('message', message => {
    if (message.channel.id != '945647416223354880') return;
    if (message.member.user.bot) return;
    message.channel.send('https://media.discordapp.net/attachments/943253586714951720/951929894944780288/cbae0cdcefc73151.png?width=1024&height=56') ;
});

//////////////
client.on('message', message => {
    if (message.channel.id != '948523625219239936') return;
    if (message.member.user.bot) return;
    message.channel.send('https://media.discordapp.net/attachments/943253586714951720/951929894944780288/cbae0cdcefc73151.png?width=1024&height=56') ;
});
////////////
client.on('message', message => {
    if (message.channel.id != '950379680874266684') return;
    if (message.member.user.bot) return;
    message.channel.send('https://media.discordapp.net/attachments/943253586714951720/951929894944780288/cbae0cdcefc73151.png?width=1024&height=56') ;
});
///////////
client.on('message', message => {
    if (message.channel.id != '950415138320691241') return;
    if (message.member.user.bot) return;
    message.channel.send('https://media.discordapp.net/attachments/943253586714951720/951929894944780288/cbae0cdcefc73151.png?width=1024&height=56') ;
});
///////////lock and unlock///////

 client.on('message', message => {
    if (message.content.startsWith("قفل")) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return
        let everyone = message.guild.roles.cache.find(m => m.name === '@everyone');
        message.channel.createOverwrite(everyone, {
            SEND_MESSAGES: false,
        })
        message.channel.send("> **🔒 تم قفل الروم** ");
    }
 });

client.on('message', message => {
    if (message.content.startsWith("فتح")) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return
        let everyone = message.guild.roles.cache.find(m => m.name === '@everyone');
        message.channel.createOverwrite(everyone, {
            SEND_MESSAGES: true,
        })
        message.channel.send(" > **🔓 تم فتح الروم**  ")
    }
}); 

/////////user////////
const moment = require('moment');
client.on("message", (x3mk) => {
    if(x3mk.content.startsWith(prefix + "user")|| x3mk.content.startsWith("U"))  {
                  var args = x3mk.content.split(" ").slice(1);
        let x3mkmen = x3mk.mentions.members.first() || x3mk.guild.members.cache.get(args[0]);
if(!x3mkmen) x3mkmen = x3mk.member;
        let x3mkem = new Discord.MessageEmbed()
             .setAuthor(x3mkmen.user.username, x3mkmen.user.displayAvatarURL({ dynamic: true }))
         .setColor("RANDOM")
        .addField(`**JOINED DISCORD**`, `**${moment(x3mkmen.user.createdTimestamp).format('YYYY/M/D')}**
    **\`${moment(x3mkmen.user.createdTimestamp).fromNow()}\`**`, true)
.addField(`**JOINED SERVER**`, `**${moment(x3mkmen.joinedAt).format('YYYY/M/D')} 
\`${moment(x3mkmen.joinedAt).fromNow()}\`**`, true)
       .setFooter(`Requested by: ${x3mk.author.username}#${x3mk.author.discriminator}`, x3mk.member.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

x3mk.channel.send(x3mkem)
    }
})



///////////clear//////

client.on("message",async message =>{
let command = message.content.toLowerCase().split(" ")[0];
if (command == `${prefix}clear` || command == `مسح` || command == `${prefix}cr`) { 
message.delete({timeout: 5})
                 if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    if(!message.channel.guild) return message.reply(`** This Command For Servers Only**`); 
     if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** You don't have perms :x:**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_GUILD')) return message.channel.send(`> ** I don't have perms :x:**`);
 
    let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 100) return message.channel.send(`\`\`\`javascript
i cant delete more than 100 messages 
\`\`\``).then(messages => messages.delete(5000))
if(!messagecount) messagecount = '100';
    message.channel.messages.fetch({limit: 100 }).then(messages => message.channel.bulkDelete(messagecount)).then(msgs => {
    message.channel.send(`\`\`\`js
${msgs.size} عدد الرسائل التي تم مسحها
\`\`\``).then(messages => 
messages.delete({timeout:3000}));
    })
  }    
}});
///// say with embed
client.on("message", msg => {
    let moonlight = msg.content.split(" ").slice('1').join(" ")
    if (msg.author.bot) return;
    if (msg.content.startsWith(prefix + 'esay')) {
      if (!msg.member.hasPermission('ADMINISTRATOR'))
        return msg.channel.send('> **Permission required!** "ADMINISTRATOR"')
      msg.delete()
      let moonlight1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
      .setThumbnail(msg.guild.iconURL({ dynamic: true }))
        .setDescription(`${moonlight}`)
      msg.channel.send(moonlight1)

    }
});
/////////server///////
client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
    
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        if(command === 'server') {
          if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  Cool Down (10 second) ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
        const onlinemembers = message.guild.members.cache.filter(m => m.presence.status === 'online'||'dnd'||'afk').size
          const textch = message.guild.channels.cache.filter(ch => ch.type === "text").size
          const voicech = message.guild.channels.cache.filter(ch => ch.type === "voice").size
          let customembed = new Discord.MessageEmbed()
          .setAuthor(message.guild.name,message.guild.iconURL())
          .addField(`🆔 Server ID:`, message.guild.id, true)
          .addField(`📆 Created On`, message.guild.createdAt, true)
          .addField(`👑 Owned by`, message.guild.owner, true)
          .addFields({name:`👥  Members (${message.guild.members.cache.size})`, value: `${onlinemembers} online\n${message.guild.premiumSubscriptionCount} boosts ✨`, inline: true})
          .addField(`:speech_balloon: Channels (${message.guild.channels.cache.size})`, `${textch} Text | ${voicech} voice`, true)
          .addFields({name:`🌍 Others`, value: `**region:** ${message.guild.region}\n **Verification Level:** ${message.guild.verificationLevel}`, inline: true})
          .addField(`🔐  Roles (${message.guild.roles.cache.size})`, `To see a list with all roles use **${prefix}roles**`)
          message.channel.send(customembed)
        }}
  });



/////////////24 hours in room //////

setInterval(() => {
  const channelid = "922914723161321482" ////Channel Id
  const channel = client.channels.cache.get(channelid);
  if (!channel) return
  channel.join()
}, 1000);


setInterval(() => {
  const channelid = "947630964153122906" ////Channel Id
  const channel = client.channels.cache.get(channelid);
  if (!channel) return
  channel.join()
}, 1000);
//////////avatar//////////

client.on('message',async message => {
  if(message.content.startsWith(prefix + "avatar")) {
               if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
 
    let args = message.content.split(" ").slice(1).join(" ");   
   let member = message.mentions.users.first() || message.author
    let avatar = member.displayAvatarURL({size: 1024})
      const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")
        message.channel.send(embed);
    
  }}})

//////////////mute and unmute /////


client.on('message', async message => {
if(message.content.startsWith(prefix + `تنفس`)|| message.content.startsWith("تنفس") || message.content.startsWith("تكلم")) {
            if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(``);
let mention = message.mentions.members.first();
var args = message.content.split(" ").slice(2).join(" ")
let member = message.mentions.members.first()
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if(!mention) return message.channel.send(`> **Usage: ${prefix}تنفس \`<@user>\` **`);
if (member.user.id === client.user.id) return message.channel.send(`**لم اجد الشخص**`);
mention.roles.remove(role)
message.channel.send(`**✅ - تم بنجاح ${mention.user.tag} **`)
let mens = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL())
.setTitle(`You Have Been UnMuted`)
.setDescription(`**
 In Server : ${message.guild.name}
 With Reson : ${args || "No reason provided."}
 By : ${message.author}
**`)
.setColor("GREY")
.setFooter('Id ' + message.author.id, message.author.avatarURL())
member.send(mens);
}}
})

//////////mute////

client.on('message', async message => {
if(message.content.startsWith( 'اسكت')) {
                   if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(``);
  var args = message.content.split(" ").slice(2).join(" ")
    
let mention = message.mentions.members.first();
  
let member = message.mentions.members.first()
  
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if(!role) {
    message.guild.roles.create({
        data: {
            name: 'Muted',
            permissions: [],
            color: 'GREY'
        }
    })
}
  
if(!mention) return message.channel.send(`**Usage: ${prefix}mute \`<@user>\` <Reason> **`);
  if (member.user.id === message.author.id) return message.channel.send(`> **لا استطيع اعطائه ميوت **`);
if (member.user.id === client.user.id) return message.channel.send(`> **لم اجد الشخص**`);
message.guild.channels.cache.forEach(c => {
c.updateOverwrite(role , {
SEND_MESSAGES: false, 
ADD_REACTIONS: false
});
});
  
mention.roles.add(role)
 
message.channel.send(`> **✅ - تم بنجاح ${mention.user.tag} , ${args || "No reason provided."}**`)
let mens = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL())//.setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png' }))
.setTitle(`You Have Been Muted`)
.setDescription(`**
 In Server : ${message.guild.name}
 With Reson : ${args || "No reason provided."}
 By : ${message.author}
**`)
.setColor("#0083ff")
.setFooter('Id ' + message.author.id, message.author.avatarURL())
member.send(mens);
}
}})
//////////unban all/////////

    client.on("message", message => {
        if(message.content.startsWith( 'فك باند')) {
                           if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(``);
                if (message.member.hasPermission("ADMINISTRATOR")) {
                    message.guild.fetchBans().then(bans => {
                        if (bans.size == 0) {message.reply("There are no banned users."); throw "No members to unban."};
                        bans.forEach(ban => {
                            message.guild.members.unban(ban.user.id);
                        });
                    }).then(() => message.reply("> **Done All Users Unbaned.**")).catch(e => console.log(e))
                } else {message.reply("You do not have enough permissions for this command.")}
           
        }
      }});
//////////يقولك فاضل كام على التوثيق  /////////
client.on('message', nibo => {
  if (nibo.content === prefix + "ver") {
    const embed = new Discord.MessageEmbed()
.setColor("black")//اللون
.setTitle(`Verified Bot`)
.setDescription(`75 of ${client.guilds.cache.size} Not Much Left For Verification`)
.setFooter(`${client.user.username}`)
nibo.channel.send(embed);
}});

/////////// البوت داخل كام سيرفر ////////

const lineReply = require("discord-reply")
client.on("message", basel => {
  if(basel.content.startsWith(prefix + "bot")) {
    let basel11 = new Discord.MessageEmbed()
    .setTitle("info our Bot")
    .addField(`servers!`, `${client.guilds.cache.size} `, true)
    .addField(`Users!` , ` ${client.users.cache.size} `, true)
    .addField(`channels!`, ` ${client.channels.cache.size} `, true)
    .setFooter(`developer basel - copyright for basel - developer support - basel - Request by ${basel.author.tag}` , basel.author.avatarURL({dynamic:true})).setTimestamp()
      .setColor("RANDOM")
    basel.reply(basel11)
}
});
////////////avatar server///////

client.on('message', nibo => {
  if (nibo.content === prefix + "avatarserver") {
                     if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    const embed = new Discord.MessageEmbed()
.setTitle(`Server Avatar`)
.setImage(nibo.guild.iconURL())
.setFooter(nibo.guild.name)
.setThumbnail(nibo.guild.iconURL())
.setColor("black")//اللون 
nibo.channel.send(embed);
}}});

///////////profile////////

client.on('message', message => {
    if (message.content.startsWith( prefix+"p") || message.content.startsWith("بروفايل") || message.content.startsWith(prefix+"profile"))  {
                       if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
        var args = message.content.split(" ").slice(1);
        var men = message.mentions.users.first();
        let user = message.mentions.users.first() || message.author;
        message.guild.fetchInvites().then(invites => {
            let personalInvites = invites.filter(
                i => i.inviter.id === message.mentions.users.first() || message.author.id
            );
            let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
            var he;
            if (men) {
                he = men
            } else {
                he = message.author
            }
            var mon = message.mentions.members.first();
            var h;
            if (mon) {
                h = mon
            } else {
                h = message.member
            }
            message.channel.send(`https://api.probot.io/profile/${user.id}`)
        });
    }
}});
///////



/////////role////

// بلزم تحمل البكج عشان يشتغل الكود
client.on('message',async message=>{
    const args = message.content.slice(0).trim().split(/ +/);
    if(args[0] != "role") return
    if (!message.member.hasPermission("MANAGE_ROLES")) return
    if (!args[1]) return message.reply("**you must mention a member!!**")
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!member) return message.reply(`i can't find this user **${args[0]}**`)
    if (!args[2]) return message.reply("**you must mention a role!!**")
    let rolementions = message.content.split(' ').slice(2).join(' ')
    console.log(rolementions)
    let role = message.guild.roles.cache.find(ro => ro.id === rolementions)  || message.mentions.roles.first() || message.guild.roles.cache.find(ro => ro.name.toLowerCase().includes(rolementions.toLowerCase()))
    if (!role) return message.reply(`I can't fine this role **${rolementions}**`)
    
    if(message.member.roles.highest.comparePositionTo(role) < 1 && message.author.id != message.guild.ownerID) return message.reply("**this role is higher than you**")
    if (!member.roles.cache.some(ro => ro.id === role.id))
    {
      member.roles.add(role);
      message.channel.send(`> **✅ Changed roles for ${member} , ${role.name}**
`)
    }
    else
    {
      member.roles.remove(role);
      message.channel.send(`> ✅ **removed role ${role.name} from ${member}**`)
    }
}) 
///////
client.on('ready', () => {
  setInterval(function(){
      client.guilds.cache.forEach(mu => {
                  var role = mu.roles.cache.find(e => e.name === "submit")//rainbow role name here
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  },20000);
})  
//////////غير اسم الروم ت //////

client.on('message' , message =>{
  if (message.content.startsWith( prefix+"روم")) {
    if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply('! 🙄 ليس لديك صلاحيات')
    if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply('! 🙄 ليس لدي صلاحيات')
      let newname = message.content.split(" ").slice(1).join(" ")
      if(!newname) return message.channel.send("name ?")
      message.channel.setName(newname)
  message.channel.send(`> تم تغير اسم الروم إلى \`${newname}\` `)
}})

client.on('message' , message =>{
    if (message.content.startsWith(prefix + "topic")) {
      if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.reply(`! 🙄 ليس لديك صلاحيات`)
      if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) return message.reply("! 🙄 ليس لدي صلاحيات")
        let newtopic = message.content.split(" ").slice(1).join(" ")
        if(!newtopic) return message.channel.send("name ?")
        message.channel.setTopic(newtopic)
message.channel.send(`> تم تغير اسم التويبيك إلى \`${newtopic}\` `)
}}) 


//////////يصنع ايميل عشوائى ///////


var randomEmail = require('random-email');
var randomPassword = require('random-password');

client.on("message", async message => {
  if(message.content.toLowerCase() ===prefix + "random") {
                     if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
      if(message.author.id == "767484873908682810") return;
    let data = await randomEmail({ domain: 'gmail.com' })
    let data1 = await randomPassword(NaN);
    message.channel.send(new Discord.MessageEmbed()
    .setTitle(`> **Email&Pass Generator By : '! 𝐿𝑀 | β𝒆Ř𝑔ό#0843**`)
    .addField(`✉️ - Email :`,data)
    .addField(`⛓ - Pass : `,data1))
  }
}})
//////////invites////////

  client.on('message',message =>{
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'invites') {
                    if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
let guild = message.guild
var codes = [""]
 var nul = 0
      
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
    nul+=invite.uses
codes.push(`discord.gg/${invite.code}`)
}
 
})
  if (nul > 0) {
      const e = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription("> **عدد الانفايت التى قمت بدعوتها** ")
      .setThumbnail(message.author.displayAvatarURL({size: 256, dynamic: true}))
      
      .addField(`${message.author.username}`, `> **لقد قمت بدعوة **${nul}** شخص**`)
      .setFooter(`Request : ${message.author.tag}`)
  
      message.channel.send(e)
  }else {
                       var embed = new Discord.MessageEmbed()
                        .setColor("RANDOM")
                  
                        .addField(`${message.author.username}`, `> **لم تقم بدعوة أي شخص لهذة السيرفر**`)
                        .setFooter(`Request : ${message.author.tag}`)
                        

                       message.channel.send({ embed: embed });
                        return;
                    }
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.addField(`**Your invite codes in** ${message.guild.name}`, `**You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!**`)
message.channel.send({ embed: embed });
return;
} else {
    var embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setThumbnail(message.author.displayAvatarURL({size: 256, dynamic: true}))
.addField(`> **روابط الانفايت الخاصة بك**\n ${message.guild.name}`, `> **Invite Codes** :\n${codes.join("\n")}`)
.setFooter(`Request : ${message.author.tag}`)
message.channel.send({ embed: embed });
return;
}
})
}

}});

///////////thanks////////

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` > • Welcome to our server dude . `)
}).catch(console.error)
})
///////
client.on("guildCreate" , devlopers => {
  const devloperssupport = new Discord.MessageEmbed()
  .setDescription(`> **💖 شكرا حب انك دعتنى لسيرفرك .**\n
  <a:1LoVe5:922914884944003123> وانت فى روم صوتى طبعا
**!play ما تنساش ان البوت بيشتغل ميوزك كمان اكتب فقط **`)
  devlopers.owner.send(devloperssupport)
})

////////////line////////

////////////warn/////////

client.on('message', message => {
 
     if(message.content.startsWith("انذار") || message.content.startsWith("تحذير")) {
                        if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
      if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`لا تمتلك صلاحيات`);
 let args = message.content.split(" ").slice(1);
    var warnings =  JSON.parse(fs.readFileSync('./warnings.json' , 'utf8'));
    var asar = message.mentions.users.first();
    var asar1 = args.slice(1).join(' ');
    const embed = new Discord.MessageEmbed()
        .setColor('#0083ff')
        .setTimestamp();
 
    if (!asar) {
        embed.addField("**منشن الشخص** ", `**${prefix}warn @${message.author.tag} <السبب>**`)
            .setTimestamp();
        return message.channel.send(embed);
    } if (!asar1) {
        embed.addField("**اكتب السبب** ", `**${prefix}warn  @${asar.tag} <السبب>**`)
        return message.channel.send(embed);
    }
    embed.addField("** تم التحذير **", `** العضو : ${asar.tag}** \n ** السبب : ${asar1}** \n ** بواسطة : ${message.author.tag}**`)
        .setTimestamp();
    message.channel.send(embed);
    const embed1 = new Discord.MessageEmbed()
        .setColor('#0083ff')
        .setTimestamp()
        .addField("> ** لقد تم اعطائك تحذير**", `
 
          السبب : **${asar1}** \n ** in : ${message.guild.name}**`)
        .setFooter(`
        بواسطة ${message.author.tag}.`);
             fs.writeFile("./warnings.json", JSON.stringify(`تم تحذيره \ ${asar.tag}`), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
    asar.send(embed1);
    message.delete();
}
}});
////////////نسخ سيرفرات ////////



///////////broadcast/////



//////////translate//////////

var translate = require('translation-google');//npm install translation-google


    client.on('message', async message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
      
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
       if(command === "tr") {
                          if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
        translate(args.join(" "), {to: 'ar'}).then(res => {
            message.channel.send(res.text);
        }).catch(err => {
            console.error(err);
        });
    }
    }});
///////////////level and rank //////////



//////////////تقديم ادارة ////////////

 

/////////ban and unban//////////

client.on("message", async message => {
 
if (message.content.startsWith( "باند") || message.content.startsWith("ختفو") || message.content.startsWith("بنعالي")) {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      let member = message.mentions.members.first()
      let mention = new Discord.MessageEmbed()
        .setTitle("**Order To ban**")
        .setDescription("> ***منشن واحد تبي تعطيه باند ❌***")
        .setFooter("Role Required  BAN_MEMBERS")
.setColor("RANDOM")
      if (!member) message.channel.send(mention)
      else {
        member.ban().then(mem => {
          let banned = new Discord.MessageEmbed()
            .setDescription(`> **Successfully Banned ✅**${mem.user.username}!🚀 `)
                      .setColor("RANDOM")
          message.channel.send(banned)
        })
      }
    } else {
      let permission = new Discord.MessageEmbed()
        .setDescription("> ***لا يمكنك فعل ذلك ❌!***")
        .setFooter("> ***ليس لديك الصلاحيات الكافية***")
      message.reply(permission)
    }
  }
})
///////
client.on('message', async message => {
if(message.content.startsWith( 'ازاله التحذير') || message.content.startsWith("ازاله الانذار")) {
if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(``);
let mention = message.mentions.members.first();
var args = message.content.split(" ").slice(2).join(" ")
let member = message.mentions.members.first()
let role = message.guild.roles.cache.find(ro => ro.name == 'Muted');
if(!mention) return message.channel.send(`**Usage: {ازاله الانذار
او ازاله التحذير} \`<@user>\` **`);
if (member.user.id === client.user.id) return message.channel.send(`**لم اجد الشخص**`);
mention.roles.remove(role)
message.channel.send(`> **✅ - تم بنجاح ${mention.user.tag} **`)
let mens = new Discord.MessageEmbed()
.setThumbnail(message.guild.iconURL())
.setTitle(`You Have Been UnMuted`)
.setDescription(`**
 In Server : ${message.guild.name}
 With Reson : ${args || "No reason provided."}
 By : ${message.author}
**`)
.setColor("GREY")
.setFooter('Id ' + message.author.id, message.author.avatarURL())
member.send(mens);
}
})

//////////////لعبة نرد //////////////

client.on("message", msg => {
    if (
      msg.content == prefix + "nard"
    ) {
      if (msg.author.bot) return;
      if (msg.channel.type == "dm") return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(error + ` **You Can't Use This Command In DM's!**`).setFooter(`Request By ${msg.author.tag}`).setTimestamp())
   
      var x = ["0", "0", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"];// تقدر تضيف اكثر ان شاء الله لو مليون بس يكونو نفس الستايل
      var x3 = Math.floor(Math.random() * x.length);
      msg.channel.send(`${x[x3]}`)
    }
  })

//////////////////// دخول العضو وخروجه //////////



///////////log////////////


////////////say/////////////////
client.on("message", msg => {
    let say1 = msg.content.split(" ").slice('1').join(" ")
    if (msg.author.bot) return;
    if (msg.content.startsWith(prefix + 'say'))
                      {
      if (!msg.member.hasPermission('ADMINISTRATOR'))
        return msg.channel.send('> **Permission required!"ADMINISTRATOR**')
      msg.delete()
      msg.channel.send(say1)

    }
});

//////////// كود يجعل البوت يكتب الكلمة مزخرفة /////
const figlet = require('figlet');
client.on('message', saud=> {
if (saud.content.startsWith(prefix + "زخرف")) {
                   
var args = saud.content.split(' ').slice(1).join(' ')
saud.reply(
new Discord.MessageEmbed()
.setDescription(`\`\`\`${figlet.textSync(args, { horizontalLayout: "full" })}\`\`\``)
)
}
})

/////////////suggestion /////////

//////////blacklist ///////

//////////////protection/////////////

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'antibots-on') {
        if(!message.member.hasPermission('KICK_MEMBERS')) return;
        message.channel.send('antibots is **on**')
        db.set(message.guild.id + "on", 'true')
    }
    if(command === 'antibots-off') {
        if(!message.member.hasPermission('KICK_MEMBERS')) return;
        message.channel.send('antibots is **off**')
        db.delete(message.guild.id + "on")
    }
});
client.on('guildMemberAdd', (member) => {
     if(db.has(member.guild.id + "on")) {
    if(member.user.bot) {
        member.kick();
    }}
});

//////////ticket //////


 

//////////رابط للسيرفر لا نهائى  ////////

client.on("message", async function(Redix){

  
    let inv = await Redix.channel.createInvite({
      maxAge: 0, 
      maxUses: 0 
    })
  if(Redix.content === "https://discord.gg/KrYXjHpk"){
    Redix.channel.send(inv.url)
  }
 
 })
//////////////////////رابط دعوة البوت //////////

const discord = require("discord.js");

/* Import Discord Buttons Client */
const discordButtons = require("discord-buttons-plugin");




client.on("message", (message) => {
	if(message.content === "دعوة2") {
	/* Generate a Cute Embed :3 */
	 const embed = new discord.MessageEmbed()
   .setThumbnail('https://media.discordapp.net/attachments/893436393630597133/902021030053289994/PicsArt_10-13-09.01.58.jpg?width=342&height=342')
   .setTitle('بوت سيستيم')
    .setDescription('رابط دعوة البوت فى الموقع تبع البوت')
    .setFooter('DEVELOPED BY ! 𝐿𝑀 | β𝒆Ř𝑔ό#0843 ', '')
	 .setColor("RANDOM");
   
   
   
    /* Generate 1st Button with "Yes" lable on it */
	 
   /* Generate 3rd Link Button */
   const button3 = new buttonClient.MessageButton()
   .setLabel(" رابط دعوة البوت فى الموقع تبع البوت")
   .setURL("https://dashb2pre.ahmedbesho.repl.co/")

     
     /* Send Message with button */
     buttonClient.send(null, { channel: message.channel.id, embed, buttons: [  [button3] ]})
 }
})

/////////////////daily//////






/////////////منشن لاعطاء البريفكس ///////

client.on('message' , saud=> {
if(saud.content === `<@!902272756509450331>`){
saud.channel.send(`My Prefix is ${prefix}`)
}
});

/////////////لاعطاء البوت دخل اى سيرفر فى روم معينة /////
client.on('guildCreate',guild=>{
  let channel = client.channels.cache.find(c => c.id === '901881053092937769');
  let embed = new Discord.MessageEmbed()
  .setAuthor(guild.name,guild.iconURL({dynamic:true}))
  .setTitle(`${client.user.username}, Join new server.`)
  .setDescription(`Server Name: **${guild.name}**
Server Members: **${guild.memberCount}**
Creadted at: **${guild.createdAt}**
Region: **${guild.region}**
Verifiy: **${guild.verificationLevel}**`)
.setTimestamp()
channel.send(embed)
})

///////////اعطاء الاوامر //////
client.on('message', message => {
if (message.content === 'ascascasvadvdcascascascs') {
  
    message.delete();
    message.channel.send(``);
}
});
////////////
client.on('message', message => {
if (message.content === "cascassacxcascacxc") {
  
    message.delete();
    message.channel.send(`> **اسمك :**\n> **عمرك :** \n> **منوين :**\n> **شو تعرف عن الوسطاء :**\n> **هل تقسم انك ما راح تخرب على احد :**\n> **مبلغ الضمان عندك وهو 150 الف : **`);
}
});


//////////////kick///////////
const ms = require('ms')//npm install ms
client.on('message', async message => {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
 if(command === 'kick'|| command == `حرك`) {
                    if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let member = message.guild.member(user)
        if(!message.member.permissions.has('KICK_MEMBERS')) return;
        if(!user) return message.channel.send(new Discord.MessageEmbed()
        .setColor('#056608')
        .setDescription(`> usage : ${prefix}kick [@user/ user id] [reason]`))
        if(message.author.id === member.id) return message.channel.send('you cant kick yourself xd!')
        if(member.id === client.user.id) return message.channel.send('i cant kick my self lol!')
        if(member.roles.highest.position > message.guild.members.resolve(client.user).roles.highest.position)
    return message.channel.send("i cant kick someone with higher roles than me.")
    if(member.roles.highest.position > message.guild.members.resolve(message.author).roles.highest.position)
    return message.channel.send("you can kick someone with roles higher than you.")
        let modlogs = message.guild.channels.cache.find(ch => ch.name === "modlogs")
        if(!modlogs){
            message.guild.channels.create('modlogs', {
                type: "text",
                permissionOverwrites: [
                    {
                      id: message.guild.roles.everyone,
                      deny: 'VIEW_CHANNEL'
                    }
                 ],
            })
        }
        let reason = args.splice(1).join(" ")
        if(!reason) reason = "no reason provided"
        if(!member.kickable) return message.channel.send('i cant kick this member!')
        member.kick(reason).catch(err => {message.channel.send('i cant kick  this member!')})
        modlogs.send(new Discord.MessageEmbed()
        .setColor('#056608')
        .setDescription(`member kick: \n memberID: ${member.user.tag} got kicked by ${message.author}`))
    }
    }});

//////////////رد تلقائى //////
client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  if(message.channel.type === 'dm') return;
  let f = m1 => m1.author.id === message.author.id
    if(command === 'reply') {
      
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
        message.channel.send('> **ايه الكلمة الانت عاوز تضيفها.**').then(m => {
 
            m.channel.awaitMessages(f, {max:1, time: 20000, errors:['time']}).then(m1 => {
                m1 = m1.first()
                let b = m1.content
                message.channel.send('> **طيب ايه الرد بحيث البوت يقوله**').then(m2 => {
                    m2.channel.awaitMessages(f,{max:1, time: 20000, errors:['time']}).then(m3 => {
                       m3 = m3.first()
                        let rep = m3.content
                        message.channel.send('added reply!!')
                        db.set(`${b}_${message.guild.id}`, `${rep}`)
                }).catch(err => {message.channel.send('time is over!')})
            })
 
        }).catch(err => {message.channel.send('time is over!')})
    })
}
if(command === 'remove') {
                  
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
    message.channel.send("> **ايه الكلمة الانت عاوز تمسحها **").then(r => {
        r.channel.awaitMessages(f,{max:1, time: 20000, errors:['time']}).then(f => {
            f = f.first()
        let ff = f.content
        if(!db.has(`${ff}_${message.guild.id}`)) return message.channel.send('انت مضفتش كلمة زى ده قبل كده!')
        message.channel.send('removed!!')
        db.delete(`${ff}_${message.guild.id}`)
        }).catch(err => {message.channel.send('time is over!')})
    })
}
})
 
client.on('message', message =>{
    if(message.channel.type === 'dm') return;
    if(db.has(`${message.content}_${message.guild.id}`)) {
        message.channel.send(db.get(`${message.content}_${message.guild.id}`))
    }
})

////////ticket/////////






///////////////////sugg//////////


 client.on('message', naarCodes=> {
    if(naarCodes.content.startsWith(prefix + 'sug')) {
                      
      let args = naarCodes.content.split(' ').slice('1').join(" ")
        if (!args) return naarCodes.channel.send('Please type A Message To react On It');
        const naarembed = new Discord.MessageEmbed()
            .setDescription(`**اقتراح جديد :** \n \`${args}\``)
            .setColor('RANDOM')
            .setImage("https://images-ext-2.discordapp.net/external/oqWqwiva_P0x4fYGjKNc0EAQhXVxrYCL-A0CqmQizS4/https/share.creavite.co/csRWwDI1mpSFj52p.gif?width=421&height=54")
            .setThumbnail(naarCodes.guild.iconURL())
            .setFooter(`suggestion by : ${naarCodes.author.tag}`);
        naarCodes.delete();
        naarCodes.channel.send(naarembed).then(angelo => {
            angelo.react('✅');
            angelo.react('❌');
        });
    }
})
//////
 client.on('message', naarCodes=> {
    if(naarCodes.content.startsWith(prefix + 'فوت')) {
                      
      let args = naarCodes.content.split(' ').slice('1').join(" ")
        if (!args) return naarCodes.channel.send('Please type A Message To react On It');
        const naarembed = new Discord.MessageEmbed()
            .setDescription(`**استطلاع راى\n ايه رايكم فى  :** \n \`${args}\``)
            .setColor('RANDOM')
            .setThumbnail(naarCodes.guild.iconURL())
            .setImage("https://images-ext-1.discordapp.net/external/JNzQNU6YA0hHZbWzhcUP-9_L00OyUgbK1ylsvtgSGvE/https/share.creavite.co/Pe0FLa3DNIjtO2fD.gif?width=480&height=192")
            .setFooter(`الفوت  by : ${naarCodes.author.tag}`);
        naarCodes.delete();
        naarCodes.channel.send(naarembed).then(angelo => {
            angelo.react('<a:verified:909170049699438632>');
            angelo.react('<a:nono:909169749479526430> ');
        });
    }
})
//////////
client.on("message", message => {
  if (message.content.startsWith(prefix + "welcome-setup")) {
    if (!message.channel.guild) return;
    if (message.author.bot) return;
    if (!message.member.hasPermission("`MANAGE_CHANNELS"))
      return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
    message.guild.channels.create("welcome", "text").then(c => {
      c.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
      });
    });
    message.channel.send("**✅ تم تفعـيـل نظـام التـرحـيـب**");
  }
});
const { CanvasSenpai } = require("canvas-senpai")

const canva = new CanvasSenpai();

client.once("ready", () => {

 console.log("Ready!");

});

const config = require('./config.json');


client.on('guildMemberAdd', async member => {



   const channel = member.guild.channels.cache.find(ch => ch.name === config.channel);

   if (!channel) return;

 let data = await canva.welcome(member, { gradiant: "pinkman" })

//GRADIANTS NAME - coldsky, peakblue, pinkman, aqua, darkness, angel





   const attachment = new Discord.MessageAttachment(

     data,

     "https://media.discordapp.net/attachments/947626090262851686/948349432859070504/welc2ome.png?width=618&height=347"

   );

   channel.send(

     `#- user <@!${scooby.id}>
#- welcome to ${scooby.guild.name} server
#- We are now ${scooby.guild.memberCount}!`,

     attachment

   );  

  });

//////////xo////
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:']
  var grid_message;
 
  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1);
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    var player1_id = message.author.id
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `اللعبة بين اللاعبين التاليين <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_(لقد خسرت, العب مع نفسك :joy:)_'
    }
    message.channel.send(`Xo ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful tictactoe game initialization"))
    .catch(console.error);
    message.channel.send('Loading... Please wait for the :ok: reaction.')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`It\'s <@${turn_id}>\'s اشتغل! الرمز هو ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("Successful tictactoe listeprefix initialization"))
      .catch(console.error);
    })
    .then(console.log("Successful tictactoe react initialization"))
    .catch(console.error);
  }
  else {
    message.channel.send(`جرب xo @uesr`)
    .then(console.log("Successful error reply"))
    .catch(console.error);
  }
}
 });
///////////

////////////////////////
 client.on('message', async message => {
  let cmd = message.content.split(" ")[0];
  if (cmd == prefix + "gstart") {
    message.delete({timeout: 5})
    let winners = message.content.split(" ")[1];
    let time = message.content.split(" ")[2];
    let prize = message.content.split(" ").slice(3).join(" ");
    if (!winners || !time || !prize) return message.channel.send(`**Pls Use This Command Like this**\n \`${prefix}gstart 1 10m Nitro C\``);
    ///////time
    let ggg = ['d', "m", "h", "s"];
    if (ggg.some(c => time.endsWith(c))) {
      let timee = ms(time);
      console.log(timee);
      if (timee <= 1000) return message.channel.send(`**You Can't Make Giveaway Time Less Than 1sec**`);
      /////winners
      if (timee > 2592000000) return message.channel.send(`**You Can't Make Giveaway Time More Than 30Day**`)
      if (isNaN(winners)) return message.channel.send(`**Pls Type Number Of Winners Like:**\n${prefix}gstart \`1\` 10m Nitro C`);
      let wooners = Math.floor(winners);
      if (wooners >= 20 || wooners <= 0) return message.channel.send(`**Winners Most Be More Than 0 And Not More Than 20**`);
      ///// prize
      let tm = ms((timee - (Date.now() - (Date.now() + timee)) % 2), { long: true })
      let embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle("🎉 New Giveaway! 🎉")
        
        .setDescription(`**React with :tada: to enter the giveaway!**\n**Hosted By**: **${message.author}**\n**Time**: **${time}**\n**Prize**: **${prize}**`)             
        
        .setTimestamp()
        
 
 
       message.channel.send(embed).then(c => {
        c.react('🎉');
        asta(c, wooners, timee, prize, message.author.id);
      })
    } else {
      message.channel.send("**Please The Time Most Be Ends With 10m or 10s or 11h or 2d**");
    }
  } 
})
function asta(message, winners, time, prize, hoster) {
  setTimeout(() => {
    let tm = ms(((time - (Date.now() - (Date.now() + time)) % 2) / 2), { long: true })
    let embed = new Discord.MessageEmbed()
       .setColor("RED")
      .setTitle(`${prize}`)
      
      .setDescription(`**React with :tada: to enter the giveaway!**\n**Hosted By**: **${message.author}**\n**Time**: **${tm}**\n**Prize**: **${prize}**`)             
      
      .setTimestamp()
 
    message.edit(embed);
 
  }, time / 4);
  setTimeout(() => {
    let tm = ms(((time - (Date.now() - (Date.now() + time)) % 2) / 4), { long: true })
    let embed = new Discord.MessageEmbed()
       .setColor("RED")
      .setTitle(`${prize}`)
      
      .setDescription(`**React with :tada: to enter the giveaway!**\n**Hosted By**: **${message.author}**\n**Time**: **${tm}**\n**Prize**: **${prize}**`)             
      
      .setTimestamp()
 
    message.edit(embed);
 
  }, time / 2);
  setTimeout(() => {
    message.reactions.cache.get('🎉').users.remove(client.user.id)
    setTimeout(async () => {
      let winner = "";
      let s = [];
      let m = await message.reactions.cache.get('🎉').users.cache;
 
      m.forEach((value, key) => {
        s.push(key);
      })
 
 
 
      console.log(m);
 
      for (i = 0; i <= winners - 1; i++) {
        console.log(s);
 
        let r = s[Math.floor(Math.random() * s.length)];
        console.log(r);
        winner += "<@" + r + "> \n";
 
      }
      if (message.reactions.cache.get('🎉').users.cache.size < 1) {
        let embed = new Discord.MessageEmbed()
          .setTitle('🎉 End Giveaway 🎉')
          
          .setDescription(`No One Entered`)
          .setColor('RED')
        message.edit(embed);
      } else {
        let embed = new Discord.MessageEmbed()
          .setTitle('🎉 End Giveaway 🎉')
          .setColor("RED")
          .setTitle(`**Prize :**\n${prize}`)
          .setDescription(`**Winner :**\n${winner}`)             
          .setTimestamp()
        message.edit(embed);
      message.channel.send(`** ${winner}Congratulations you won with  ${prize}  **`);
      }
 
 
 
 
 
    }, 1000)
  }, time)
} 

//////////////
let channel = '901881053092937769';
client.on('guildCreate' , async  guild => {
var embed = new Discord.MessageEmbed()
.setColor('BLACK')
.setDescription(`
**info server**
> ID ${guild.id}
> Name Server${guild.name}
**info owner server**
> ID ${guild.owner.user.id} 
> User ${guild.owner.user.username} 
`)
var channel = client.channels.cache.get(id)
channel.send(embed)
})

//////
const fs = require('fs');


////////setline////


////////




////////setwelcome


    
////////////games///////
const DIG = require("discord-image-generation");
client.on("message", async (message) => {
    if(message.content.startsWith(prefix + "triggered")){
          var user = message.mentions.users.first() || message.author || message.guild.members.cache.get(message.content.split(' ')[1]);
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Triggered().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, "Triggered.gif");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "delete")) {
              let user = message.mentions.users.first();
              if(!user) return message.reply("need mention user")
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Delete().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Delete.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "trash")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Trash().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Trash.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "beautiful")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Beautiful().getImage(`${avatar}`);
        let attach = new Discord.MessageAttachment(img, "Beautiful.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "affect")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Affect().getImage(`${avatar}`);
        let attach = new Discord.MessageAttachment(img, "Affect.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "slap")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")
        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Batslap().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "slap.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "gay")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Gay().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Gay.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "sepia")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Sepia().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Sepia.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "greyscale")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Greyscale().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Greyscale.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "invert")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Invert().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Invert.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "wanted")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Wanted().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Wanted.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "spank")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Spank().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Spank.png");;
        message.channel.send(attach)
    }
});

client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "bed")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Bed().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Bed.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "rip")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Rip().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Rip.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "Ad")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Ad().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Ad.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "bobross")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Bobross().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Bobross.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "confusedStonk")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.ConfusedStonk().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "ConfusedStonk.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "doubleStonk")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.DoubleStonk().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "DoubleStonk.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "facepalm")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Facepalm().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Facepalm.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "hitler")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Hitler().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Hitler.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "jail")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Jail().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Jail.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "karaba")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Karaba().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Karaba.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "lisa")) {
       var args = message.content.split(" ");
        var text = args[1];
        let img = await new DIG.LisaPresentation().getImage(`${text}`);
        if(!text){
            return message.channel.send("Enter text");}
        let attach = new Discord.MessageAttachment(img, "LisaPresentation.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "mms")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Mms().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Mms.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "notstonk")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.NotStonk().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "NotStonk.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "poutine")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Poutine().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Poutine.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "stonk")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Stonk().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Stonk.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "thomas")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Thomas().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Thomas.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "discordBlack")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.DiscordBlack().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "DiscordBlack.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "discordBlue")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.DiscordBlue().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "DiscordBlue.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "circle")) {
              let user = message.mentions.users.first();
                            if(!user) return message.reply("need mention user")

        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Circle().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Circle.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "color")) {
       var args = message.content.split(" ");
        var color = args[1];
        let img = await new DIG.Color().getImage(`${color}`);
        if(!color){
            return message.channel.send("Enter hex code");}
        let attach = new Discord.MessageAttachment(img, "Color.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "blur")) {
        let user = message.mentions.users.first();
        if(!user) return message.reply("need mention user")
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Blur().getImage(`${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Blur.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "Blurit")) {
      var args = message.content.split(" ");
        var abderrahmane = args[1];
        if (!abderrahmane){
            return message.channel.send("Enter image link");}
        let img = await new DIG.Blur().getImage(`${abderrahmane}`,);
        let attach = new Discord.MessageAttachment(img, "Blur.png");;
        message.channel.send(attach)
    }
});
client.on("message", async (message) => {
    if (message.content.startsWith(prefix + "kiss")){
let user = message.mentions.users.first();
 if(!user) return message.reply("need mention user")

        let avatar = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
        const avatar2 = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let img = await new DIG.Kiss().getImage(`${avatar}`, `${avatar2}`);
        let attach = new Discord.MessageAttachment(img, "Kiss.png");;
        message.channel.send(attach)
    }

});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'games')) {
        var embed = new Discord.MessageEmbed()
            .setTitle("**__Games Commands__ :** :video_game:")
            .setColor("RANDOM")
  .setDescription
  (`**Best Bot Games 30+ Command - Made By Bergo**`)
    .addField("Games Command :", "`trash` | `delete` | `slap` | `triggered` | `wanted` | `spank` | `gay` | `rip` | `blur` | `Blurit` | `circle` | `greyscale` | `invert` | `sepia` | `Ad` | `affect` | `beautiful` | `bed` | `bobross` | `confusedStonk` | `discordBlack` | `discordBlue` | `facepalm` | `hitler` | `jail` | `karaba` | `kiss` | `lisa` | `mms` | `notstonk` | `poutine` | `stonk` | `thomas`")
    .setFooter(`Requested By: ${message.author.username}`, `${message.author.displayAvatarURL()}`)
        message.react("🎮");
        message.channel.send(embed);
    }
});
var statuss = ["Bot Games","Best And Fun Bot","BERGO"];
var secound = 8; 
client.on("ready", () =>{
    var timeing = Math.floor(secound*100000000);
    setInterval(function(){
        var ammount = statuss.length;
        var num = Math.floor(Math.random() * ammount);
        client.user.setActivity(statuss[num], {type: 'WATCHING', })
    }, timeing)
});

require('./server')();

///////////////////////////////////////////////////
client.on("message", async message =>{
 if(message.content === prefix + "games"){
 const embed = new Discord.MessageEmbed()
.setAuthor("Commands:",client.user.avatarURL())
.setThumbnail(message.author.avatarURL())
.setColor("BLUE")
.setDescription(`

\`${prefix}fast/${prefix}أسرع\`:
- لعبة السرعة

\`${prefix}fkk/${prefix}فكك\`:
- لعبة تفكيك الكلمات

\`${prefix}puzzle/${prefix}لغز\`:
- لعبة الالغاز

\`${prefix}gm3/${prefix}جمع\`:
- لعبة جمع الحروف

\`${prefix}flags/${prefix}اعلام\`:
- لعبة اعلام الدول

\`${prefix}logo/${prefix}شعار\`:
- لعبة شعارات البرامج

\`${prefix}translate/${prefix}ترجمة\`:
- لعبة ترجمة الكلمات

\`${prefix}capitals/${prefix}عواصم\`:
- لعبة عواصم الدول

\`${prefix}famous/${prefix}مشاهير\`:
- لعبة تخمين المشاهير

`)
.setFooter(`Request By ${message.author.tag}`)
 message.channel.send(embed)
 } 
    

if(message.content === prefix + "fast" || message.content === prefix + "أسرع"){
  const f = [
    "زومبي",
    "قسطنطينة",
    "حبيبي والله",
    "صراع",
    "مشروع",
    "مثلث",
    "رفرف",
    "الشعر",
    "خنق",
    "لقب",
    "إخفاء",
    "بائع",
    "ثؤلول",
    "فينوس",
    "سلالة",
    "برميل",
    "حب",
    "معدن",
    "تمام",
    "كبسولة",
    "الخيل"
  
  ]
  let fast = Math.floor(Math.random() * f.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${f[fast]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(f[fast]);
message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED") 
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});    
}

if(message.content === prefix + "fkk" || message.content === prefix + "فكك"){
  const f = [
    "زومبي",
    "قسطنطينة",
    "حبيبي والله",
    "صراع",
    "مشروع",
    "مثلث",
    "رفرف",
    "الشعر",
    "خنق",
    "لقب",
    "إخفاء",
    "بائع",
    "ثؤلول",
    "فينوس",
    "سلالة",
    "برميل",
    "حب",
    "معدن",
    "تمام",
    "كبسولة",
    "الخيل"
  
  ]
  const fk = [
    "ز و م ب ي",
    "ق س ط ن ط ي ن ة",
    "ح ب ي ب ي و ا ل ل ه",
    "ص ر ا ع",
    "م ش ر و ع",
    "م ث ل ث",
    "ر ف ر ف",
    "ا ل ش ع ر",
    "خ ن ق",
    "ل ق ب",
    "إ خ ف ا ء",
    "ب ا ئ ع",
    "ث ؤ ل و ل",
    "ف ي ن و س",
    "س ل ا ل ة",
    "ب ر م ي ل",
    "ح ب",
    "م ع د ن",
    "ت م ا م",
    "ك ب س و ل ة",
    "ا ل خ ي ل"
  ]
  
  let fkk = Math.floor(Math.random() * f.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${f[fkk]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(fk[fkk]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}

if(message.content === prefix + "gm3" || message.content === prefix + "جمع"){
 
  const g = [
    "ز و م ب ي",
    "ق س ط ن ط ي ن ة",
    "ح ب ي ب ي و ا ل ل ه",
    "ص ر ا ع",
    "م ش ر و ع",
    "م ث ل ث",
    "ر ف ر ف",
    "ا ل ش ع ر",
    "خ ن ق",
    "ل ق ب",
    "إ خ ف ا ء",
    "ب ا ئ ع",
    "ث ؤ ل و ل",
    "ف ي ن و س",
    "س ل ا ل ة",
    "ب ر م ي ل",
    "ح ب",
    "م ع د ن",
    "ت م ا م",
    "ك ب س و ل ة",
    "ا ل خ ي ل"
  ]
  const gm = [
    "زومبي",
    "قسطنطينة",
    "حبيبي والله",
    "صراع",
    "مشروع",
    "مثلث",
    "رفرف",
    "الشعر",
    "خنق",
    "لقب",
    "إخفاء",
    "بائع",
    "ثؤلول",
    "فينوس",
    "سلالة",
    "برميل",
    "حب",
    "معدن",
    "تمام",
    "كبسولة",
    "الخيل"
  
  ] 
  
  let gm3 = Math.floor(Math.random() * g.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${g[gm3]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(gm[gm3]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});

}

if(message.content === prefix + "flags" || message.content === prefix + "اعلام"){
  const a = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Flag_of_Iraq.svg/560px-Flag_of_Iraq.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/560px-Flag_of_Algeria.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/560px-Flag_of_Syria.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/560px-Flag_of_Yemen.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Flag_of_Yemen.svg/560px-Flag_of_Yemen.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/560px-Flag_of_Lebanon.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/560px-Flag_of_Egypt.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/560px-Flag_of_the_United_Arab_Emirates.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/560px-Flag_of_the_People%27s_Republic_of_China.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/560px-Flag_of_France.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/560px-Flag_of_Germany.svg.png", 
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/560px-Flag_of_Russia.svg.png"
  
  ]
  const a3 = [
  "العراق", 
    "الجزائر", 
    "سوريا", 
    "اليمن", 
    "لبنان", 
    "تركيا", 
    "مصر", 
    "الإمارات", 
    "الصين", 
    "فرنسا", 
    "ألمانيا", 
    "روسيا"
  
  ]
  
  let a3l = Math.floor(Math.random() * a.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setImage(a[a3l])
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(a3[a3l]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}

if(message.content === prefix + "puzzle" || message.content === prefix + "لغز"){
  const p = [
  "شيء موجود في السماء إذا أضفت إليه حرفا أصبح في الأرض؟", 
  "ما هو الشيء الذي يوصلك من بيتك إلى عملك دون أن يتحرك؟", 
  "تاجر من التجار إذا اقتلعنا عينه طار. فمن هو؟", 
  "ما هو الشيء الذي ترميه كلما احتجت إليه؟", 
  "يسير بلا رجلين و لا يدخل إلا بالأذنين ما هو؟", 
  "ما هو الشي الذي يكتب و لا يقر؟", 
  "من هو الحيوان الذي يحك إذنه بأنفه؟", 
  "ما هو الشي الذي كلما كثر لدينا غلا و كلما قل رخص؟", 
  "ما هي التي تأكل و لا تشبع؟", 
  "ما هو الشي الذي كلما أخذت منه يكبر ؟", 
  "ما هو الشي الذي يوجد في وسط باريس؟", 
  "ما هو البيت الذي ليس فيه أبواب و لا نوافذ؟", 
  "أين يقع البحر الذي لا يوجد به ماء؟", 
  "ماهو الشي الذي ينبض بلا قلب؟", 
  "أخت خالك و ليست خالتك من تكون ؟"
  ]
  const pu = [
   "نجم", 
  "الطريق", 
  "عطار", 
  "شبكة الصيد", 
  "الصوت", 
  "القلم", 
  "الفيل", 
  "العقل", 
  "النار", 
  "الحفرة", 
  "راء", 
  "بيت الشعر", 
  "في الخريطة", 
  "الساعه", 
  "أمك"
  ]
  
  let puz = Math.floor(Math.random() * p.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${p[puz]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(pu[puz]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}

if(message.content === prefix + "capitals" || message.content === prefix + "عواصم"){
  const c = [
   "تونس", 
  "سنغافورة", 
  "الجزائر", 
  "أمريكا", 
  "الكويت", 
  "البحرين", 
  "الإمارات", 
  "قطر", 
  "ايطاليا", 
  "السويد", 
  "اليابان", 
  "مصر", 
  "ألمانيا", 
  "فرنسا", 
  "العراق", 
  "الصين", 
  "المغرب"
  
  ]
  const ca = [
    "تونس", 
  "سنغافورة", 
  "الجزائر", 
  "واشنطن", 
  "الكويت", 
  "المنامة", 
  "ابو ظبي", 
  "الدوحة", 
  "روما", 
  "ستوكهولم", 
  "طوكيو", 
  "القاهرة", 
  "برلين", 
  "باريس", 
  "بغداد", 
  "بكين", 
  "الرباط"
  ]
  
  let cap = Math.floor(Math.random() * c.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${c[cap]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(ca[cap]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
})
}

if(message.content === prefix + "logo" || message.content === prefix + "شعار"){
  const l = [
  "https://seeklogo.com/images/D/discord-icon-new-2021-logo-09772BF096-seeklogo.com.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png", 
  "https://wiki-signup.com/wp-content/uploads/2019/06/viber-image.jpg", 
  "https://www.reddiquette.com/wp-content/uploads/2020/09/What-Is-The-Reddit-Logo-Called.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/600px-Facebook_Messenger_logo_2020.svg.png", 
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png" 
  ]
  const lo = [
  "ديسكورد", 
  "فيسبوك", 
  "واتساب", 
  "فايبر", 
  "ريدت", 
  "ماسنجر", 
  "انستا"
  ]
  
  let log = Math.floor(Math.random() * l.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setImage(l[log])
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(lo[log]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}

if(message.content === prefix + "famous" || message.content === prefix + "مشاهير"){
  const f = [
  "https://taqeemi.com/storage/subjects/ECmzBt8dE1h5FasVAmwb.jpeg", 
  "https://etbilarabi.com/sites/default/files/styles/article_landing/public/2020-04/image0%20%2855%29.jpeg?itok=BFcsmLUu", 
  "https://pbs.twimg.com/profile_images/1207230360507047936/PVEIcm8X_400x400.jpg", 
  "https://pbs.twimg.com/media/DpON0q5W0AEJjPQ.jpg", 
  "https://pm1.narvii.com/6647/05263d18126bf5f311552429e55802f10090907d_hq.jpg"
  ]
  const fa = [
  "ابو فلة", 
  "بندريتا", 
  "سيد", 
  "اوسمز", 
  "علي المرجاني"
  ]
  
  let fam = Math.floor(Math.random() * f.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setImage(f[fam])
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(fa[fam]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
});
}
if(message.content === prefix + "translate" || message.content === prefix + "ترجمة"){
  const t = [
  "Surgeon", 
  "Father", 
  "Funny", 
  "Scientist", 
  "Programmer", 
  "Welcome", 
  "Egg", 
  "Fire", 
  "ice", 
  "Vest", 
  "Delighted", 
  "Boring", 
  "Accountant", 
  "Carpenter", 
  "Eye", 
  "Wait", 
  "Ear"
  ]
  const tr = [
   "جراح", 
  "والد", 
  "مضحك", 
  "عالم", 
  "مبرمج", 
  "اهلا بك", 
  "بيض", 
  "نار", 
  "جليد", 
  "سترة", 
  "مسرور", 
  "ممل", 
  "محاسب", 
  "نجار", 
  "عين", 
  "أنتظر", 
  "أذن"
  
  ]
  
  let tra = Math.floor(Math.random() * t.length)
  const embed = new Discord.MessageEmbed()
 .setAuthor(client.user.username, client.user.avatarURL())
 .setColor("BLUE")
.setDescription(`\`\`\`${t[tra]}\`\`\``)
.setFooter("You Have 15 Seconds")
.setTimestamp()
  message.channel.send(embed)
 const filter = m => m.content.includes(tr[tra]);
 message.channel.awaitMessages(filter, {
          max: 1,
          time: 15000,
          errors: ['time'],
        }) 

.then((collected) => {
const embed = new Discord.MessageEmbed()
.setColor("GREEN")
.setDescription(`✅ | <@${collected.first().author.id}> The answer is correct`)
message.channel.send(embed)
})
.catch(() => {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(`🕘 | The time is Over`)
message.channel.send(embed)
})
}
})
///////////////////////////////

client.on('message', message => {
    if(message.content === prefix + "servers") {
      let guilds = client.guilds.cache.map(guild => `**server:**\n` + guild.name + ` (`+guild.id+`) ` + `\`` + guild.members.cache.size +`\`** members.**`)
      if(guilds.length > 3000) return message.channel.send(new Discord.MessageEmbed()
      .setTitle('servers')
      .setDescription(guilds, {split: true}))
      if(guilds.length < 3000) return message.channel.send(new Discord.MessageEmbed()
    .setTitle('servers')
    .setDescription(guilds))
}
});
//////////ينشر اكواد ///////

client.on('message', message => {
  if (message.content.startsWith(prefix + 'code')) {
    

    const args = message.content.split(" ").slice(1).join(" ");
    message.delete();
    if (!args) return message.channel.send(`**اكتب الكود**`)
    var sex = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`كود جديد`)
      .setDescription(`\`\`\`js\n${args}\`\`\``)
      .setFooter(`code py ${message.author.tag} `, message.author.avatarURL({ dynamic: true }))
      .setImage("https://images-ext-2.discordapp.net/external/oqWqwiva_P0x4fYGjKNc0EAQhXVxrYCL-A0CqmQizS4/https/share.creavite.co/csRWwDI1mpSFj52p.gif?width=421&height=54")
    message.channel.send(sex).then(sent => {
      sent.react(yes).then(rec => {
        sent.react(no).then(rec2 => {
          sent.channel.send(`@everyone  كود جديد`);

        });
      });
    });
  }
});
////////////////منشن للبريفكس ///////
client.on('message' , saud=> {
if(saud.content === `<@!902272756509450331>`){
saud.channel.send(`My Prefix is ${prefix}`)
}
});
/////////



////////اعطاء الجميع رتبة //////
client.on("message", msg => {
  if(msg.content.startsWith(prefix + "roleall")) {
  if (msg.member.hasPermission("MANAGE_SERVER")) {
    var args = msg.content.split(" ").slice(0).join(" ")
    if(!args) return msg.channel.send("**الرجاء منشن الرتبة**")
    var role1 = msg.mentions.roles.first().id;
    if(!role1)
    {
      var role1 = args[0];
    }

    let role2 = msg.guild.roles.cache.get(`${role1}`);
msg.guild.members.cache.forEach(member => member.roles.add(role2))
msg.reply(`لقد تم أعطاء الجميع رتبة :<@&${role1}> ✅`)

     }
  }
})




/////////
const guildInvites = new Map();
const { MessageEmbed} = require("discord.js")
client.on("inviteCreate",async invite => guildInvites.set(invite.guild.id, await invite.guild.fetchInvites()));
client.on("ready",() =>{
    console.log(`${client.user.tag} is Online`)
    client.guilds.cache.forEach(guild => {
        guild.fetchInvites()
        .then(invites => guildInvites.set(guild.id, invites))
        .catch(err => console.log(err));
    });
});
client.on("guildMemberAdd", async member => {
    const cachedInvites = guildInvites.get(member.guild.id);
    const newInvites = await member.guild.fetchInvites();
    guildInvites.set(member.guild.id, newInvites);
    try{
        const usedInvite = newInvites.find(inv => cachedInvites.get(inv.code).uses < inv.uses);

        const joinChannel = member.guild.channels.cache.find(channel => channel.id === "902296504881020998")///////هون حط ايدي الروم
        if(joinChannel) {
            joinChannel.send(`**⚘ Welcome to ${member.guild.name}\n⚘ welcome** ${member},\n**⚘ We are now** ${member.guild.memberCount}\n**⚘  invited by** ${usedInvite.inviter.username}\n**⚘ you have now** ${usedInvite.uses} **invites**\n**⚘ from link** ${usedInvite.url}`).catch(err => console.log(err))
        }
    }
    catch(err) {console.log(err);}
})

//////////تحديد رتبة تلقائية ////
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();
  const autorole = message.mentions.roles.first();
  if(command === 'set-autorole') {
if(message.channel.type === 'dm') return;
      if(!message.member.hasPermission('MANAGE_ROLES')) return;
      if(!autorole) return message.channel.send("please mentions role after the command")
      message.channel.send(`set autorole to **<@${autorole.id}>**`)
      db.set(`guilds_${message.guild.id}`, autorole.id)
  }
  if(command === 'remove-autorole') {
      if(!message.member.hasPermission('MANAGE_ROLES')) return;
      if(!autorole) return message.channel.send("please mentions role after the command")
      message.channel.send(`removed autorole which was **<@${autorole.id}>**`)
      db.delete(`guilds_${message.guild.id}`, autorole.id)
  }
});
client.on('guildMemberAdd', async(member) => {
  let autoroles = await db.fetch(`guilds_${member.guild.id}`);
if(!message.guild.hasPermission('MANAGE_ROLES')) return;
  if(!autoroles) return;
   if(db.has(`guilds_${member.guild.id}`)) {
      member.roles.add(autoroles)
  }
});
///////
client.on('guildMemberAdd', async(member) => {
    let autoroles = await db.fetch(`guilds_${member.guild.id}`);
     if(db.has(`guilds_${member.guild.id}`)) {
        member.roles.add(autoroles)
    }
});
////////

client.on("message",message=>{
    const request = require("request");
    const cheerio = require('cheerio');

    if(message.content.startsWith (prefix+"tik")){
        var sp = message.content.split(" ")
      request(`http://f15.xp3.biz/tik.php?username=${sp[1]}`, function (error, response, html) {
          if (!error && response.statusCode == 200) {
            var $ = cheerio.load(html);
            const user = message.mentions.users.first() || message.author;
                const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#00FF00')
        .setAuthor(user.username, user.avatarURL)

    .setTitle('TikTok')
    .setDescription($.text())
    .setAuthor(user.username)
    .setTimestamp()

// Code to send embed
message.channel.send(exampleEmbed);
            //message.channel.send($.text());
          }
      });
      }
      
});

///////

client.on("message", message => {
 if(message.channel.id === "947961776128004126") return message.react("<a:blobkiss:949577882404016179>") 
})
client.on("message", message => {
 if(message.channel.id === "945319987596370002") return message.react("<a:blobkiss:949577882404016179>") 
})

/////////antihack//////

let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
client.on('message', message => { 
    if(message.content.startsWith(prefix + "antihack")) { 
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**'); 
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' ); 
        if(!antihack[message.guild.id]) antihack[message.guild.id] = { 
          onoff: 'Off'
        } 
          if(antihack[message.guild.id].onoff === 'Off') return [message.channel.send(`**✅ The AntiHack Is __𝐎𝐍__ !**`), antihack[message.guild.id].onoff = 'On']
          if(antihack[message.guild.id].onoff === 'On') return [message.channel.send(`**⛔ The AntiHack Is __𝐎𝐅𝐅__ !**`), antihack[message.guild.id].onoff = 'Off']
          fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        });
/////////////////////////////// /////

client.on("message", message => {
if(message.author.bot) return;
if(message.channel.id == "902288294740656149") {
message.react("<:kamal_50:898579880046903328>")
} else { return; }
})
////////
client.on('message',badboy => {
  if(badboy.content.startsWith(prefix + "meme")){
    let reply =[
      'https://pm1.narvii.com/7630/ca050d19dc9832424a888f017e6f1c28762d8f17r1-863-540v2_hq.jpg',
      'https://i.pinimg.com/originals/9a/b7/b7/9ab7b7e225f2cc5ee190e8a67c126c66.jpg',
      'https://pbs.twimg.com/media/Ecq6FxYWkAIQ8pE.jpg',
      'https://i.ytimg.com/vi/sm6z50Qoxqg/maxresdefault.jpg',
      'https://64.media.tumblr.com/tumblr_m7mw1u9vb81rr8kmyo1_1280.jpg',
      'https://i.ytimg.com/vi/7lTvO9wxqPw/hqdefault.jpg',
      'https://pm1.narvii.com/7723/6ed7ca7c14b84d2f36a9383ba01751a600e537f8r1-799-624v2_uhq.jpg',
      'https://i.pinimg.com/564x/04/80/c8/0480c863e93e5f83f3eb087c0579961a.jpg',
      'https://i.ytimg.com/vi/rlOT3GCBVjE/hqdefault.jpg',
      'https://i.ytimg.com/vi/C7-hq9Ffcj8/maxresdefault.jpg',
      'https://pbs.twimg.com/media/ESnM7BbXQAAb0w2.jpg',
      'https://i.ytimg.com/vi/0Hp2a-lrm_o/hqdefault.jpg',
      'https://i.ytimg.com/vi/SRrIcSkwYGQ/mqdefault.jpg',

      ];
let an = reply[Math.floor(Math.random() * reply.length)];
badboy.channel.send(`${an}`)
  }
})

////
let rox = '886964097537679410'// ايدي رول
let tei = ' سبب المسح \n كلمة غير ممنوعة \nما تكتبهاش تانى \nDEVELOPED BY BERGO'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("سعر")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tei)
 .setColor('RANDOM'))
 }
});

///////
const InvitesTracker = require
('@androz2091/discord-invites-tracker');
const tracker = InvitesTracker.init(client, {
fetchGuilds: true,
fetchVanity: true,
fetchAuditLogs: true
});
tracker.on('guildMemberAdd', (member, type, invite) => {
const welcomeChannel = member.guild.channels.cache.find((ch) => ch.name === 'welcome');//اسم الروم
if(type === 'normal'){
welcomeChannel.send(`<a:Hello:949578116056117318>   **Welcome to ${member.guild.name}\n<a:blobkiss:949577882404016179>   **Welcome** <@${member.user.id}>\n<a:emoji_13:947812616284307466>  **you are invited by** ${invite.inviter}\n<a:BEN_:949577836396703745>  **you have now** ${invite.uses} **invites**\n<a:c5098bfe52044865b13e66d1f6fefbe0:949651718428303411>  **We are now in the server ${member.guild.memberCount}`);
}
});

////////join 24 h
client.on('message', async message => {
 //////احا وانا عمال اعمل فى كود طلعت الدنيا بسيطة 
  if (!message.guild) return;
//////// Developed by ! 𝐿𝑀 | β𝒆Ř𝑔ό#0843 
  if (message.content === prefix+'join') {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`> ** You don't have perms :x:**`);
     if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(`> ** I don't have perms :x:**`);
  ///////ايوة انا العامل الكود عندك مانع 
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
    } else {
      message.reply('لازم تخش روم صوتى الاول حب 😄 ');
    }
  }
});
/////////////////////////////






///////////////////////////////////////


let cchannel="bergo";//اسم الشات
let message="يسطا بيرجو  : **__تم تشغيل البوت__**";//الرسالة اللي تريدها تتبعت
client.on("ready", () => {
let ch =client.channels.cache.find(c => c.name == cchannel);
if(!ch) return;//ismailmgde
ch.send(message);
});
////////////////
client.on("ready",() =>{
let guild = client.guilds.cache.get('892848814233370695') // ايدي السيرفر
if(!guild) return console.log('I can\'t find the server')
let channel = guild.channels.cache.get('905938916698365962')//ايدي الروم
if(!channel) return console.log('I can\'t the channel') // عشان يتاكد ان الروم موجود
if(channel){
  setInterval(() => {
    channel.setName(guild.memberCount + '[]: Members')
  }, ms("1m"));
}
})

/////////////////////
client.on("message", (message) => {
  const { author, content, guild, member, mentions, channel } = message;
  if (author.bot) return; //أذا كاتب ألأمر كان بوت يتخطاه
  if (!content.startsWith(prefix)) return; // اذا اشتغل الكوماند بغير بريفيكس ما يشتغل .
  if (!guild) return; //أذا كان الأمر بخاص البوت ما يشتغل .
  if (content.startsWith(prefix + "lock")) {
    if (!member.permissions.has("MANAGE_CHANNELS")) return;
    let targetedChannel;
    try {
      let replacedText = message.content.replace(`${prefix}lock `, "");

      targetedChannel = mentions.channels.first() || channel;
      targetedChannel.updateOverwrite(guild.roles.everyone.id, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
      });
      channel.send(`channel/s locked.`);

      if (replacedText.includes("all")) {
        guild.channels.cache.forEach((ch) => {
          ch.updateOverwrite(guild.roles.everyone.id, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false,
          });
        });
      }
    } catch (error) {
      /**/
    }
  }
});
/////////////////////////////////////////////////////////////////
client.on("message", (message) => {
  const { author, content, guild, member, mentions, channel } = message;
  if (author.bot) return; //أذا كاتب ألأمر كان بوت يتخطاه
  if (!content.startsWith(prefix)) return; // اذا اشتغل الكوماند بغير بريفيكس ما يشتغل .
  if (!guild) return; //أذا كان الأمر بخاص البوت ما يشتغل .
  if (content.startsWith(prefix + "open")) {
    if (!member.permissions.has("MANAGE_CHANNELS")) return;
    let targetedChannel;
    try {
      let replacedText = message.content.replace(`${prefix}open `, "");

      targetedChannel = mentions.channels.first() || channel;
      targetedChannel.updateOverwrite(guild.roles.everyone.id, {
        SEND_MESSAGES: true,
        ADD_REACTIONS: true,
      });
      channel.send(`channel/s opened.`);

      if (replacedText.includes("all")) {
        guild.channels.cache.forEach((ch) => {
          ch.updateOverwrite(guild.roles.everyone.id, {
            SEND_MESSAGES: true,
            ADD_REACTIONS: true,
          });
        });
      }
    } catch (error) {
      /**/
    }
  }
});
///////////////////////////
client.on('message', message =>{
    if(message.content === prefix +"hide all"){
    if(message.author.bot || !message.guild) return;
    if(!message.member.hasPermission('MANAGE_CHANNELS')) 
    return message.reply(`**ليس لديك الصلاحية ! 🙄 **`);
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.createOverwrite(everyone, {VIEW_CHANNEL: false}).then(() => {
      });
    })
    message.channel.send(`تم اخفاء جميع الرومات`)
    }
});

/////////
client.on('message', message =>{
    if(message.content === prefix +"show all"){
    if(message.author.bot || !message.guild) return;
    if(!message.member.hasPermission('MANAGE_CHANNELS')) 
    return message.reply(`**ليس لديك الصلاحية ! 🙄 **`);
    let everyone = message.guild.roles.cache.find(hyper => hyper.name === '@everyone');
        message.guild.channels.cache.forEach((channel) => {
            channel.createOverwrite(everyone, {VIEW_CHANNEL: true}).then(() => {
      });
    })
    message.channel.send(`تم اظهار جميع الرومات`)
    }
});
//////////
client.on('message', message => {
  if (message.content.startsWith(prefix + "bans")) {
    if (!message.channel.guild) return;
    message.channel
    message.guild.fetchBans()
      .then(bans => message.channel.send(`**Server Bans Counter:** ${bans.size} `))
      .catch(console.error);
  }
});


////////////////صور انمى عشوائية


client.on('message',badboy => {
  if(badboy.content.startsWith(prefix + "anime")){
    let reply =[
'https://cdn.discordapp.com/attachments/608711487325995008/834489631696355378/20210420_033615.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834486402930442240/b21acd458cc4cadf8be4ce6023230705.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834450408759885874/adfae0ef33fee92f1674b1cb065e0ed0.png',
'https://cdn.discordapp.com/attachments/608711487325995008/834393384378302504/image0.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834411267925213254/20210419_173508.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834393393764368474/image0.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834414185562767400/6145fce101e224596c18d6c6f725dbc5.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834393360960847912/image0.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834393354518659092/image0.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834414184359264346/585d4dae7b0224626824306ffabc5c56.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834393373849944085/image0.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834393350220021800/image0.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834449918017273866/hawl_pp_1.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834393389557612594/image0.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834393412651188264/image0.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834414184958656512/ef3807aa190cf1bb1bf1189d6425c22b.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834393409527611442/image0.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834451866510688266/63f135fd0c9eb8eddc2f8cbf1db54afc.jpg',
'https://cdn.discordapp.com/attachments/608711487325995008/834486360282234950/0aaccfdff44067b5b623bd94cf2f563a.jpg',
];
let an = reply[Math.floor(Math.random() * reply.length)];
badboy.channel.send(`${an}`)
  }
})


/////////////credits/////
const credits = JSON.parse(fs.readFileSync("./credits.json"));///////////! , X_KillérYT - 💔#2571

////////////////////

const log = JSON.parse(fs.readFileSync("./log.json", "utf8"));
 
 
client.on("message", message => {
  if (!message.channel.guild) return;
  let room = message.content.split(" ").slice(1);
  let findroom = message.guild.channels.cache.find(r => r.name == room);
  if (message.content.startsWith(prefix + "setlog")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!room) return message.channel.send("Please Type The Channel Name");
    if (!findroom)
      return message.channel.send("Please Type The Log Channel Name");
    let embed = new Discord.MessageEmbed()
      .setTitle("**Done The Log Code Has Been Setup**")
      .addField("Channel:", `${room}`)
      .addField("Requested By:", `${message.author}`)
      .setThumbnail(message.author.avatarURL())
      .setFooter(`${client.user.username}`);
    message.channel.send(embed);
    log[message.guild.id] = {
      channel: room,
      onoff: "On"
    };
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err) console.error(err);
    });
  }
});
client.on("message", message => {
  if (message.content.startsWith(prefix + "toggle-log")) {
    if (!message.channel.guild)
      return message.reply("**This Command Only For Servers**");
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**Sorry But You Dont Have Permission** `MANAGE_GUILD`"
      );
    if (!log[message.guild.id])
      log[message.guild.id] = {
        onoff: "Off"
      };
    if (log[message.guild.id].onoff === "Off")
      return [
        message.channel.send(`**The log Is __𝐎𝐍__ !**`),
        (log[message.guild.id].onoff = "On")
      ];
    if (log[message.guild.id].onoff === "On")
      return [
        message.channel.send(`**The log Is __𝐎𝐅𝐅__ !**`),
        (log[message.guild.id].onoff = "Off")
      ];
    fs.writeFile("./log.json", JSON.stringify(log), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
 
client.on("messageDelete", message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[message.guild.id])
    log[message.guild.id] = {
      onoff: "Off"
    };
  if (log[message.guild.id].onoff === "Off") return;
  var logChannel = message.guild.channels.cache.find(
    c => c.name === `${log[message.guild.id].channel}`
  );
  if (!logChannel) return;
 
  let messageDelete = new Discord.MessageEmbed()
    .setTitle("**[MESSAGE DELETE]**")
    .setColor("RED")
    .setThumbnail(message.author.avatarURL())
    .setDescription(
      `**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``
    )
    .setTimestamp()
    .setFooter(message.guild.name, message.guild.iconURL());
 
  logChannel.send(messageDelete);
});
client.on("messageUpdate", (oldMessage, newMessage) => {
  if (oldMessage.author.bot) return;
  if (!oldMessage.channel.type === "dm") return;
  if (!oldMessage.guild.member(client.user).hasPermission("EMBED_LINKS"))
    return;
  if (!oldMessage.guild.member(client.user).hasPermission("MANAGE_MESSAGES"))
    return;
  if (!log[oldMessage.guild.id])
    log[oldMessage.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMessage.guild.id].onoff === "Off") return;
  var logChannel = oldMessage.guild.channels.cache.find(
    c => c.name === `${log[oldMessage.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (oldMessage.content.startsWith("https://")) return;
 
  let messageUpdate = new Discord.MessageEmbed()
    .setTitle("**[MESSAGE EDIT]**")
    .setThumbnail(oldMessage.author.avatarURL())
    .setColor("BLUE")
    .setDescription(
      `**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``
    )
    .setTimestamp()
    .setFooter(oldMessage.guild.name, oldMessage.guild.iconURL());
 
  logChannel.send(messageUpdate);
});
 
client.on("roleCreate", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.cache.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;
 
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    let roleCreate = new Discord.MessageEmbed()
      .setTitle("**[ROLE CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL());
 
    logChannel.send(roleCreate);
  });
});
 
client.on("roleDelete", role => {
  if (!role.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!role.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[role.guild.id])
    log[role.guild.id] = {
      onoff: "Off"
    };
  if (log[role.guild.id].onoff === "Off") return;
  var logChannel = role.guild.channels.cache.find(
    c => c.name === `${log[role.guild.id].channel}`
  );
  if (!logChannel) return;
 
  role.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    let roleDelete = new Discord.MessageEmbed()
      .setTitle("**[ROLE DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(role.guild.name, role.guild.iconURL());
 
    logChannel.send(roleDelete);
  });
});
 
client.on("roleUpdate", (oldRole, newRole) => {
  if (!oldRole.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!oldRole.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[oldRole.guild.id])
    log[oldRole.guild.id] = {
      onoff: "Off"
    };
  if (log[oldRole.guild.id].onoff === "Off") return;
  var logChannel = oldRole.guild.channels.cache.find(
    c => c.name === `${log[oldRole.guild.id].channel}`
  );
  if (!logChannel) return;
 
  oldRole.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (oldRole.name !== newRole.name) {
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateName = new Discord.MessageEmbed()
        .setTitle("**[ROLE NAME UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL());
 
      logChannel.send(roleUpdateName);
    }
    if (oldRole.hexColor !== newRole.hexColor) {
      if (oldRole.hexColor === "#000000") {
        var oldColor = "`Default`";
      } else {
        var oldColor = oldRole.hexColor;
      }
      if (newRole.hexColor === "#000000") {
        var newColor = "`Default`";
      } else {
        var newColor = newRole.hexColor;
      }
      if (log[oldRole.guild.id].onoff === "Off") return;
      let roleUpdateColor = new Discord.MessageEmbed()
        .setTitle("**[ROLE COLOR UPDATE]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldRole.guild.name, oldRole.guild.iconURL());
 
      logChannel.send(roleUpdateColor);
    }
  });
});
 
client.on("channelCreate", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.cache.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
 
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    let channelCreate = new Discord.MessageEmbed()
      .setTitle("**[CHANNEL CREATE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("GREEN")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL());
 
    logChannel.send(channelCreate);
  });
});
 
client.on("channelDelete", channel => {
  if (!channel.guild) return;
  if (!channel.guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!channel.guild.member(client.user).hasPermission("VIEW_AUDIT_LOG"))
    return;
  if (!log[channel.guild.id])
    log[channel.guild.id] = {
      onoff: "Off"
    };
  if (log[channel.guild.id].onoff === "Off") return;
  var logChannel = channel.guild.channels.cache.find(
    c => c.name === `${log[channel.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (channel.type === "text") {
    var roomType = "Text";
  } else if (channel.type === "voice") {
    var roomType = "Voice";
  } else if (channel.type === "category") {
    var roomType = "Category";
  }
 
  channel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    let channelDelete = new Discord.MessageEmbed()
      .setTitle("**[CHANNEL DELETE]**")
      .setThumbnail(userAvatar)
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setColor("RED")
      .setTimestamp()
      .setFooter(channel.guild.name, channel.guild.iconURL());
 
    logChannel.send(channelDelete);
  });
});
 
client.on("channelUpdate", (oldChannel, newChannel) => {
  if (!oldChannel.guild) return;
  if (!log[oldChannel.guild.id])
    log[oldChannel.guild.id] = {
      onoff: "Off"
    };
  if (log[oldChannel.guild.id].onoff === "Off") return;
  var logChannel = oldChannel.guild.channels.cache.find(
    c => c.name === `${log[oldChannel.guild.id].channel}`
  );
  if (!logChannel) return;
 
  if (oldChannel.type === "text") {
    var channelType = "Text";
  } else if (oldChannel.type === "voice") {
    var channelType = "Voice";
  } else if (oldChannel.type === "category") {
    var channelType = "Category";
  }
 
  oldChannel.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (oldChannel.name !== newChannel.name) {
      let newName = new Discord.MessageEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL());
 
      logChannel.send(newName);
    }
    if (oldChannel.topic !== newChannel.topic) {
      if (log[oldChannel.guild.id].onoff === "Off") return;
      let newTopic = new Discord.MessageEmbed()
        .setTitle("**[CHANNEL EDIT]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic ||
          "NULL"}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic ||
          "NULL"}\`\`\`\n**Channel:** ${oldChannel} (ID: ${
          oldChannel.id
          })\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldChannel.guild.name, oldChannel.guild.iconURL());
 
      logChannel.send(newTopic);
    }
  });
});
 
client.on("guildBanAdd", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.cache.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;
 
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (userID === client.user.id) return;
 
    let banInfo = new Discord.MessageEmbed()
      .setTitle("**[BANNED]**")
      .setThumbnail(userAvatar)
      .setColor("DARK_RED")
      .setDescription(
        `**\n**:airplane: Successfully \`\`BANNED\`\` **${user.username}** From the server!\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL());
 
    logChannel.send(banInfo);
  });
});
 
client.on("guildBanRemove", (guild, user) => {
  if (!guild.member(client.user).hasPermission("EMBED_LINKS")) return;
  if (!guild.member(client.user).hasPermission("VIEW_AUDIT_LOG")) return;
  if (!log[guild.id])
    log[guild.id] = {
      onoff: "Off"
    };
  if (log[guild.id].onoff === "Off") return;
  var logChannel = guild.channels.cache.find(
    c => c.name === `${log[guild.id].channel}`
  );
  if (!logChannel) return;
 
  guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
 
    if (userID === client.user.id) return;
 
    let unBanInfo = new Discord.MessageEmbed()
      .setTitle("**[UNBANNED]**")
      .setThumbnail(userAvatar)
      .setColor("GREEN")
      .setDescription(
        `**\n**:unlock: Successfully \`\`UNBANNED\`\` **${user.username}** From the server\n\n**User:** <@${user.id}> (ID: ${user.id})\n**By:** <@${userID}> (ID: ${userID})`
      )
      .setTimestamp()
      .setFooter(guild.name, guild.iconURL());
 
    logChannel.send(unBanInfo);
  });
});
 
client.on("guildMemberUpdate", (oldMember, newMember) => {
  if (!oldMember.guild) return;
  if (!log[oldMember.guild.id])
    log[oldMember.guild.id] = {
      onoff: "Off"
    };
  if (log[oldMember.guild.id].onoff === "Off") return;
  var logChannel = oldMember.guild.channels.cache.find(
    c => c.name === `${log[(oldMember, newMember.guild.id)].channel}`
  );
  if (!logChannel) return;
 
  oldMember.guild.fetchAuditLogs().then(logs => {
    var userID = logs.entries.first().executor.id;
    var userAvatar = logs.entries.first().executor.avatarURL();
    var userTag = logs.entries.first().executor.tag;
 
    if (oldMember.nickname !== newMember.nickname) {
      if (oldMember.nickname === null) {
        var oldNM = "`اسمه الاصلي`";
      } else {
        var oldNM = oldMember.nickname;
      }
      if (newMember.nickname === null) {
        var newNM = "`اسمه الاصلي`";
      } else {
        var newNM = newMember.nickname;
      }
 
      let updateNickname = new Discord.MessageEmbed()
        .setTitle("**[UPDATE MEMBER NICKNAME]**")
        .setThumbnail(userAvatar)
        .setColor("BLUE")
        .setDescription(
          `**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(oldMember.guild.name, oldMember.guild.iconURL());
 
      logChannel.send(updateNickname);
    }
    if (oldMember.roles.cache.size < newMember.roles.cache.size) {
      let role = newMember.roles
        .filter(r => !oldMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[oldMember.guild.id].onoff === "Off") return;
      let roleAdded = new Discord.MessageEmbed()
        .setTitle("**[ADDED ROLE TO MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL())
        .setColor("GREEN")
        .setDescription(
          `**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(roleAdded);
    }
    if (oldMember.roles.cache.size > newMember.roles.cache.size) {
      let role = oldMember.roles
        .filter(r => !newMember.roles.has(r.id))
        .first();
      if (!log[oldMember.guild.id])
        log[oldMember.guild.id] = {
          onoff: "Off"
        };
      if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
      let roleRemoved = new Discord.MessageEmbed()
        .setTitle("**[REMOVED ROLE FROM MEMBER]**")
        .setThumbnail(oldMember.guild.iconURL())
        .setColor("RED")
        .setDescription(
          `**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`
        )
        .setTimestamp()
        .setFooter(userTag, userAvatar);
 
      logChannel.send(roleRemoved);
    }
  });
  if (oldMember.guild.owner.id !== newMember.guild.owner.id) {
    if (!log[oldMember.guild.id])
      log[oldMember.guild.id] = {
        onoff: "Off"
      };
    if (log[(oldMember, newMember.guild.id)].onoff === "Off") return;
    let newOwner = new Discord.MessageEmbed()
      .setTitle("**[UPDATE GUILD OWNER]**")
      .setThumbnail(oldMember.guild.iconURL())
      .setColor("GREEN")
      .setDescription(
        `**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`
      )
      .setTimestamp()
      .setFooter(oldMember.guild.name, oldMember.guild.iconURL());
 
    logChannel.send(newOwner);
  }
});

/////////////




//////
 let rroomid = "922914734381084713"; 
client.on("message", message => {/////bergo 
  if(message.content.startsWith(prefix + "la ")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = client.channels.cache.get(rroomid);
            if(channel) {
            message.channel.send(`**Loading | جاري التحميل **`).then( (m) =>{
              m.edit(`**<@${message.author.id}> قول انت عاوز تكتب ايه **`)
              m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();//////المفروض يرد
m.edit(`**طيب عرسله اهو يسطى للشات **`).then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.MessageEmbed()
                         
                          .setColor('RANDOM')
                        .setTitle(`\`Apply Administartion\` \n رد عليا ارجوك , \n > ID: ${message.author.id}`)
                        .addField('> \`الكلام:\`', ` ** ${name} ** ` , true)
         
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                  })
                })
                })
              }
            }
          })

///////

client.on('message', msg => {
    if (msg.content === prefix + 'createcolors') {
        msg.guild.roles.create({
            data: {
                name: "1",
                color: "#FFB6C1",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "2",
                color: "#FFC0CB",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "3",
                color: "#FF69B4",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "4",
                color: "#FF1493",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "5",
                color: "#DB7093",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "6",
                color: "#C71585",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "7",
                color: "#E6E6FA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "8",
                color: "#D8BFD8",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "8",
                color: "#DDA0DD",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "9",
                color: "#DA70D6",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "10",
                color: "#EE82EE",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "11",
                color: "#FF00FF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "12",
                color: "#BA55D3",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "13",
                color: "#9932CC",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "14",
                color: "#9400D3",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "15",
                color: "#8A2BE2",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "16",
                color: "#8B008B",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "17",
                color: "#800080",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "18",
                color: "#9370DB",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "19",
                color: "#7B68EE",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "20",
                color: "#6A5ACD",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "21",
                color: "#483D8B",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "22",
                color: "#663399",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "23",
                color: "#4B0082",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "24",
                color: "#FFA07A",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "25",
                color: "#FA8072",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "26",
                color: "#E9967A",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "27",
                color: "#F08080",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "28",
                color: "#CD5C5C",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "29",
                color: "#DC143C",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "30",
                color: "	#FF0000",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "31",
                color: "#B22222",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "32",
                color: "#8B0000",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "33",
                color: "#FFA500",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "34",
                color: "#FF8C00",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "35",
                color: "#FF7F50",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "36",
                color: "#FF6347",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "37",
                color: "#FF4500",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "38",
                color: "#FFD700",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "39",
                color: "#FFFFE0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "40",
                color: "#FFFACD",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "41",
                color: "#FAFAD2",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "42",
                color: "	#FFEFD5",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "43",
                color: "#FFE4B5",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "44",
                color: "#FFDAB9",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "45",
                color: "#EEE8AA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "46",
                color: "#F0E68C",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "47",
                color: "#BDB76B",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "48",
                color: "#ADFF2F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "49",
                color: "#7FFF00",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "50",
                color: "#7CFC00",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "51",
                color: "#00FF00",
                permissions: []
            }
        })

        msg.guild.roles.create({
            data: {
                name: "52",
                color: "#32CD32",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "53",
                color: "#98FB98",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "54",
                color: "#90EE90",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "55",
                color: "#00FA9A",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "56",
                color: "#00FF7F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "57",
                color: "#3CB371",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "58",
                color: "#2E8B57",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "59",
                color: "#2E8B57",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "60",
                color: "#008000",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "61",
                color: "#006400",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "62",
                color: "#9ACD32",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "63",
                color: "#6B8E23",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "64",
                color: "#556B2F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "65",
                color: "#66CDAA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "66",
                color: "#8FBC8F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "67",
                color: "#20B2AA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "68",
                color: "#008B8B",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "69",
                color: "#008080",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "70",
                color: "#00FFFF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "71",
                color: "#E0FFFF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "72",
                color: "#AFEEEE",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "73",
                color: "#7FFFD4",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "74",
                color: "#40E0D0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "75",
                color: "#48D1CC",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "76",
                color: "#00CED1",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "77",
                color: "#5F9EA0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "78",
                color: "#4682B4",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "79",
                color: "#B0C4DE",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "80",
                color: "#ADD8E6",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "81",
                color: "#B0E0E6",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "82",
                color: "#87CEFA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "83",
                color: "#87CEEB",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "84",
                color: "#6495ED",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "85",
                color: "#00BFFF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "86",
                color: "#1E90FF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "87",
                color: "#4169E1",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "88",
                color: "#0000FF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "89",
                color: "#0000CD",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "90",
                color: "#00008B",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "91",
                color: "#000080",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "92",
                color: "#191970",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "93",
                color: "#FFF8DC",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "94",
                color: "#FFEBCD",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "95",
                color: "#FFE4C4",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "96",
                color: "#FFDEAD",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "97",
                color: "#F5DEB3",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "98",
                color: "#DEB887",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "99",
                color: "#D2B48C",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "100",
                color: "#BC8F8F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "101",
                color: "#F4A460",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "102",
                color: "#DAA520",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "103",
                color: "#B8860B",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "104",
                color: "#CD853F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "105",
                color: "#D2691E",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "106",
                color: "#808000",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "107",
                color: "#8B4513",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "108",
                color: "#A0522D",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "109",
                color: "#A52A2A",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "110",
                color: "#800000",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "111",
                color: "#FFFFFF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "112",
                color: "#FFFAFA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "113",
                color: "#F0FFF0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "114",
                color: "#F5FFFA",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "115",
                color: "#F0FFFF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "116",
                color: "#F0F8FF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "117",
                color: "#F8F8FF",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "118",
                color: "#F5F5F5",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "119",
                color: "#FFF5EE",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "120",
                color: "#F5F5DC",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "121",
                color: "#FDF5E6",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "122",
                color: "#FFFAF0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "123",
                color: "#FFFFF0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "124",
                color: "#FAEBD7",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "125",
                color: "#FAF0E6",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "126",
                color: "#FFF0F5",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "127",
                color: "#FFE4E1",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "128",
                color: "#DCDCDC",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "129",
                color: "#D3D3D3",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "130",
                color: "#C0C0C0",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "131",
                color: "#f7f7f7",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "132",
                color: "#b2b2b2",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "133",
                color: "#6f6c6c",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "134",
                color: "#4d4646",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "135",
                color: "#4c4c4c",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "136",
                color: "#2F4F4F",
                permissions: []
            }
        })
        msg.guild.roles.create({
            data: {
                name: "137",
                color: "#040000",
                permissions: []
            }
        })
        const embed1 = new Discord.MessageEmbed()
            .setTitle("🕑 **Preparing your server color rules ...**")
            .setFooter(`Request By ${msg.author.username}`)
            .setTimestamp()
        const embed2 = new Discord.MessageEmbed()
            .setTitle("✅ **Your colors is ready**")
            .setFooter(`Request By ${msg.author.username}`)
            .setTimestamp()
        msg.channel.send(embed1).then(m => {
            setTimeout(() => {
                m.delete()
                m.channel.send(embed2)
            }, 30000)
        })
    }
})
    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "1");
        
        role.delete()
        }
    
    });
    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "2");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "3");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "4");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "5");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "6");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "7");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "8");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "9");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "10");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "11");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "12");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "13");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "14");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "15");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "16");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "17");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "18");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "19");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "20");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "21");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "22");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "23");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "24");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "25");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "26");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "27");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "28");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "29");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "30");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "31");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "32");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "33");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "34");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "35");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "36");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "37");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "38");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "39");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "40");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "41");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "42");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "43");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "44");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "45");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "46");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "47");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "48");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "49");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "50");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "51");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "52");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "53");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "54");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "55");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "56");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "57");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "58");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "59");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "60");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "61");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "62");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "63");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "64");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "65");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "66");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "67");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "68");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "69");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "70");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "71");
        
        role.delete()
        }
    
    });    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "72");
        
        role.delete()
        }
    
    });
client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "73");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "74");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "75");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "76");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "77");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "78");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "79");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "80");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "81");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "82");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "83");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "84");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "85");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "86");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "87");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "88");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "89");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "90");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "91");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "92");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "93");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "94");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "95");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "96");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "97");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "98");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "99");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "100");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "101");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
      message.channel.send("جارى مسح جميع الالوان <a:1656_idle:908344328538169396> ")
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "102");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "103");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "104");
        
        role.delete()
        }
    
    });
client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "105");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "106");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "107");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "108");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "109");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "110");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "111");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "112");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "113");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "114");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "115");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "116");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "117");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "118");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "119");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "120");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "121");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "122");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "123");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "124");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "125");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "126");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "127");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "128");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "129");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "130");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "131");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "132");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "133");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "134");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "135");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "136");
        
        role.delete()
        }
    
    });client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "137");
        
        role.delete()
        }
    
    });
client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "8");
        
        role.delete()
        }
    
    });
    client.on('message', async message => {
        
            let args = message.content.split(' ').slice(1);
    if (message.content.startsWith("!deletecolors")) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return
        let role = message.guild.roles.cache.find((role) => role.name == "0");
        
        role.delete()
        }
    
    });
////////
client.on('message', russi => {
  if(russi.content.startsWith(prefix + "vote")){
    if (russi.author.bot || !russi.guild) return russi.reply("this command for server only") 

let args = russi.content.split(" ").slice(1).join(" ");
if(!args) return russi.reply("**Type your vote**")
    var embed = new Discord.MessageEmbed()
    .setTitle(`by ${russi.author.username}`)
    .setDescription(`${args}`)
    .setThumbnail(client.user.avatarURL())
    .setColor("3a6bff")
    .setFooter(`Requested | ${russi.author.tag}`, russi.author.avatarURL())
   .setTimestamp()
   russi.channel.send(embed).then(russi => {
  russi.react(":white_check_mark:")
  russi.react(":no_entry_sign:")
 })
  }
})

////
client.on('message', (x3mk) => {
    if(x3mk.content === (prefix + "avatar serverr") 
    || x3mk.content === (prefix + "sava")) {
          var args = x3mk.content.split(" ").slice(1);

  var _0xa651=["\x70\x6E\x67","\x69\x63\x6F\x6E\x55\x52\x4C","\x67\x75\x69\x6C\x64"];let s=x3mk[_0xa651[2]][_0xa651[1]]({dynamic:true,size:4096,format:`${_0xa651[0]}`})

let x3mkem = new Discord.MessageEmbed()
.setColor(color)
.setTitle(`**${x3mk.guild.name}**`)
.setDescription(`[**Avatar Link**](${s})`)
.setImage(s)
  .setFooter(`Requested by: ${x3mk.author.username}#${x3mk.author.discriminator}`, x3mk.member.user.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
x3mk.channel.send(x3mkem)
    };
})

////
client.on("message", async(msg) => {
    if (msg.content.startsWith(prefix + "create-design-1")) {
        if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(new Discord.MessageEmbed().setTitle("❌ **You Need `ADMINISTRATOR` Permission To Use This Command!**"))
        if (!msg.guild.me.hasPermission('ADMINISTRATOR')) return msg.channel.send(new Discord.MessageEmbed().setTitle("❌ **I Can't Do Any Thing In This Server Becuse I Don't Have `ADMINISTRATOR` Permission!**"))
        msg.guild.channels.create(`✽⁦『 INFO 』✽`, { type: "category" }).then(cc1 => {
                msg.guild.channels.create('⌠✅⌡・verify', { type: 'text' }).then(ch1 => {
                        ch1.setParent(cc1.id)
                        console.log(`added ${ch1.name}`)
                    })
                    .catch(console.error)
                msg.guild.channels.create('⌠🖤⌡・Welcome', { type: 'text' }).then(ch2 => {
                        ch2.setParent(cc1.id)
                        console.log(`added ${ch2.name}`)
                    })
                    .catch(console.error)
                msg.guild.channels.create('⌠📜⌡・Rules', { type: 'text' }).then(ch3 => {
                        ch3.setParent(cc1.id)
                        console.log(`added ${ch3.name}`)
                    })
                    .catch(console.error)
                msg.guild.channels.create('⌠📰⌡・News', { type: 'text' }).then(ch4 => {
                        ch4.setParent(cc1.id)
                        console.log(`added ${ch4.name}`)
                    })
                    .catch(console.error)
                msg.guild.channels.create('⌠🎉⌡・giveaways', { type: 'text' }).then(ch5 => {
                        ch5.setParent(cc1.id)
                        console.log(`added ${ch5.name}`)
                    })
                    .catch(console.error)
                msg.guild.channels.create('⌠🎊⌡・giveaways', { type: 'voice' }).then(ch6 => {
                        ch6.setParent(cc1.id)
                        console.log(`added ${ch6.name}`)
                    })
                    .catch(console.error)
            })
            .catch(console.error)
        msg.guild.channels.create(`✽⁦『 General 』✽`, { type: "category" }).then(cc2 => {
            msg.guild.channels.create('⌠🌏⌡・public-chat', { type: 'text' }).then(ch1 => {
                ch1.setParent(cc2.id)
                console.log(`add ${ch1.name}`)
            })

            .catch(console.error)
            msg.guild.channels.create('⌠🤖⌡・commands', { type: 'text' }).then(ch2 => {
                ch2.setParent(cc2.id)
                console.log(`add ${ch2.name}`)
            })

            .catch(console.error)

            msg.guild.channels.create('⌠🎮⌡・games', { type: 'text' }).then(ch4 => {
                ch4.setParent(cc2.id)
                console.log(`add ${ch4.name}`)
            })

            .catch(console.error)
            msg.guild.channels.create('⌠🤡⌡・photos', { type: 'text' }).then(ch3 => {
                ch3.setParent(cc2.id)
                console.log(`add ${ch3.name}`)
            })

            .catch(console.error)
            msg.guild.channels.create('⌠📡⌡・Voice 1', { type: 'voice' }).then(ch5 => {
                ch5.setParent(cc2.id)
                console.log(`add ${ch5.name}`)
            })

            .catch(console.error)
            msg.guild.channels.create('⌠📡⌡・Voice 2', { type: 'voice' }).then(ch6 => {
                ch6.setParent(cc2.id)
                console.log(`add ${ch6.name}`)
            })

            .catch(console.error)
            msg.guild.channels.create('⌠📡⌡・Voice 3', { type: 'voice' }).then(ch7 => {
                    ch7.setParent(cc2.id)
                    console.log(`add ${ch7.name}`)
                })
                .catch(console.error)
        })
        msg.guild.roles.create({
                data: {
                    name: "言・Permissions",

                    permissions: [
                        "KICK_MEMBERS",
                        "BAN_MEMBERS",
                        "MANAGE_CHANNELS",
                        "ADD_REACTIONS",

                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "SEND_TTS_MESSAGES",
                        "MANAGE_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "READ_MESSAGE_HISTORY",
                        "MENTION_EVERYONE",
                        "CONNECT",
                        "SPEAK",
                        "MUTE_MEMBERS",
                        "DEAFEN_MEMBERS",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME",
                        "MANAGE_NICKNAMES",
                        "ADMINISTRATOR"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "言・ OwnerShip",
                    color: "#fff",

                    permissions: ["ADMINISTRATOR"]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "✽・ProProtection",

                    permissions: ["ADMINISTRATOR"]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "✽・ErumBot",

                    permissions: ["ADMINISTRATOR"]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "✽・ProBot",

                    permissions: ["ADMINISTRATOR"]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Founder",
                    color: "#001",

                    permissions: [

                        "KICK_MEMBERS",
                        "BAN_MEMBERS",
                        "MANAGE_CHANNELS",
                        "ADD_REACTIONS",

                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "SEND_TTS_MESSAGES",
                        "MANAGE_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "READ_MESSAGE_HISTORY",
                        "MENTION_EVERYONE",
                        "CONNECT",
                        "SPEAK",
                        "MUTE_MEMBERS",
                        "DEAFEN_MEMBERS",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME",
                        "MANAGE_NICKNAMES"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Owner",
                    color: "#000",

                    permissions: [

                        "KICK_MEMBERS",
                        "ADD_REACTIONS",
                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "MANAGE_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CONNECT",
                        "SPEAK",
                        "MUTE_MEMBERS",
                        "DEAFEN_MEMBERS",
                        "READ_MESSAGE_HISTORY",
                        "MENTION_EVERYONE",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME",
                        "MANAGE_NICKNAMES"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Leader",
                    color: "#000",
                    permissions: [
                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "MANAGE_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CONNECT",
                        "SPEAK",
                        "MUTE_MEMBERS",
                        "DEAFEN_MEMBERS",
                        "READ_MESSAGE_HISTORY",
                        "MENTION_EVERYONE",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Colonel",
                    color: "#000",

                    permissions: [
                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "MANAGE_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CONNECT",
                        "SPEAK",
                        "MUTE_MEMBERS",
                        "READ_MESSAGE_HISTORY",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Assistant",
                    color: "#000",

                    permissions: [
                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "MANAGE_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CONNECT",
                        "SPEAK",
                        "MUTE_MEMBERS",
                        "READ_MESSAGE_HISTORY",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Support",
                    color: "#000",

                    permissions: [
                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "MANAGE_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CONNECT",
                        "SPEAK",
                        "MUTE_MEMBERS",
                        "READ_MESSAGE_HISTORY",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Staff",
                    color: "#000",

                    permissions: [
                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "MANAGE_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CONNECT",
                        "SPEAK",
                        "MUTE_MEMBERS",
                        "READ_MESSAGE_HISTORY",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Developer",
                    color: "#0066ff",

                    permissions: [
                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CONNECT",
                        "SPEAK",
                        "READ_MESSAGE_HISTORY",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME",
                        "ADD_REACTIONS"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Booster",
                    color: "#f40df4",

                    permissions: [
                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CONNECT",
                        "SPEAK",
                        "READ_MESSAGE_HISTORY",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME",
                        "ADD_REACTIONS"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Active",
                    color: "#50d7cf",
                    permissions: []
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Youtuber",
                    color: "RED",

                    permissions: [
                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CONNECT",
                        "SPEAK",
                        "READ_MESSAGE_HISTORY",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME",
                        "ADD_REACTIONS"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Prime",
                    color: "BLUE",
                    permissions: []
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Frindes",

                    permissions: [
                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CONNECT",
                        "SPEAK",
                        "READ_MESSAGE_HISTORY",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME",
                        "ADD_REACTIONS"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Vip +",

                    permissions: [
                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CONNECT",
                        "SPEAK",
                        "READ_MESSAGE_HISTORY",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME",
                        "ADD_REACTIONS"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Vip",

                    permissions: [
                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CONNECT",
                        "SPEAK",
                        "READ_MESSAGE_HISTORY",
                        "CHANGE_NICKNAME",
                        "ADD_REACTIONS"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Active Member",
                    permissions: [
                        "VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "EMBED_LINKS",
                        "ATTACH_FILES",
                        "CONNECT",
                        "SPEAK",
                        "READ_MESSAGE_HISTORY",
                        "MOVE_MEMBERS",

                        "CHANGE_NICKNAME",
                        "ADD_REACTIONS"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
                data: {
                    name: "⌥ Member",
                    permissions: ["VIEW_CHANNEL",

                        "SEND_MESSAGES",
                        "CONNECT",
                        "SPEAK",
                        "READ_MESSAGE_HISTORY"
                    ]
                }
            })
            .catch(console.error)
        msg.guild.roles.create({
            data: {
                name: "Muted",
                permissions: []
            }
        })
        const embed1 = new Discord.MessageEmbed()
            .setTitle("🕑 **Preparing your server ...**")
            .setFooter(`Request By ${msg.author.username}`)
            .setTimestamp()
        const embed2 = new Discord.MessageEmbed()
            .setTitle("✅ **Your server is configured**")
            .setFooter(`Request By ${msg.author.username}`)
            .setTimestamp()
        msg.channel.send(embed1).then(m => {
            setTimeout(() => {
                m.delete()
                m.channel.send(embed2)
            }, 6000)
        })
    }
})

////////
const shorten = require('isgd');
client.on('message', shark => {

  if (shark.content.startsWith(prefix + 'short')) {
    if (!shark.channel.guild) return;
    shark.channel
    if (!shark.member.hasPermission('ADMINISTRATOR'))
      return shark.channel.send('**ليس لديك صلاحيات**');
    let args = shark.content.split(" ").slice(1);
    if (!args[0]) return shark.channel.send('**Usage**: ' + prefix + 'short <link>')
    if (!args[1]) {
      shorten.shorten(args[0], function(res) {
        if (res.startsWith('Error:')) return shark.channel.send('**Usage**: ' + prefix + 'short <link>');
        shark.channel.send(`اختصار الرابط:**${res}**`);
      })
    } else {
      shorten.custom(args[0], args[1], function(res) {
        if (res.startsWith('Error:')) return shark.channel.send(`اختصار الرابط:**${res}**`);
        shark.channel.send(`اختصار الرابط:**${res}**`);
      })
    }
  }
});

//////templets
client.on("message", (msg) => {
    if (msg.content.startsWith(prefix + "templets")) {

        if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send(new Discord.MessageEmbed().setTitle("❌ **You Need `ADMINISTRATOR` Permission To Use This Command!**"))
        const embed = new Discord.MessageEmbed().setAuthor("houyoui").setDescription(`**
                            言・templat- => [Click Here](https://discord.new/tXYH7N8GVZNk)
                            言・templat- => [Click Here](https://discord.com/template/dtRS3BX5NDJJ)
                            言・templat- => [Click Here](https://discord.com/template/6xQ6u99r3mHG)
                            言・templat- => [Click Here](https://discord.com/template/Qn5yGt8jqS9F)
                            言・templat- => [Click Here](https://discord.com/template/Zvm5gN7MQJ67)
                            言・templat- => [Click Here](https://discord.com/template/zvwgFDpz4S8d)
                            言・templat- => [Click Here](https://discord.com/template/Wb9uk8x4mXDT)
                            言・templat- => [Click Here](https://discord.com/template/FHRW9yffW5PM)
                            **`)
        msg.channel.send(embed)
        const embed2 = new Discord.MessageEmbed().setAuthor("houyoui").setDescription(`**
                            言・templat- => [Click Here](https://discord.com/template/99eVNbZgKTyM)
                            言・templat- => [Click Here](https://discord.com/template/djFpQCQEKcNF)
                            言・templat- => [Click Here](https://discord.com/template/UYrhcw4BNf4a)
                            言・templat- => [Click Here](https://discord.com/template/Wx8CkEV6b7BN)
                            言・templat- => [Click Here](https://discord.com/template/8Pq7aTucMTd6)
                            言・templat- => [Click Here](https://discord.com/template/nNenmnHFNb93)
                            言・templat- => [Click Here](https://discord.com/template/FF9fdKbQQ9K9)
                            言・templat- => [Click Here](https://discord.new/9KpbsFp9kJsW)
                        **`)
        msg.channel.send(embed2)
        const embed3 = new Discord.MessageEmbed().setAuthor("houyoui").setDescription(`**
                            言・templat- => [Click Here](https://discord.new/ecdYRF2WuWeE)
                            言・templat- => [Click Here](https://discord.new/AfU4XbGSeEGD)
                            言・templat- => [Click Here](https://discord.new/yUbxeQR8WGeb)
                            言・templat- => [Click Here](https://discord.new/ZMW33GHXUNWV)
                            言・templat- => [Click Here](https://discord.new/MfQ3p2zxcPAu)
                            言・templat- => [Click Here](https://discord.new/ThXgkz5J4U9M)
                            言・templat- => [Click Here](https://discord.new/Cgx8eJCu2K4K)
                            言・templat- => [Click Here](https://discord.new/spNJHTvauRWU)
                        **`)
        msg.channel.send(embed3)
    }
})

///////

const userdata = {
xp: 0 ,
level: 1 ,
marry: null,
title: null,
};
client.on("message",(m)=>{
if(m.author.bot)return;
if(!m.guild)return;
if(!db.has(m.author.id))return db.set(`${m.author.id}`,userdata);
db.add(`${m.author.id}.xp`,20);
if(db.get(`${m.author.id}.level`) > 79)return;
if(db.get(`${m.author.id}.xp`) > 1000){
db.subtract(`${m.author.id}.xp`,1000);
db.add(`${m.author.id}.level`,1);
}
});

////


 
/////


///////
let roname = '1'// ايدي رول
let te = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+1")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == roname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(te)
 .setColor('BLACK'))
 }
});let ronam = '2'// ايدي رول
let tee = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+2")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronam); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tee)
 .setColor('BLACK'))
 }
});let ronameeq = '3'// ايدي رول
let teeeq = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+3")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameeq); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teeeq)
 .setColor('BLACK'))
 }
});let ronamew = '4'// ايدي رول
let tew = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+4")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamew); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tew)
 .setColor('BLACK'))
 }
});let ronamer = '5'// ايدي رول
let ter = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+5")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamer); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ter)
 .setColor('BLACK'))
 }
});let ronamet = '6'// ايدي رول
let tet = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+6")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamet); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tet)
 .setColor('BLACK'))
 }
});let ronamey = '7'// ايدي رول
let tey = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+7")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamey); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tey)
 .setColor('BLACK'))
 }
});let ronameu = '8'// ايدي رول
let teu = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+8")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameu); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teu)
 .setColor('BLACK'))
 }
});let ronameiiii = '9'// ايدي رول
let teiiii = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+9")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameiiii); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teiiii)
 .setColor('BLACK'))
 }
});let ronameo = '10'// ايدي رول
let teo = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+10")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameo); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teo)
 .setColor('BLACK'))
 }
});let ronamep = '11'// ايدي رول
let tep = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+11")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamep); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tep)
 .setColor('BLACK'))
 }
});let ronamezzzz = '12'// ايدي رول
let tezzzz = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+12")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamezzzz); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tezzzz)
 .setColor('BLACK'))
 }
});let ronamexxxx = '13'// ايدي رول
let texxxx = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+13")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamexxxx); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(texxxx)
 .setColor('BLACK'))
 }
});let ronamea = '14'// ايدي رول
let tea = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+14")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamea); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tea)
 .setColor('BLACK'))
 }
});let ronames = '15'// ايدي رول
let tes = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+15")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronames); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tes)
 .setColor('BLACK'))
 }
});let ronamed = '16'// ايدي رول
let ted = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+16")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamed); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ted)
 .setColor('BLACK'))
 }
});let ronamef = '17'// ايدي رول
let tef = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+17")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamef); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tef)
 .setColor('BLACK'))
 }
});let ronameg = '18'// ايدي رول
let teg = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+18")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameg); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teg)
 .setColor('BLACK'))
 }
});let ronameh = '19'// ايدي رول
let teh = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+19")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameh); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teh)
 .setColor('BLACK'))
 }
});let ronamej = '20'// ايدي رول
let tej = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+20")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamej); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tej)
 .setColor('BLACK'))
 }
});let ronamek = '21'// ايدي رول
let tek = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+21")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamek); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tek)
 .setColor('BLACK'))
 }
});let ronamel = '23'// ايدي رول
let tel = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+23")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamel); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tel)
 .setColor('BLACK'))
 }
});let ronamecccc = '24'// ايدي رول
let tecccc = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+24")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamecccc); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tecccc)
 .setColor('BLACK'))
 }
});let ronamez = '25'// ايدي رول
let tez = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+25")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamez); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tez)
 .setColor('BLACK'))
 }
});let ronamex = '26'// ايدي رول
let tex = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+26")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamex); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tex)
 .setColor('BLACK'))
 }
});let ronamec = '27'// ايدي رول
let tec = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+27")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamec); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tec)
 .setColor('BLACK'))
 }
});let ronamev = '28'// ايدي رول
let tev = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+28")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamev); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tev)
 .setColor('BLACK'))
 }
});let ronameb = '29'// ايدي رول
let teb = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+29")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameb); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teb)
 .setColor('BLACK'))
 }
});let ronamen = '30'// ايدي رول
let ten = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+30")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamen); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ten)
 .setColor('BLACK'))
 }
});let ronamem = '31'// ايدي رول
let tem = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {
if(message.content.startsWith("+31")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamem); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tem)
 .setColor('BLACK'))
 }
});let ronamevvvv = '32'// ايدي رول
let tevvvv = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+32")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamevvvv); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tevvvv)
 .setColor('BLACK'))
 }
});let ronameqq = '33'// ايدي رول
let teqq = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {
if(message.content.startsWith("+33")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameqq); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teqq)
 .setColor('BLACK'))
 }
});let ronameww = '34'// ايدي رول
let teww = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+34")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameww); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teww)
 .setColor('BLACK'))
 }
});let ronameee = '35'// ايدي رول
let teee = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+35")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameee); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teee)
 .setColor('BLACK'))
 }
});let ronamerr = '36'// ايدي رول
let terr = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+36")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamerr); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(terr)
 .setColor('BLACK'))
 }
});let ronamett = '37'// ايدي رول
let tett = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+37")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamett); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tett)
 .setColor('BLACK'))
 }
});let ronameyy = '38'// ايدي رول
let teyy = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+38")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameyy); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teyy)
 .setColor('BLACK'))
 }
});let ronameuu = '39'// ايدي رول
let teuu = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+39")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameuu); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teuu)
 .setColor('BLACK'))
 }
});let ronameii = '40'// ايدي رول
let teii = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+40")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameii); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teii)
 .setColor('BLACK'))
 }
});let ronameoo = '41'// ايدي رول
let teoo = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+41")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameoo); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teoo)
 .setColor('BLACK'))
 }
});let ronamepp = '42'// ايدي رول
let tepp = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("42")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamepp); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tepp)
 .setColor('BLACK'))
 }
});let ronameaa = '43'// ايدي رول
let teaa = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+43")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameaa); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teaa)
 .setColor('BLACK'))
 }
});let ronamess = '44'// ايدي رول
let tess = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+44")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamess); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tess)
 .setColor('BLACK'))
 }
});let ronamedd = '45'// ايدي رول
let tedd = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+45")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamedd); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tedd)
 .setColor('BLACK'))
 }
});let ronameff = '46'// ايدي رول
let teff = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+46")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronameff); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(teff)
 .setColor('BLACK'))
 }
});let ronamegg = '47'// ايدي رول
let tegg = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+47")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamegg); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tegg)
 .setColor('BLACK'))
 }
});let ronamehh = '48'// ايدي رول
let tehh = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+48")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamehh); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tehh)
 .setColor('BLACK'))
 }
});let ronamejj = '49'// ايدي رول
let tejj = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+49")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamejj); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tejj)
 .setColor('BLACK'))
 }
});let ronamekk = '50'// ايدي رول
let tekk = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+50")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamekk); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tekk)
 .setColor('BLACK'))
 }
});let ronamell = '51'// ايدي رول
let tell = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+51")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamell); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tell)
 .setColor('BLACK'))
 }
});let ronamezz = '52'// ايدي رول
let tezz = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+52")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamezz); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tezz)
 .setColor('BLACK'))
 }
});let ronamexx = '53'// ايدي رول
let texx = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+53")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamexx); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(texx)
 .setColor('BLACK'))
 }
});let ronamecc = '54'// ايدي رول
let tecc = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+54")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamecc); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tecc)
 .setColor('BLACK'))
 }
});let ronamevv = '55'// ايدي رول
let tevv = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+55")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamevv); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tevv)
 .setColor('BLACK'))
 }
});let ronamebb = '56'// ايدي رول
let tebb = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+56")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamebb); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tebb)
 .setColor('BLACK'))
 }
});let ronamenn = '57'// ايدي رول
let tenn = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+57")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamenn); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tenn)
 .setColor('BLACK'))
 }
});let ronamemm = '58'// ايدي رول
let temm = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+58")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ronamemm); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(temm)
 .setColor('BLACK'))
 }
});let qroname = '59'// ايدي رول
let qte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+59")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == qroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(qte)
 .setColor('BLACK'))
 }
});let wroname = '60'// ايدي رول
let wte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+60")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == wroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(wte)
 .setColor('BLACK'))
 }
});let eroname = '61'// ايدي رول
let ete = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+61")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == eroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ete)
 .setColor('BLACK'))
 }
});let rroname = '62'// ايدي رول
let rte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+62")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == rroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(rte)
 .setColor('BLACK'))
 }
});let troname = '63'// ايدي رول
let tte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+63")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == troname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tte)
 .setColor('BLACK'))
 }
});let yroname = '64'// ايدي رول
let yte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+64")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == yroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(yte)
 .setColor('BLACK'))
 }
});let uroname = '65'// ايدي رول
let ute = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+65")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == uroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ute)
 .setColor('BLACK'))
 }
});let ironame = '66'// ايدي رول
let ite = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+66")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ironame); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ite)
 .setColor('BLACK'))
 }
});let oroname = '67'// ايدي رول
let ote = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+67")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == oroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ote)
 .setColor('BLACK'))
 }
});let proname = '68'// ايدي رول
let pte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+68")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == proname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(pte)
 .setColor('BLACK'))
 }
});let aroname = '69'// ايدي رول
let ate = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+69")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == aroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ate)
 .setColor('BLACK'))
 }
});let sroname = '70'// ايدي رول
let ste = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+70")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == sroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ste)
 .setColor('BLACK'))
 }
});let droname = '71'// ايدي رول
let dte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+71")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == droname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(dte)
 .setColor('BLACK'))
 }
});let froname = '72'// ايدي رول
let fte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+72")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == froname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(fte)
 .setColor('BLACK'))
 }
});let groname = '73'// ايدي رول
let gte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+73")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == groname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(gte)
 .setColor('BLACK'))
 }
});let hroname = '74'// ايدي رول
let hte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+74")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == hroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(hte)
 .setColor('BLACK'))
 }
});let jroname = '75'// ايدي رول
let jte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+75")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == jroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(jte)
 .setColor('BLACK'))
 }
});let kroname = '76'// ايدي رول
let kte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+76")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == kroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(kte)
 .setColor('BLACK'))
 }
});let hjroname = '77'// ايدي رول
let hjte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+77")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == hjroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(hjte)
 .setColor('BLACK'))
 }
});let bkroname = '78'// ايدي رول
let bkte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+78")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == bkroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(bkte)
 .setColor('BLACK'))
 }
});let lroname = '79'// ايدي رول
let lte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+79")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == lroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(lte)
 .setColor('BLACK'))
 }
});let zroname = '80'// ايدي رول
let zte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+80")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == zroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(zte)
 .setColor('BLACK'))
 }
});let xroname = '81'// ايدي رول
let xte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.endsWith("+81")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == xroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(xte)
 .setColor('BLACK'))
 }
});let croname = '82'// ايدي رول
let cte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+82")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == croname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(cte)
 .setColor('BLACK'))
 }
});let vroname = '83'// ايدي رول
let vte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+83")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == vroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(vte)
 .setColor('BLACK'))
 }
});let broname = '84'// ايدي رول
let bte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+84")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == broname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(bte)
 .setColor('BLACK'))
 }
});let nroname = '85'// ايدي رول
let nte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+85")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == nroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(nte)
 .setColor('BLACK'))
 }
});let mroname = '86'// ايدي رول
let mte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+86")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == mroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(mte)
 .setColor('BLACK'))
 }
});let qqroname = '87'// ايدي رول
let qqte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+87")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == qqroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(qqte)
 .setColor('BLACK'))
 }
});let wwroname = '88'// ايدي رول
let wwte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+88")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == wwroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(wwte)
 .setColor('BLACK'))
 }
});let eeroname = '89'// ايدي رول
let eete = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+89")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == eeroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(eete)
 .setColor('BLACK'))
 }
});let rrroname = '90'// ايدي رول
let rrte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+90")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == rrroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(rrte)
 .setColor('BLACK'))
 }
});let ttroname = '91'// ايدي رول
let ttte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+91")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ttroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ttte)
 .setColor('BLACK'))
 }
});let yyroname = '92'// ايدي رول
let yyte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+92")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == yyroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(yyte)
 .setColor('BLACK'))
 }
});let uuroname = '93'// ايدي رول
let uute = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+93")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == uuroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(uute)
 .setColor('BLACK'))
 }
});let iironame = '94'// ايدي رول
let iite = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+94")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == iironame); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(iite)
 .setColor('BLACK'))
 }
});let ooroname = '95'// ايدي رول
let oote = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+95")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ooroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(oote)
 .setColor('BLACK'))
 }
});let pproname = '96'// ايدي رول
let ppte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+96")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == pproname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ppte)
 .setColor('BLACK'))
 }
});let aaroname = '97'// ايدي رول
let aate = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+97")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == aaroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(aate)
 .setColor('BLACK'))
 }
});let ssroname = '98'// ايدي رول
let sste = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+98")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ssroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(sste)
 .setColor('BLACK'))
 }
});let ddroname = '99'// ايدي رول
let ddte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+99")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ddroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ddte)
 .setColor('BLACK'))
 }
});
let ffroname = '100'// ايدي رول
let ffte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+100")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ffroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ffte)
 .setColor('BLACK'))
 }
});let ggroname = '101'// ايدي رول
let ggte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+101")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ggroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ggte)
 .setColor('BLACK'))
 }
});let hhroname = '102'// ايدي رول
let hhte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+102")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == hhroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(hhte)
 .setColor('BLACK'))
 }
});let jjroname = '103'// ايدي رول
let jjte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+103")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == jjroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(jjte)
 .setColor('BLACK'))
 }
});let kkroname = '104'// ايدي رول
let kkte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+104")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == kkroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(kkte)
 .setColor('BLACK'))
 }
});let zzroname = '105'// ايدي رول
let zzte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+105")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == zzroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(zzte)
 .setColor('BLACK'))
 }
});let xxroname = '106'// ايدي رول
let xxte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+106")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == xxroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(xxte)
 .setColor('BLACK'))
 }
});let ccroname = '107'// ايدي رول
let ccte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+107")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ccroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ccte)
 .setColor('BLACK'))
 }
});let vvroname = '108'// ايدي رول
let vvte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+108")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == vvroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(vvte)
 .setColor('BLACK'))
 }
});let bbroname = '109'// ايدي رول
let bbte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+109")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == bbroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(bbte)
 .setColor('BLACK'))
 }
});let nnroname = '1010'// ايدي رول
let nnte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+110")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == nnroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(nnte)
 .setColor('BLACK'))
 }
});let mmroname = '111'// ايدي رول
let mmte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.endsWith("+111")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == mmroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(mmte)
 .setColor('BLACK'))
 }
});let wwwroname = '112'// ايدي رول
let wwwte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+112")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == wwwroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(wwwte)
 .setColor('BLACK'))
 }
});let eeeroname = '113'// ايدي رول
let eeete = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+113")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == eeeroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(eeete)
 .setColor('BLACK'))
 }
});let rrrroname = '114'// ايدي رول
let rrrte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+114")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == rrrroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(rrrte)
 .setColor('BLACK'))
 }
});let tttroname = '115'// ايدي رول
let tttte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+115")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == tttroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(tttte)
 .setColor('BLACK'))
 }
});let yyyroname = '116'// ايدي رول
let yyyte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+116")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == yyyroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(yyyte)
 .setColor('BLACK'))
 }
});let uuuroname = '117'// ايدي رول
let uuute = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+117")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == uuuroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(uuute)
 .setColor('BLACK'))
 }
});let iiironame = '118'// ايدي رول
let iiite = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+118")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == iiironame); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(iiite)
 .setColor('BLACK'))
 }
});let oooroname = '119'// ايدي رول
let ooote = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+119")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == oooroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ooote)
 .setColor('BLACK'))
 }
});let ppproname = '120'// ايدي رول
let pppte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+120")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == ppproname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(pppte)
 .setColor('BLACK'))
 }
});let aaaroname = '121'// ايدي رول
let aaate = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+121")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == aaaroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(aaate)
 .setColor('BLACK'))
 }
});let sssroname = '122'// ايدي رول
let ssste = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+122")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == sssroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(ssste)
 .setColor('BLACK'))
 }
});let dddroname = '123'// ايدي رول
let dddte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+123")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == dddroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(dddte)
 .setColor('BLACK'))
 }
});let fffroname = '124'// ايدي رول
let fffte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+124")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == fffroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(fffte)
 .setColor('BLACK'))
 }
});let gggroname = '125'// ايدي رول
let gggte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+125")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == gggroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(gggte)
 .setColor('BLACK'))
 }
});let hhhroname = '126'// ايدي رول
let hhhte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+126")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == hhhroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(hhhte)
 .setColor('BLACK'))
 }
});let jjjroname = '127'// ايدي رول
let jjjte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+127")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == jjjroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(jjjte)
 .setColor('BLACK'))
 }
});let kkkroname = '128'// ايدي رول
let kkkte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+128")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == kkkroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(kkkte)
 .setColor('BLACK'))
 }
});let lllroname = '129'// ايدي رول
let lllte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+129")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == lllroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(lllte)
 .setColor('BLACK'))
 }
});let zzzroname = '130'// ايدي رول
let zzzte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+130")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == zzzroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(zzzte)
 .setColor('BLACK'))
 }
});
let xxxroname = '131'// ايدي رول
let xxxte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+131")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == xxxroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(xxxte)
 .setColor('BLACK'))
 }
});let cccroname = '132'// ايدي رول
let cccte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+132")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == cccroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(cccte)
 .setColor('BLACK'))
 }
});let vvvroname = '133'// ايدي رول
let vvvte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+133")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == vvvroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(vvvte)
 .setColor('BLACK'))
 }
});let bbbroname = '134'// ايدي رول
let bbbte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+134")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == bbbroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(bbbte)
 .setColor('BLACK'))
 }
});let nnnroname = '135'// ايدي رول
let nnnte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+135")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == nnnroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(nnnte)
 .setColor('BLACK'))
 }
});let mmmroname = '136'// ايدي رول
let mmmte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+136")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == mmmroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(mmmte)
 .setColor('BLACK'))
 }
});let qqqqroname = '137'// ايدي رول
let qqqqte = 'مبروك عليك الرتبة حبى'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("+137")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == qqqqroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(qqqqte)
 .setColor('BLACK'))
 }
});
///////
let qqqqqroname = 'Guest 💥'// ايدي رول
let qqqqqte = 'يارب تستمتع بتجربة الاداء حب ❤'// الكلام ل يوصله خاص بس يتجيه الرتبة
client.on('message', async message => {

if(message.content.startsWith("تم+")) { // الكلمه ل يكتبها وتعطيه الرول
if(!message.channel.guild || message.author.bot) return;
 const role = message.guild.roles.cache.find(rol => rol.name == qqqqqroname); 
 message.member.roles.add(role);
 message.delete()
 message.author.send(new Discord.MessageEmbed()
 .setDescription(qqqqqte)
 .setColor('BLACK'))
 }
});
/////

//////

/////
client.on('message', message =>{
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + "roleinfo")){
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`انت لايمكنك استخدام هذا الامر 😎`)
    let args = message.content.split("")
     if (args.includes("@everyone")) return;
        
        if (args.includes("@here")) return;

        if (!args[0]) return message.channel.send("**Please Enter A Role!**")

        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());

        if (!role) return message.channel.send("** رجاء منشن رول**");

        let membersWithRole = message.guild.members.cache.filter(member => {
            return member.roles.cache.find(r => r.name === role.name);
        }).map(member => {
            return `<@${member.user.id}>`;
        })
        if (membersWithRole > 2048) return message.channel.send('**List Is Too Long!**')

        let roleEmbed = new Discord.MessageEmbed()
            .setColor("#2F3136")
            .setThumbnail(message.guild.iconURL())
            .setTitle(`الحسابات التي تمتلك رول  ${role.name}`)
            .setDescription(membersWithRole.join("\n"));
message.channel.send(roleEmbed)  
}})
//////////
client.on('message', message =>{
  if (message.content.startsWith(prefix + `set-status`)){//Mart 
if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(` انت لايمكن استخدام هذا الامر`)//Mart


           let mart = message.content.split(" ").slice(1).join(" ")
if (!mart) return message.channel.send('Activity ?')

        //Mart
      let embed  = new Discord.MessageEmbed()
  .setTitle(`تغير حالتي`)
  .setTimestamp()//Mart
 .setDescription(`**> 1-PLAYING 🔴**\n**> 2-LISTENING 🟡**\n**> 3-WATCHING 🟢**\n**> 4-COMPETING 🔵**\n**> 5-STREAMING 🟣 **`)


     .setFooter(
           client.user.username,
            client.user.displayAvatarURL({ dynamic: true })) 
message.channel.send(embed).then(async msg =>{
    const emojis = [
      "🔴", //Mart
      "🟡",   //Mart
      "🟢",    //Mart
      "🔵",     //Mart
      "🟣",      //mart
      "❌"        //Mart
    ]

    for (let i = 0; i < emojis.length; i++){
      await msg.react(emojis[i]);
    }//Mart//Mart//Mart

    const filter = (reaction, user) => emojis.includes(reaction.emoji.name) && user.id == message.author.id;

    const collector = msg.createReactionCollector(filter, { time: 3000000})

    let v = mart[Math.floor(Math.random() * mart.length)];
let embed2 = new Discord.MessageEmbed()
  .setTitle(`تغير حالتي`)
  .setColor(`#0475d1`) .setTimestamp()


  .setFooter()
  .setDescription(`✅| تم تغير الحاله بنجاح`)
 
   

.setFooter(client.user.username,client.user.displayAvatarURL({ dynamic: true })) 
    collector.on('collect', ({ emoji, users}) =>{
      const index = emojis.indexOf(emoji.name)
      if (index === 0){
       msg.edit(embed2)
          client.user.setActivity(mart,{ type : 'PLAYING' })
      } else
      if (index === 1){
          client.user.setActivity(mart,{ type : 'LISTENING' })
     msg.edit(embed2)     
      } else
      if (index === 2){
          msg.edit(embed2)  
          client.user.setActivity(mart,{ type : 'WATCHING' })
      } else
      if (index === 3){
   msg.edit(embed2)     
          client.user.setActivity(mart,{ type : 'COMPETING' })
      } else 
       if (index === 4){
   msg.edit(embed2)     
           client.user.setActivity(mart,{ type : 'STREAMING', url : `https://www.twitch.tv/${mart}`})
       } else{
        collector.stop()
 
      msg.channel.send(` تم الالغاء: ❌`)
 
                msg.delete()
     }
    })
})
  }})
///////


      
client.on("message", Hydra_Emoji => {
  
  if (
    Hydra_Emoji.content == prefix + "emoji" ||
    Hydra_Emoji.content == prefix + "ايموجي"
  ) {
    var x = ["🌚", "😂", "🥶", "😷", "🌻", "🌗", "✨", "🍐", "🚗", "💽"];
    var x2 = ["🌚", "😂", "🥶", "😷", "🌻", "🌗", "✨", "🍐", "🚗", "💽"];
    var x3 = Math.floor(Math.random() * x.length);
    var emoji = new Discord.MessageEmbed()
      .setTitle(`** لديك __10 ثواني__ لكتابة الايموجي **`)
      .addField(`${x[x3]}`);
    Hydra_Emoji.reply(emoji).then(msg1 => {
      var r = Hydra_Emoji.channel.awaitMessages(msg => msg.content == x2[x3], {
        max: 1,
        time: 20000,
        errors: ["time"]
      });
      r.catch(() => {
        return Hydra_Emoji.channel
          .send(
            new Discord.MessageEmbed()
              .setTitle(`❎** لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الصحيحة هيا __${x2[x3]}__ **`)
          );
      });

      r.then(collected => {
        
        Hydra_Emoji.reply(
          new Discord.MessageEmbed()
            .setTitle(`**لقد قمت بكتابة الايموجي في الوقت المناسب**`) 
        );
      });
    });
  }
});
///////
const Database = require('st.db')







//////
let axios = require('axios').default;

client.on("messageCreate", (message) =>{
    if(message.content === prefix+'g-credits') {
        axios.get('https://api.probot.io/top_credits')
        .then(({data}) => {
            message.reply(
            {
                embeds: [
                        {
                            author: {name: 'top 10 In Credits'},
                            title: "Top 10 Credit In Probot",
                            fields: [data.slice(0,10).map((e,i)=>{
                                return {
                                    name:`${i+1}- ${e.name}#${e.discriminator}`,
                                    value: `Credit: **${(e.credits/ 1000000).toLocaleString()}** Milion`,
                                    inline:true
                                }
                            })]
                        }
                    ]
            }    
            )
        })
    }
})


///////
client.on('messageCreate', async (message) => {
   if (message.startsWith(prefix + "slow-mod")) {
    if (message.author.bot) return;
    if (message.channel.type == "dm") {
      return;
    }
    var args = message.content.split(" ")
    if (isNaN(args[1])) return message.reply('ضع رقم فقط!')
    message.reply('** تم وضع السلو مود الى ' + args[1] + ' ثانيه **')
    message.channel.setRateLimitPerUser(args[1])
  }
})
////
client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
if(command === "search-egybest"){
    message.channel.send(
      new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
.setColor("RANDOM")
      .setTitle('لرؤية بحثك في ايجي بيست اضغط هنا')
      .setURL(`https://giga.egybest.org/explore/?q=${args}`)
      .setImage("https://media.discordapp.net/attachments/901881053092937769/917090496562728970/64199.jpg")
    );
  }
});
///
client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
if(command === "search-google"){
                           if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    message.channel.send(
      new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
.setColor("RANDOM")
      .setTitle('لرؤية بحثك على جوجل اضغط هنا')
      .setURL(`https://www.google.com/search?q=${args}`)
      .setImage("https://media.discordapp.net/attachments/901881053092937769/917088579438641312/s1AjSxph_400x400.jpg")
    );
  }
}});
///
client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
if(command === "search-youtube"){
                           if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    message.channel.send(
      new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
.setColor("RANDOM")
      .setTitle('لرؤية بحثك في اليوتيوب اضغط هنا')
      .setURL(`https://m.youtube.com/results?sp=mAEA&search_query=${args}`)
      .setImage("https://media.discordapp.net/attachments/901881053092937769/917090651156394074/yt_1200.png?width=671&height=671")
    );
  }
}});
/////
client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
if(command === "search-netflix"){
                           if (talkedRecently.has(message.author.id)) {
            message.channel.send(" <a:1656_idle:908344328538169396>  **Cool Down (10 second)** ");
            message.delete({timeout: 5})
    } else {
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 5000);
    message.channel.send(
      new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
.setColor("RANDOM")
      .setTitle('لرؤية بحثك في نيتفليكس اضغط هنا')
      .setURL(`https://www.netflix.com/search?q=${args}`)
      .setImage("https://media.discordapp.net/attachments/901881053092937769/917091188731940914/16223756827400.jpg?width=1192&height=671")
    );
  }
}})

//////
client.on('message',badboy => {

  if(badboy.content.startsWith(prefix+ "كت")){
                           
                     
    let reply =[
      ' @hereإذا كان لديك انتباه العالم لمدة 30 ثانية ، ماذا ستقول؟',
      ' @hereإذا كان عليك العمل ولم تكن بحاجة إلى المال ، فماذا تختار أن تفعل؟',
      ' @hereماذا يوجد في ثلاجتك الآن؟',
      ' إذا كنت في المنزل بعد ظهر يوم الأحد الممطر ، فما هو الفيلم الذي ترغب @hereفي مشاهدته على شاشة التلفزيون؟',
      '@hereأين لا تمانع في الانتظار؟',
      '@hereإذا كان بإمكانك عدم اختراع شيء واحد ، فماذا سيكون؟',
      '@hereإذا كنت تستطيع أن تكون عضوًا في أي عائلة تلفزيونية ، فماذا ستكون؟',
      '. @hereما هو أفضل شيء في حالة عدم وجود حاسة الشم؟',
      'عند التصفح عبر وسائل التواصل الاجتماعي ، هل تفضل المنشورات من @hereالمشاهير أم من أعز أصدقائك؟',
      ' @hereهل هناك تطبيق تكرهه ولكنك تستخدمه على أي حال؟',
      '. @hereإذا كنت تستطيع أن تتكلم كلمة واحدة فقط اليوم ، فماذا ستقول؟',
      '@hereما هو أغبى شيء فعلته لأن شخصًا ما تجرأ عليك؟',
      '@hereما هو أغبى شيء فعلته بمحض إرادتك؟',
      '@hereإذا كان بإمكانك حبس شخص واحد في مصحة عقلية ، فمن سيكون؟',
      '@here أي جزء من وجه الإنسان هو المفضل لديك؟ بلاش قلة ادب',
      ' @hereهل ترقص بجنون عندما لا ينظر أحد؟',
      '@hereإذا كنت تستطيع أن تجعل أي شخصية تاريخية ، فمن ستختار؟',
      '.@here ما هو أعنف شيء قمت به في غرفة فندق؟ بلاش قلة ادب برده',
      '@hereهل تفضل العيش (بشكل دائم) في ملاهي دوارة أو حديقة حيوانات؟',
      '@hereهل تفضل أن تبدو مثل البطاطس ، أو تشعر مثل البطاطس؟',
      '@hereهل تفضل الاحتفاظ بجدول نومك الحالي أو السبات لمدة 3 أشهر ولديك 9 @hereأشهر من اليقظة على مدار الساعة طوال أيام الأسبوع دون الشعور بالتعب ؟',
      '@hereهل تفضل أن تكون قادرًا على التنفس تحت الماء أو أن تتمتع بخفة حركة قطة؟',
      '@here ما الذي يجعل المرء بطلا؟',
      ' @hereإذا ورثت طائرة خاصة من شخص غريب ، ماذا ستفعل بها؟',
      '@hereما هو الشيء الذي جربته ولن تحاول أبدًا مرة أخرى؟',
      '@hereفي أي موقف أو مكان ستشعر فيه بأقصى درجة في غير محله؟',
      ' @hereما هو عيد الميلاد / عطلة مثالية بالنسبة لك؟',
      '@hereإذا كان بإمكانك تغيير شيء واحد في تربيتك ، فماذا سيكون؟',
      '@hereعندما تنكسر الأشياء ، هل تفضل إصلاحها أو استبدالها؟',
      '@hereإذا كان طعامك سيئًا في المطعم ، هل ستقول شيئًا؟',
      '@hereكم مرة تنظر إلى هاتفك كل يوم؟',
      '@hereعندما تقابل شخصًا تنجذب إليه ، ما الذي تلاحظه لأول مرة؟',
      '@hereإذا كان لديك كل المال في العالم ، فما هو أول شيء تشتريه؟',
      ' @hereمن يمنحك الشجاعة لتجربة أشياء جديدة؟',
      '@hereما الذي تتمنى أن تحققه الآن في حياتك؟',
      '.@here العفوية أم الاستقرار؟',
      '@hereما العمل الروتيني الذي تكره القيام به على الإطلاق؟',
      '@hereأي من أولادك يشبهك إلى حد بعيد؟',
      '@hereأي من أصدقاء العمر يكون الأقرب إليك؟',
      '@hereلو عدت للوراء مدة 25 سنة ما الذي تقوم بتغييره؟',
      '@hereما هي الفرصة التي ضاعت منك وتندم عليها؟',
      '@hereما هي الفرصة التي غيرت حياتك؟',
      '@hereما هي فاصلة التحول في حياتك؟',
      '@hereهل ارتكبت خطأ ما تندم عليه حتى الآن؟',
      '@hereأين تريد أن تقضي أطول مدة ممكنة في حياتك؟',
      '@hereضع عنوان لحياتك؟',
      '@hereاسم الشخص الذي تحبه أو الغناء في الشارع.',
      '@hereصديق واحد مقرب فقط أو أن تضع طلاء الأظافر على خديك',
      '@hereسر لم تخبر به أحد من قبل أو أن تأكل خليط من الكاتشب مع الخل والملح.',
      '@hereكذبة كانت السبب في أمر مهم أو أن ترقص لـ 5 دقائق.',
      '@hereاسم شخص تكرهه أو أن تقوم بتحضير الطعام لمدة 3 أيام.',
      '@hereموقف محرج حدث لك أو أن تأكل 3 شطائر كبيرة.',
      '@hereهل تأكل في الليل أو عليك شرب قهوة مع وضع الملح بدلًا من السكر.',
      '@hereاسم شخص صدمك بتصرف قام به أو أن تقوم بتصوير لايف في مواقع التواصل الاجتماعي.',
      '@hereما هي كلمة سر حسابك في فيس بوك أو أن تقوم بالاتصال برقم عشوائي وإخبارهم نكتة.',
      '@hereاسم شخص آخذ حقك أو أن تقفز على قدم واحدة 25 مرة.',
      '@hereسرقت من قبل.',
      '@hereقمت برن جرس الأبواب ومن ثم هربت.',
      '@hereرسبت في مادة.',
      '@hereكذبت على معلمك.',
      '@hereشاركت في مسرح الصف.',
      '@hereبكيت بحرقة على شيء أو شخص.',
      '@hereندمت على فعل قمت به.',
      '@hereندمت على فعل لم تقم به.',
      '@hereما هو الاسم الذي يناديك به الآخرين؟ ومن قام بتسميتك به؟',
      '@hereهل تحب اسمك أم أنك تود تغييره لو تمكنت؟',
      '@hereكم تتقاضى في الشهر؟',
      '@hereهل تتمكن من توفير أي مبلغ من مرتبك؟',
      '@hereما هو مجال دراستك؟ هل اخترته أنت أم حسب درجاتك؟',
      '@hereهل أنت مدمن على شيء أو عادة معينة؟',
      '@hereكم ساعة تنام في اليوم؟',
      '@hereما هو الشيء الذي يسبب لك القلق والأرق؟',
      '@hereمتى تكذب وما هي المواقف التي تدفعك إلى ذلك؟',
      '@hereما هو اللون الذي تفضله؟',
      '@hereهل سبق وحصل شخص ما على عقوبة بسبب خطأ أنت ارتكبته؟',
      '@hereما هو أكثر شيء ذو قيمة عند شخص ما وكنت السبب في ضياعه؟',
      '@hereمتى كانت أكثر مرة شعرت بالألم بسبب شخص آخر؟',
      '@hereهل سبق وتخليت عن شخص يحتاجك بشدة؟',
      '@hereهل سبق وتخلى عنك شخص تحتاجه بشدة؟',
      '@hereما هو الشيء الطفولي الذي ما تزال تفعله حتى الآن؟',
      '@hereما هو عمرك العقلي؟',
      '@hereلو كان عليك قضاء 3 أيام برفقة الأطفال ماذا ستفعل؟',
      '@hereهل سبق لك وخنت ثقة أحد ما بك؟',
      '@hereهل سبق وشعرت بخيبة أمل من إعطاء ثقتك لشخص ما؟',
      '@hereلو خيروك بين الاعتراف لشخص تحبه أو الاعتراف لشخص تكرهه.',
      '@hereلو خيروك بين مشاعر الحب أو الاحترام.',
      '@hereلو خيروك بين شخص تحبه ويكرهك أو شخص تكرهه ويحبك.',
      '@hereلو خيروك بين شخص جريء أو شخص خجول.',
      '@hereلو خيروك بين ترك حبيبك أو نسيان كل شيء عنه.',
      '@hereلو خيروك بين حبيبك أم صديقك المقرب.',
      '@hereلو خيروك بين الاهتمام أو الحب.',
      '@hereلو خيروك بين ممارسة التمارين الرياضية لـ 10 ساعات أو وضع الكثير من مساحيق التجميل.',
      '@hereلو خيروك بين طبخ طبق صعب تحبه أو طبخ طبق سهل لا تتناوله.',
      '@hereمن هو الصديق بينكم الذي دائمًا ما يتم الاعتماد عليه في مختلف الأمور؟',
      '@hereهل وفقت بين شخصين مُتخاصمين؟',
      '@hereمن أكثر فتاة في المتواجدين حولك تثير اهتمامك وتريد معرفة المزيد عنها؟',
      '@hereإذا وقعت في حب فتاة فقيرة وترغب بالزواج منها ولكن أهلك يرفضونها بكل الطرق لأنها لا تناسب المستوى الاجتماعي لديك فماذا ستفعل أتترك الفتاة أم تترك أهلك؟',
      '@hereإذا خيروك أهلك بين فتاتين لا ثالثة لهما للزواج من أحدهما وكانت أحد الفتاتان ابنة عمك التي لا تطيقها لتعجرفها والأخرى ابنة خالك التي لا يعجبك شكلها فأيهما ستختار؟',
      '@hereإذا كان أمامك ثلاثة فتيات كلا منهما تملك شيئا لا يملكه غيرها الأولى ثرية ولديها أموال طائلة والثانية جميلة والثالثة تمتلك قلب من ذهب ومتدينة فمن ستختار؟',
      '@hereإذا طلبت منك الفتاة التي تحبها إلقاء نفسك في ماء مثلج لإثبات حبك لها فماذا ستفعل؟',
      '@hereإذا طلب منك أحد الأشخاص قول أسم الشخص الذي كنت تفكر به ليلا عندما ابتسمت أتقول الحقيقة أم تكذب؟',
      '@hereإذا كنتي تحبين شخصا معكي في الجامعة في نفس دفعتك وتقدم إليكي معيدك في الجامعة فهل توافقين على المعيد أم تنتظرين من تحبينه؟',
      '@hereما هي الذكريات التي تدفعك للحزن لدرجة البكاء؟',
      '@hereما هو آخر موقف دفعك للبكاء؟',
      '@hereما هو مقدار تعلقك بالشخص الذي تحبه؟',
      '@hereما هي المهنة التي كنت ستختارها لو كنت ستعتمد على موهبتك فقط؟',
      '@hereما هو الشيء الذي يسبب لك الخوف بشكل كبير؟',
      '@hereما هي المهنة التي كنت ستختارها لو كنت ستعتمد على موهبتك فقط؟',
      '@hereما هو نوع السيارة التي تريد الحصول عليها؟',
      '@hereما هي الصفات التي تريدها في فتاة أحلامك؟',
      '@hereما هو والشيء الذي لا يمكنك مسامحة من يقترفه بحقك؟',
      '@hereعطيت مسمار قبل كده',
      '@hereهل تمتلك ذاكرة قوية أم أنك سريع النسيان؟',
      '@hereهل تمتلك صديق يمكنك إخباره أي شيء وكل شيء؟',
      '@hereهل تبكي أم أنك تنظر إلى البكاء على أنه ضعف؟',
      '@hereهل تملك شخص تعتبره قدوة لك؟',
      '@hereهل يمكنك الاعتراف بأخطائك وتحمل كامل مسؤوليتك وتقديم الاعتذار بسهولة؟',
      '@hereما هي أكبر مخاوفك في حياتك؟',
      '@hereما هو أهم تاريخ في حياتك؟',
      '@hereهل يمكنك تخيل الحياة بدون إنترنت؟',
      '@hereكيف كان العالم قبل الإنترنت؟',
      '@hereما هو أهم إنجاز في حياتك؟',
      '@hereعندك مزة ولا لاه',
      '@hereعندك كمبيوتر ولا لاه ولو عندك قولنا كده على مواصفاته',
      '@hereهل سبق وشعرت أن حياتك بلا قيمة؟',
      '@hereما هي الحياة التي ترغب في أن تعيشها؟',
      '@hereما هو أكثر شيء تندم عليه في حياتك؟',
      '@hereما هو الشيء الذي كان يسبب لك القلق ومن ثم اكتشفت أنه جيد بالنسبة لك؟',
      '@hereما هو أهم درس علمته لك الحياة؟',
      '@hereماذا تفعل لو استيقظت في يوم من الأيام لتجد نفسك خفي؟',
      '@hereماذا تفعل لو تعطلت سيارتك وسط الصحراء؟',
      '@hereماذا تفعل لو كان من الممكن أن تمحي حدث واحد من ذكرياتك؟',
      '@hereماذا تفعل لو كان قول الحقيقة سوف يوقعك في مشكلة كبيرة؟',
      '@hereلو عاوز بوت سيستيم زى ده كلم ! 𝐿𝑀 | β𝒆Ř𝑔ό#0843',
      '@hereلو كنت تملك الفرصة لمقابلة شخص مشهور فمن هو هذا الشخص الذي ستختاره؟',
      '@hereلو كنت تملك الاختيار لتصبح بارع بلغة معينة فما هي هذه اللغة التي تود تعلمها؟',
      '@hereلو كنت سوف تواعد شخصية كرتونية، فمن هي هذه الشخصية؟',
      '@hereشتمت امك او ابوك قبل كده ',
      '@hereضربت بنت قبل كده',
      '@hereهل صليت على النبى اليوم؟',
      '@hereهل تفضل أن يتم إعطائك الخيارات أو أن يتم فرض اختيار واحد عليك؟',
      '@hereهل عادة ما تشعر بالحيرة أو أن الأشياء المحيرة تأتي إليك دائمًا؟',
      '@hereهل تعرضت للتنمر من قبل؟',
      '@hereما هو آخر شيء تفكر به قبل النوم؟',
      '@hereلو كنت تكره شخص يحبك بصدق، كيف ستتصرف وتتعامل مع الأمر؟',
      '@hereكيف ستتصرف في حال استيقظت يومًا لتجد نفسك مليونير؟',
      '@hereهل شخصيتك طفولية أم جادة؟',
      '@hereهل كذبت على أحد والديك؟',
      '@hereما الشيء الذي ستقوم به إذا عدت إلى عمر 10 سنوات؟',
      '@hereعلى من كانت أكبر كذبة كذبتها؟',
      '@here هل لديك مكان خاص تود زيارته بانتظام؟',
      '@hereإذا كان بإمكانك إنشاء المسمى الوظيفي الخاص بك ، فماذا سيكون؟',
      '@hereهل سبق لك أن أسقطت طعامًا على الأرض ثم التقطته وأكلته؟',
      ' @hereهل إعادة شيء ما استعرته يعتبر سرقة؟',
      '@hereبطل أم شرير ليوم واحد؟',
      '@hereما هو الشيء الوحيد الذي لا يعرفه أحد عنك؟',
      '@hereهل تعتقد أنه من الممكن الحفاظ على الصداقات الأفلاطونية مع أفراد من الجنس الآخر؟',
      '@hereهل تخدم المال أم يخدمك المال؟',
      '@here ماذا يفعل الناس كثيرا اليوم؟',
      '@here عندما تبلغ من العمر 90 عامًا ، ما الذي يهمك أكثر؟',
      ' ما هو الأصعب بالنسبة لك ، أن تقول لشخص تحبه أو أنك لا تحبه مرة @hereأخرى؟',
      '@hereهل تعتقد أن أي نوع من الآخرة موجود؟',
      '@hereما هي صورتك الشخصية عن الله؟',
      ' @hereما هو مصدر المماطلة؟',
      '@here ما العادات التي تمنعك من النجاح؟',
      '@hereمتى كانت آخر مرة أخذت فيها بعض الوقت لتكون بمفردك؟',
      '.@here إذا كان لديك موارد غير محدودة ، فكيف ستعيش حياتك؟',
      '@hereما هو الطعام الوحيد الذي لن تتخلى عنه أبدًا؟',
      ' @hereهل تتوافق مع والديك؟',
      '@hereما هي أول ذكرياتك عندما كنت متحمسًا حقًا؟',
      '@hereما هي آخر تجربة جعلتك شخصا أقوى؟',
      '@hereما هو الشيء الذي تعلمته في الأسبوع الماضي؟',
      '@hereإذا كان بإمكانك رسم صورة لأي مشهد رأيته من قبل ، فماذا ترسم؟',
      '@here. ما الصوت الذي تحبه؟',
      ' @hereما هو أقل وسيلة النقل المفضلة لديك؟',
      

      ];

let an = reply[Math.floor(Math.random() * reply.length)];
badboy.channel.send(`${an}`)
  }
})
//////

/////
client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();
if(command === "search-top.gg"){
    message.channel.send(
      new Discord.MessageEmbed()
      .setThumbnail(client.user.avatarURL())
.setColor("RANDOM")
      .setTitle('To Get Your Top.gg Search Click Here ')
      .setURL(`https://top.gg/bot/${args}`)
.setFooter('Daddy iMishoo')
    );
  }
});
/////
client.on('message', async message => {
  if(message.content.startsWith(prefix + 'سيت سجن')|| message.content.startsWith("سيت ميوت")|| message.content.startsWith(prefix+"سيت ميوت")|| message.content.startsWith(prefix+"set-mute")) {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return;
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])
    if (!role) return message.reply('Role?')
    let embed = new Discord.MessageEmbed()
    .setAuthor(client.user.username, client.user.avatarURL({dynamic: true}))
    .setDescription(`Done Set Role : ${role}`)
    .setFooter(message.author.username, message.author.avatarURL({dynamic: true}))
    .setTimestamp()
    .setColor('GREEN')
    db.set(`role_${message.guild.id}`, role.id)
    await message.channel.send(embed)
  }
})





client.on('message', async message => {
  if (message.content.startsWith(prefix + 'سجن')|| message.content.startsWith("ميوت")|| message.content.startsWith(prefix+"mute")|| message.content.startsWith("كتم")) {
   
    try {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      if (!message.guild.member(message.author).hasPermission('ADMINISTRATOR')) return;
    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let data = db.get(`role_${message.guild.id}`);
    let role = message.guild.roles.cache.find(role => role.id === data);
    if(!user) return message.channel.send('من فضلك قم بإختيار العضو')
    if(!role) return await message.channel.send('من فضلك قم بإختيار رتبة السجن او الميوت ');
    
     let member = await message.guild.member(user);
    
let embed1 = new Discord.MessageEmbed()
.setDescription('اختار سبب الميوت او السجن')

  let option = new disbut.MessageMenuOption()
  .setLabel('سب')
  .setValue('role') 
  .setDescription('سجن او كتم ادا سب شخص')
   
  let option1 = new disbut.MessageMenuOption()
  .setLabel('إستهبال فالشات')
  .setValue('2') 
  .setDescription('إستهبال فالشات')
   
  let option2 = new disbut.MessageMenuOption()
  .setLabel('تنمر')
  .setValue('3') 
  .setDescription('سجن او كتم إدا تنمر شخص')
  
  let option3 = new disbut.MessageMenuOption()
  .setLabel('كلام غير لائق')
  .setValue('4')
  .setDescription('سجن او كتم ادا قال شخص كلام غير لائق')
 
  
let select = new disbut.MessageMenu()
  .setID('hey')
  .addOption(option)
  .addOption(option1)
  .addOption(option2)
  .addOption(option3)
  .setMaxValues(1) //optional
  .setMinValues(1) //optional
  .setPlaceholder('اختر شىء من هنا !'); //optional
const sendmenu = await message.channel.send(embed1, select)
const filter = (button) => button.clicker.user.id == message.author.id
let collector = sendmenu.createMenuCollector(filter, {time : 60000})
collector.on('collect', async (menu) => {
  if (menu.values[0] === 'role') {
   
      await member.roles.add(role).then(async () => {
       db.set(`member_${menu.guild.id}`,user.id);
      await menu.reply.send(`تم سجن او عمل ميوت او كتم لي منشنته انت`, true);
    });
    
    
    menu.reply.defer()
        }
        if (menu.values[0] === '2') {
   
      await member.roles.add(role).then(async () => {
      await db.set(`member_${menu.guild.id}`,user.id);
      await menu.reply.send(`تم سجن او عمل ميوت او كتم لي منشنته انت`, true);
    });
    
    
    menu.reply.defer()
        }
        if (menu.values[0] === '3') {
   
      await member.roles.add(role).then(async () => {
      await db.set(`member_${menu.guild.id}`,user.id);
      await menu.reply.send(`تم سجن او عمل ميوت وكتم لي منشنته انت`, true);
    });
   
   
    menu.reply.defer()
        }
        if (menu.values[0] === '4') {
   
      await member.roles.add(role).then(async () => {
      await db.set(`member_${menu.guild.id}`,user.id);
      await menu.reply.send(`تم سجن او عمل ميوت وكتم لي منشنته انت`, true);
    });
    
  
    menu.reply.defer()
        }
        })
        collector.on('end', async menu => {
         sendmenu.delete(embed1)
        })
    } catch (err) {
      message.channel.send(`${err}`)
    }
  }
})
///////

///npm i discord.js@12.5.3




////////
client.on("message", message => {
  if (message.content === prefix + "bot") {
    const embed = new Discord.MessageEmbed()
    .setDescription(`                         
**[ invite ]**
**[ click here ](https://discord.gg/JNjBWZeXX7)** 
**[ support ]**
**[ click here ](https://discord.gg/JNjBWZeXX7)**`)
      .setColor("BLACK")
    
      .addField("`my name`", `** ${client.user.tag} **`, true)

      .addField("`Server`", `**${client.guilds.cache.size} Server**`, true)
    
     .addField("`Usres`",  `**${client.users.cache.size}  Users**`, true)
    
    
     .addField( "`developer bot` ",`<@598231580812640273>`,true)


      .setImage("https://cdn.discordapp.com/attachments/696796419595567108/741981480653291570/image0-40.gif"
      );
    
    message.channel.send(embed);
    message.react("❤️ ");
  }
});




/////

////discord-inviter



/////


//////
client.on('message', message =>{
  let args = message.content.split(' ');
if(args[0] === `${prefix}emoji`){
let findEmoji = args[1];

if(!findEmoji || findEmoji === '') return  message.reply(`**حط الايموجي بعد الامر**`);

let EmojiId = findEmoji.slice(findEmoji.length - 19,findEmoji.length -1);

if(isNaN(EmojiId)) return message.reply(`**لم استطع العثور على الايموجي المطلوب**`);

let EmojiURL = `https://cdn.discordapp.com/emojis/${EmojiId}.png`;

let EmojiEmbed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(`Link Emoji ${findEmoji}`)
.setURL(`${EmojiURL}`)
.setImage(`${EmojiURL}`)

message.channel.send({ embed  : EmojiEmbed });

};
});
/////
client.on('message', function(message) {
let args = message.content.split(" ").slice('').join(" ");
if(message.author.bot)return;
const sugch = message.channel.id === "947961845380169728"
if (!sugch) return false;
if(message.content.startsWith('')){
  message.delete()
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setColor("RED")
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(`${message.author}

> **${args}**`)
.setFooter(`
──────────────────
أقترح أن`)
.setTimestamp()
message.channel.send(embed).then(msg => {
  msg.react('<a:true:949294810995503105> ').then( r => {
    msg.react(' <a:false:949294820994736228> ')
  })
}) 
}
}); 
//////////
client.on('message', function(message) {
let args = message.content.split(" ").slice('').join(" ");
if(message.author.bot)return;
const sugch = message.channel.id === "945319987596370002"
if (!sugch) return false;
if(message.content.startsWith('')){
  message.delete()
const embed = new Discord.MessageEmbed()
.setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true }))
.setColor("RED")
.setThumbnail(message.author.avatarURL({ dynamic: true }))
.setDescription(`${message.author}

> **${args}**`)
.setFooter(`
──────────────────
راى هو `)
.setTimestamp()
message.channel.send(embed).then(msg => {
  msg.react(`✅`).then( r => {
    msg.react('❌')
  })
}) 
}
}); 
//////
const { Probot } = require("discord-probot-transfer"); // npm i discord-probot-transfer
/// Important !
client.probot = Probot(client, {
  fetchGuilds: true, // enable event for all bot guilds
  data: [
    // server setting.
    {
      fetchMembers: true, // enable event for all guild member, not only the owner(s)
      guildId: "947618564322517012",
      probotId: "282859044593598464",
      owners: ["472444590868135949"],
    },
  ],
});

client.on("ready", () => console.log("Ready"));

// event.
client.probot.on("transfered", (guild, data, err) => {
  //
  if (err) return console.log(err);
  //
  var { member, price, receiver, owner, fullPrice } = data;
  //
  /* What you can do? let's see. */

   member.send(`> Thanks for your donate, \`${price}\`.`); // send message to member
  //
  guild.channel.send(`> ${member.user}, Thanks for your donate \`${price}\``); // send message in same channel
  //

  guild.channels.cache
    .get("id")
    .send(
      `> ${member.user} transfer \`${price}\` to ${receiver.user} in channel ${guild.channel}`
    ); // send message to specific channel
  //
  member.roles.add("id"); // add role(s) to member
  //
  member.roles.remove("id"); // remove role(s) from member
  //
  // add role(s) for member when price is 40000 **
  if (price == "40000") {
    member.roles.add("id");
  }
  // add role(s) for member when the receiption is owner
  if (owner) {
    member.roles.add("id");
  }
  // send file when transfer in specific channel
  if (guild.channel.id == "id") {
    guild.channel.send({ files: ["<Buffer | Link>"] });
  }
  //
});

// messageCreate when your djs version is 13.
client.on("message", async (message) => {
  var args = message.content.split(/ +/);
  if (message.content == "buy") {
    if (client.probot.check(message))
      return message.channel.send(` you already have an order !`);
    message.channel.send(
      "> Hello, \nyou have 5 minute for transfer `$5264` to owners."
    );

    var check = await client.probot.collect(message, {
      probotId: `282859044593598464`,
      owners: ["472444590868135949"],
      time: 1000 * 60 * 5, // 5 min
      userId: message.author.id, // when you not specify the user, return full collection for first transfer in main channel.
      price: 5000, 
      fullPrice: true // member must send the price with tax
    });
    if (check.status) {
      return message.channel.send(
        `> Thanks for your donate ${check.member},  ${check.priceTransfered}.`
      );
    } else if (check.error) {
      return message.channel.send(`> ${check.error.message} 😢`);
    } else {
      return message.channel.send(`> Required credit: ${check.priceRequired},
      you transfered: ${check.fullPrice}, 
      i got: ${check.priceTransfered},
      retry and transfer ${check.priceTotal}`);
    }
  } else if (args[0] == "tax") {
    if (!args[1]) return;
    var price = client.probot.tax(args[1]);
    message.channel.send(`${price.amount} => ${price.withTax}`);
  }
});

// More functions.
client.probot.getData(); // to get all data setup
client.probot.create({ guildId, probotId, owners, fetchMembers }); // create new data for server
client.probot.edit("guildId", { probotId, owners, fetchMembers }); // edit data for specific server
client.probot.delete("guildId"); // delele server data

// for use only tax 
const { tax } = require("discord-probot-transfer");
console.log(tax("5000")) // Object
//////
 //  قناة الراديو هنا // CODE BY KAHRBAA 
 const request = require('request');
const GUILDID = '914951287584456774'; // اي دي السيرفر  
const CHANNELID = '949384226514550805'; // اي دي الروم
 //  قناة الراديو هنا // CODE BY KAHRBAA 
const url = 'https://Qurango.net/radio/yasser_aldosari';
client.on('ready', async () => {
  console.log('تـم تشغيل القرأن الكريم');
  // CODE BY KAHRBAA كههربا
  voiceStay(GUILDID, CHANNELID);
  function voiceStay(guildid, channelid) {
    if (!guildid) throw new Error('ـاكد انك حطط ايدي السيرفر');
    if (!channelid) throw new Error('تـاكد انك حطط ايدي الروم');

    let guild = client.guilds.cache.get(guildid);
    const voiceChannel = guild.channels.cache.get(channelid);;
    if (!voiceChannel) {
      return
    }// CODE BY KAHRBAA كههربا
    voiceChannel.join()
      .then(connection => {
        const dispatcher = connection.play(url);
      });
  }
});
//////
client.on("message", async msg => {
if(msg.author.bot || msg.channel.type === "dm") return undefined;
let args = msg.content.split(' '); 
if(args[0].toLowerCase() == `${prefix}point`) {
await db.fetch(`point_${msg.guild.id}_${msg.author.id}`)
if(!args[1]) {
let pp = db.fetchAll().valueOf(`point_${msg.guild.id}`, { sort: 'data'})
let content = "";
for(let i = 0; i < pp.length; i++) {
let user = client.users.cache.get(pp[i].ID.split('_')[2]).id
content += `**\`#${i+1}\` | <@${user}> > \`${pp[i].data}\` Points**\n`
}
if(pp === null) return undefined;
const embed = new Discord.MessageEmbed()
.setAuthor('Points:')
.setDescription(content)
.setColor("#36393e")
msg.channel.send(embed)
}
}
})
client.on("message", async msg => {
if(msg.author.bot || msg.channel.type === "dm") return undefined;
let args = msg.content.split(' '); 
if(args[0].toLowerCase() == `${prefix}point+`) {
let num = msg.content.split(" ")[2]
var ss = msg.mentions.users.first();
const err = new Discord.MessageEmbed()
.setDescription(`command: \`${prefix}point+ ${msg.author} 1\``)
.setColor("BLUE")
if(!num || !ss) return msg.channel.send(err)
await db.fetch(`pointuser_${msg.guild.id}_${ss.id}`)
msg.channel.send(`**✅ | Done**`);
db.add(`point_${msg.guild.id}_${ss.id}`, Number(num))
}
})
client.on("message", async msg => {
if(msg.author.bot || msg.channel.type === "dm") return undefined;
let args = msg.content.split(' '); 
if(args[0].toLowerCase() == `${prefix}point-`) {
let num = msg.content.split(" ")[2]
var ss = msg.mentions.users.first();
const err = new Discord.MessageEmbed()
.setDescription(`command: \`${prefix}point- ${msg.author} 1\``)
.setColor("BLUE")
if(!num || !ss) return msg.channel.send(err)
let ssad = await db.fetch(`pointuser_${msg.guild.id}_${ss.id}`)
if(ssad == 0) return msg.channel.send(`**❌ | Error**`);
msg.channel.send(`**✅ | Done**`);
db.subtract(`point_${msg.guild.id}_${ss.id}`, Number(num))
}
})
////

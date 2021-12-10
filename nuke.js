const Discord = require("discord.js")

module.exports = {
    info: {
        name: "nuke",
        description: "Nuke chat",
        usage: "nuke",
        aliases: []
    },

    run: async function(client, message, args){
      if (!message.guild.me.permissions.has('EMBED_LINKS')) {
        return message.channel.send('I dont have permission **EMBED_LINKS**')
    }

  if (!message.guild.me.permissions.has('MANAGE_CHANNELS')) {
        return message.channel.send('I dont have permission to delete channels.\n**I need this permission: `MANAGE_CHANNELS`**')
    }
  if(!message.member.permissions.has("MANAGE_CHANNELS")) {
    return message.channel.send("You cannot use this command, do you need this permission **MANAGE_CHANNELS**")
  }

    let positionn = message.channel.position
  
    message.channel.clone().then((canal) => {
  
    message.channel.delete()
  
    canal.setPosition(positionn)

    const embed = new Discord.MessageEmbed()
    .setTitle(`<a:WarnFlash:900499026829512826> | CHAT NUKED `)
    .setImage("https://media.discordapp.net/attachments/901716135274246204/904578405599686656/explosion.gif")
    .setFooter(`Chat nuked by: ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    .setColor(0xFF0000)
    canal.send({
      embeds: [embed]
    })
  
    });
}
}

/// rtx#3317

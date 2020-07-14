const {
  workingColor,
  errorColor,
  successColor,
  neutralColor
} = require("../config.json");
const Discord = require("discord.js");

module.exports = {
  name: "say",
  description: "Say something in a specified channel.",
  usage: "say",
  cooldown: 3,
  allowDM: true,
  execute(message, args) {
    const rawSendTo = args[0]
    args.splice(0, 1)
    var toSend = args.join(" ")

    //message.delete();
    if (message.author.id == "722738307477536778") {
      const embed = new Discord.MessageEmbed()
        .setColor(workingColor)
        .setTitle("Say")
        .setDescription("Saying...")
        .setFooter("Executed by " + message.author.tag);
      message.channel.send(embed)
        .then(msg => {
          const sendTo = msg.client.channels.cache.get(rawSendTo)
          sendTo.send(toSend)
          const embed = new Discord.MessageEmbed()
            .setColor(successColor)
            .setTitle("Say")
            .setDescription("Said!")
            .setFooter("Executed by " + message.author.tag);
          msg.edit(embed)
        })
    }
  }
};

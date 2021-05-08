import { successColor } from "../../config.json"
import Discord from "discord.js"
import { Command } from "../../index"

const command: Command = {
  name: "bulksend",
  description: "Send messages in a channel, ready to be edited.",
  usage: "+bulksend <channel> <amount>",
  roleWhitelist: ["764442984119795732"], //Discord Administrator
  execute(interaction: Discord.CommandInteraction, args: string[]) {
    const sendTo = interaction.client.channels.cache.get(args[0].replace(/[\\<>@#&!]/g, "")) as (Discord.TextChannel | Discord.NewsChannel)
    let t = Number(args[1]) as number
    if (!t) throw "You need to provide a number of messages to delete!"
    for (t; t > 0; t--) { sendTo.send("Language statistics will be here shortly!") }
    const embed = new Discord.MessageEmbed()
      .setColor(successColor)
      .setAuthor("Bulk Send")
      .setDescription(sendTo)
      .setFooter(`Executed by ${interaction.user.tag}`, interaction.user.displayAvatarURL({ format: "png", dynamic: true }))
    if (t == 1) embed.setTitle("Success! Message sent.")
    else embed.setTitle("Success! Messages sent.")
    interaction.reply(embed)
  }
}

export default command

import { gql } from "@apollo/client"



export const menuPageQuery = gql`
query getMenuPageQuery {
    getUser {
        discordId
        discordTag
        avatar
      }
      getMutualGuilds {
        included {
          name
          id
          icon
        }
        excluded {
          name
          id
          icon
        }
      }
}
`;

export const dashboardPageQuery = gql`
query getDashboardPageQuery($guildId: String!) {
    getUser {
        discordId
        discordTag
        avatar
      }
      getMutualGuilds {
        included {
          name
          id
          icon
        }
        excluded {
          name
          id
          icon
        }
      }
      getGuildConfig(guildId: $guildId) {
        guildId
        prefix
        defaultRole
        memberLogChannel
        logChannel
        bumpChannelServers
        bumpChannelBots
        bumpServerDescription
        bumpServerInviteurl
      }
      getGuildRoles (guildId: $guildId){
        id
        name
      }
      getGuildChannel (guildId: $guildId){
        id
        name
      }
}
`;
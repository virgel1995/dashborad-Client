import { gql } from "@apollo/client"


export const updateGuildPrefixMutation = gql`
mutation UpdateGuildPrefix($guildId: String!, $prefix: String){
updateGuildPrefix(guildId: $guildId , prefix: $prefix){
    prefix
    guildId
    }
}
`;
export const updateDefaultRoleMutation = gql`
mutation updateDefaultRole($guildId: String!, $defaultRole: String){
    updateDefaultRole(guildId: $guildId , defaultRole: $defaultRole){
    defaultRole
    guildId
    }
}
`;
export const updateMemberLogChannelMutation = gql`
mutation updateMemberLogChannel($guildId: String!, $memberLogChannel: String){
    UpdateMemberLogChannel(guildId: $guildId , memberLogChannel: $memberLogChannel){
        memberLogChannel
        guildId
    }
}
`;
// export const updateModLogChannelMutation = gql`
// mutation UpdateMemberLogChannel($guildId: String!, $memberLogChannel: String){
//     UpdateModLogChannel(guildId: $guildId , memberLogChannel: $memberLogChannel){
//         memberLogChannel
//         guildId
//     }
// }
// `;
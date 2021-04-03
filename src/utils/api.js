import axios from "axios"



export function getUserDetails(){
    return axios.get("http://dashboaerd-api.virgelroot.repl.co/api/auth" , {
        withCredentials :true
    })
}

export function getGuilds(){
    return axios.get("http://dashboaerd-api.virgelroot.repl.co/api/discord/guilds" , {
        withCredentials :true
    })
}
export function getGuildConfig(guildId){
    return axios.get(`http://dashboaerd-api.virgelroot.repl.co/api/discord/guilds/${guildId}/config` , {
        withCredentials :true
    })
}
export function updateGuildPrefix(guildId, prefix){
    return axios.put(`http://dashboaerd-api.virgelroot.repl.co/api/discord/guilds/${guildId}/prefix` ,{
        prefix
    }, {
        withCredentials :true
    })
}

export function updateDefaultRole(guildId, defaultRole){
    return axios.put(`http://dashboaerd-api.virgelroot.repl.co/api/discord/guilds/${guildId}/roles/default` ,{
        defaultRole
    }, {
        withCredentials :true
    })
}
export function getGuildRoles(guildId){
    return axios.get(`http://dashboaerd-api.virgelroot.repl.co/api/discord/guilds/${guildId}/roles` , {
        withCredentials :true
    })
}


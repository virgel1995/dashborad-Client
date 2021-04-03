/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line react-hooks/exhaustive-deps */

import React from "react"
import { Image } from 'react-bootstrap';
import { GuildConfig, GuildWelcome } from "../../components"
import {
    useQuery,
    useMutation,
} from "@apollo/client"

import { dashboardPageQuery } from "../../graphql/queris"

import {
    updateGuildPrefixMutation,
    updateDefaultRoleMutation,
    updateMemberLogChannelMutation,
} from "../../graphql/mutations"
export function DashboardPage({
    history,
    match
}) {
    const { loading, error, data } = useQuery(dashboardPageQuery, { variables: { guildId: match.params.id } })
    const [updatePrefix] = useMutation(updateGuildPrefixMutation)
    const [updateDefaultRole] = useMutation(updateDefaultRoleMutation)
    const [updateMemberLogChannel] = useMutation(updateMemberLogChannelMutation)



    const updateGuildPrefixParent = async (prefix) => {
        try {const response = await updatePrefix({
                variables: {
                    guildId: match.params.id,
                    prefix
                }});} catch (e) { console.error(e.message)}
    }

    const updateGuildRoleParent = async (roleId) => {
        try {
            const response = await updateDefaultRole({
                variables: {
                    guildId: match.params.id,
                    defaultRole: roleId}});  } catch (e) {console.error(e.message)}
    }
    const updateMemberLogParent = async (channelId) => {
        try {
            const response = await updateMemberLogChannel({
                variables: {
                    guildId: match.params.id,
                    memberLogChannel : channelId,
                }
            });
            console.log(response)
        } catch (e) {
            console.error(e.message)
        }
    }
    if (!loading && !error) {
        const {
            getUser,
            getGuildConfig,
            getGuildRoles,
            getGuildChannel,
        } = data
        return (
            <div>
                <h1 className="text-center">DashboardPage </h1>
                <GuildConfig
                    user={getUser}
                    config={getGuildConfig}
                    roles={getGuildRoles}
                    channels={getGuildChannel}
                    updateMemberLog = {updateMemberLogParent }
                    updatePrefix={updateGuildPrefixParent}
                    updateRole={updateGuildRoleParent}
                />
                <GuildWelcome />

            </div>

        );
    } return <div className="text-center align-content-center justify-content-center"> <Image src="https://cdn.discordapp.com/icons/801586699108745227/9d7b1008a291fff12aba70d3a5b14ed4.png" className="App-logo w-50  rounded-circle hvr-box-shadow-inset guild-img" thumbnail /></div>
}



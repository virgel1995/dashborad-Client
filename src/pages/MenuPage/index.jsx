/* eslint-disable no-unused-vars */
/* eslint-disable-next-line react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { MenuComp, MenuNavbar, MenuFooter } from "../../components"
import { getUserDetails, getGuilds } from "../../utils/api"
import {  Image } from 'react-bootstrap';
import { useQuery } from "@apollo/client"
import { menuPageQuery}  from "../../graphql/queris"

export function MenuPage({
    history,
}) {
    const { loading , error , data } = useQuery(menuPageQuery)
if (!loading && !error){
    console.log(data)
     console.log(error)
    const { getMutualGuilds } = data
    // console.log(getMutualGuilds)
    return (
        <div>
 <MenuNavbar />
<MenuComp guilds={ getMutualGuilds }  />
<h1>menue</h1>
 {/* <MenuHeader /> */}
     <MenuFooter /> 
        </div>
    )
} return <div className="text-center align-content-center justify-content-center"> <Image src="https://cdn.discordapp.com/icons/801586699108745227/9d7b1008a291fff12aba70d3a5b14ed4.png" className="App-logo w-50  rounded-circle hvr-box-shadow-inset guild-img" thumbnail /></div>

}

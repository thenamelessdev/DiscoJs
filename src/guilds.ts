import { api } from "./useful.js";

export async function ban(guildId:string, userId:string) {
    await api(`/guilds/${guildId}/bans/${userId}`, "PUT", true);
}

export async function unban(guildId:string, userId:string) {
    await api(`/guilds/${guildId}/bans/${userId}`, "DELETE", true);
}

export async function kick(guildId:string, userId:string) {
    await api(`/guilds/${guildId}/members/${userId}`, "DELETE", true);
}
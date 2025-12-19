import { confStat, configs, sendError } from "./config.js";

export async function sendMessage(channelId: string, message?: string, embeds?:any) {
    if (!confStat) {
        throw new Error("Missing config");
    }
    try {
        const response = await fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bot ${configs.token}`
            },
            body: JSON.stringify({
                content: message,
                embeds: embeds
            })
        });
        if (!response.ok) {
            await sendError(`There was an error while sending the api request. Status code: ${response.status}`);
            throw new Error(`There was an error while sending the api request. Status code: ${response.status}`);
        }
        const json = await response.json();
        return json;
    }
    catch (err) {
        await sendError("There was an error while sending the api request.");
        throw new Error("There was an error while sending the api request.");
    }
}

export async function deleteMessage(messageId:string, channelId:string) {
    if (!confStat) {
        throw new Error("Missing config");
    }
    try {
        const response = await fetch(`https://discord.com/api/v10/channels/${channelId}/messages/${messageId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bot ${configs.token}`
            }
        });
        if (!response.ok) {
            await sendError(`There was an error while sending the api request. Status code: ${response.status}`);
            throw new Error(`There was an error while sending the api request. Status code: ${response.status}`);
        }
    }
    catch (err) {
        await sendError("There was an error while sending the api request.");
        throw new Error("There was an error while sending the api request.");
    }
}

export async function replyMessage(messageId:string, channelId: string, message?: string, embeds?:any) {
    if (!confStat) {
        throw new Error("Missing config");
    }
    try {
        const response = await fetch(`https://discord.com/api/v10/channels/${channelId}/messages`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bot ${configs.token}`
            },
            body: JSON.stringify({
                content: message,
                embeds: embeds,
                message_reference: {
                    message_id: messageId
                }
            })
        });
        if (!response.ok) {
            await sendError(`There was an error while sending the api request. Status code: ${response.status}`);
            throw new Error(`There was an error while sending the api request. Status code: ${response.status}`);
        }
        const json = await response.json();
        return json;
    }
    catch (err) {
        await sendError("There was an error while sending the api request.");
        throw new Error("There was an error while sending the api request.");
    }
}

export async function editMessage(channelId: string, messageId:string, message?: string, embeds?:any) {
    if (!confStat) {
        throw new Error("Missing config");
    }
    try {
        const response = await fetch(`https://discord.com/api/v10/channels/${channelId}/messages/${messageId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bot ${configs.token}`
            },
            body: JSON.stringify({
                content: message,
                embeds: embeds
            })
        });
        if (!response.ok) {
            await sendError(`There was an error while sending the api request. Status code: ${response.status}`);
            throw new Error(`There was an error while sending the api request. Status code: ${response.status}`);
        }
        const json = await response.json();
        return json;
    }
    catch (err) {
        await sendError("There was an error while sending the api request.");
        throw new Error("There was an error while sending the api request.");
    }
}
import { confStat, configs, sendError } from "./config.js";

export async function sendMessage(channelId: string, message: string) {
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
                content: message
            })
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
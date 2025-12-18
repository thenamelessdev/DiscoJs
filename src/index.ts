interface configInteface{
    token?: string,
    errorChannelId?: string
};
export let configs:configInteface = {}
export let confStat = false;

export function config(token:string, errorChannelId:string){
    configs.token = token
    configs.errorChannelId = errorChannelId;
    confStat = true;
}
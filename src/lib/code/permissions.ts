import { get } from 'svelte/store';
import { servers } from '$lib/code/global';

export enum Permission {
    viewStats = "VIEW_STATS",
    viewConsole = "VIEW_CONSOLE",
    useConsole = "USE_CONSOLE",
    useServerActions = "USE_SERVER_ACTIONS",
    editServer = "EDIT_SERVER",
}

export function hasPermission(perm: Permission, serverId?: string): boolean {
    if (serverId == undefined) {
        return false;
    }

    const server = get(servers).find((s) => s.serverId == serverId);
    if (!server) {
        return false;
    }

    return server?.serverPermissions?.includes(perm) ?? false;
}
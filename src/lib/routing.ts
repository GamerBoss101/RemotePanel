import { writable } from 'svelte-local-storage-store';

export enum Page {
    About,
    Dashboard,
    Servers,
    Settings,
}

// used for testing purposes
export const baseUrl = 'https://192.168.1.100:2096';
//export const baseUrl = '';

export const selectedPage = writable('selectedPage', Page.Dashboard);

export function navigateToPage(pageName: Page) {
    selectedPage.set(pageName);
}

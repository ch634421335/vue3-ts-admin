export {};

declare global {
    interface Window {
        __app__: any,
        $: any,
        less: any
    }
}

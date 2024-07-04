export default class GlobalEventManager{
    /**
     * Function to register a listener in the global scope
     * @param name - name of the event to be listened to
     * @param cb - callback to be executed once the event occurs
     */
    static addListener(name: string, cb: EventListener){
        window.addEventListener(name, cb);
    }

    /**
     * Function to dispatch an event
     * @param name - name of the event to be dispatched
     * @param data - data to be sent in the event
     */
    static dispatch(name: string, data?: any){
        const event = new CustomEvent(name, {
            detail: data
        });
        window.dispatchEvent(event);
    }
}
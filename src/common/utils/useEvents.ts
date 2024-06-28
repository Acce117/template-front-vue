function useEvents(){
    function addListener(name: string, cb: EventListener){
        window.addEventListener(name, cb);
    }

    function dispatch(name: string, data?: any){
        const event = new CustomEvent(name, {
            detail: data
        });
        window.dispatchEvent(event);
    }

    return {
        addListener,
        dispatch
    }
}

export default useEvents;
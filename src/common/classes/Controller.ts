import { useSendRequest, type UseSendRequestResult } from "../utils/useSendRequest";

export abstract class Controller<T extends Object> {
    readonly url: string = '';

    public getElements(params?: Object): UseSendRequestResult{
        return useSendRequest({
            url: this.url as string,
            data: params
        })
    }
    
    public createElement(data: T): UseSendRequestResult {
        return useSendRequest({
            url: this.url as string,
            method: "POST",
            data: data
        })
    }

    public delete(id: number | string): UseSendRequestResult{
        return useSendRequest({
            url: `${this.url as string}/${id}`,
            method: 'DELETE',
        })
    }

    public update(id: number | string, data: T): UseSendRequestResult{
        return useSendRequest({
            url: `${this.url as string}/${id}`, 
            method: 'PATCH',
            data: data
        })
    }
}
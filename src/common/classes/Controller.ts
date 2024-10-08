import { useSendRequest, type UseSendRequestResult } from "../utils/useSendRequest";

export function BaseController<T extends Object, I>(url: string = '') {
    return class {
        readonly url: string = url;

        public getElements(params?: Object): UseSendRequestResult {
            return useSendRequest<I[]>(
                this.url,
                { data: params }
            )
        }

        public createElement(data: T): UseSendRequestResult {
            return useSendRequest(
                this.url,
                { method: "POST", data: data }
            )
        }

        public delete(id: number | string): UseSendRequestResult {
            return useSendRequest(
                `${this.url}/${id}`,
                { method: 'DELETE' }
            )
        }

        public update(id: number | string, data: T): UseSendRequestResult {
            return useSendRequest(
                `${this.url}/${id}`,
                { method: 'PATCH', data: data }
            )
        }
    }
}

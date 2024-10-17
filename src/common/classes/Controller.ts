import { useSendRequest, type SendRequestTools } from "../utils/useSendRequest";

export function BaseController<T extends Object>(url: string = '') {
    return class {
        readonly url: string = url;

        public getElements(params?: Object): SendRequestTools {
            return useSendRequest<T[]>(
                this.url,
                { data: params }
            );
        }

        public createElement(data: T): SendRequestTools {
            return useSendRequest(
                this.url,
                { method: "POST", data: data }
            );
        }

        public delete(id: number | string): SendRequestTools {
            return useSendRequest(
                `${this.url}/${id}`,
                { method: 'DELETE' }
            );
        }

        public update(id: number | string, data: T): SendRequestTools {
            return useSendRequest(
                `${this.url}/${id}`,
                { method: 'PATCH', data: data }
            );
        }
    }
}

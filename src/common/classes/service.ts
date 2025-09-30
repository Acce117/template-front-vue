import { useSendRequest, type SendRequestTools } from "../utils/useSendRequest";

export interface IService<T> {
    readonly url: string;
    getElements(params?: Object): SendRequestTools;

    createElement(data: T): SendRequestTools;

    delete (id: number | string): SendRequestTools;

    update(id: number | string, data: T): SendRequestTools;
}

export function BaseService(url: string = '') {
    return class {
        readonly url: string = url;

        public getElements(params?: Object): SendRequestTools {
            return useSendRequest(
                this.url,
                { data: params }
            );
        }

        public createElement(data: any): SendRequestTools {
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

        public update(id: number | string, data: any): SendRequestTools {
            return useSendRequest(
                `${this.url}/${id}`,
                { method: 'PATCH', data: data }
            );
        }
    }
}

export declare class Resource {
    created: number;
    id: string;
    static isValid(schema: Resource.CreationParams, inQuestion: any): boolean;
}
export declare namespace Resource {
    class CreationParams {
        constructor(params?: Resource.CreationParams);
    }
}

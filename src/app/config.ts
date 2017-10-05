export class Config{
    constructor(
        public estadoactivo:string,
        public marcador:boolean,
        public col:string,
        public otro: string,
        public listEstados:Array<string>,
        public urlIframe?:string
    )
    {}
}
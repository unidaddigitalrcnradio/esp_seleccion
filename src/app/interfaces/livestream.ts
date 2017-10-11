export class Livestream
{
    public  id:string
    public  src:string
    public  estadol:boolean

    constructor(_id:string,_src:string,_estadol:boolean){
        this.id = _id;
        this.src = _src;
        this.estadol = _estadol;
    }
}
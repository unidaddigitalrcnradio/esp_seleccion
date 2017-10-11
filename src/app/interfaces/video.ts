import { Youtube } from "./youtube";
import { Livestream } from "./livestream";

export class Video
{
    public  youtube:Youtube
    public  livestream:Livestream

    constructor(_youtube,_livestream){
        this.youtube = _youtube;
        this.livestream = _livestream;
    }
}
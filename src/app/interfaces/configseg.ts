import { Video } from "./video";

export class Configseg{

        public  estado:string
        public  listaEstados:Array<string>
        public  video:Video
        public  actvModVideo:boolean
        public  actvModDetalle:boolean
        public  actvModNoticias:boolean
        public  actvModDetalle2:boolean
        public  actvModGaleria:boolean
        public  dateUltAct:Date
        public  nameHowMod:string

        constructor(_estado:string,
                _listaEstados:Array<string>,
                _video:Video,
                _actvModVideo:boolean,
                _actvModDetalle:boolean,
                _actvModNoticias:boolean,
                _actvModDetalle2:boolean,
                _actvModGaleria:boolean,
                _dateUltAct:Date,
                _nameHowMod:string
                ){
                        this.estado = _estado;
                        this.listaEstados = _listaEstados;
                        this.video = _video;
                        this.actvModVideo = _actvModVideo;
                        this.actvModDetalle = _actvModDetalle;
                        this.actvModDetalle2 = _actvModDetalle2;
                        this.actvModGaleria = _actvModGaleria;
                        this.actvModNoticias = _actvModNoticias;
                        this.dateUltAct = _dateUltAct;
                        this.nameHowMod = _nameHowMod;


        }
}
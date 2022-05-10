import express from 'express';
import { Usuario } from '../models/usuario.model';
export default class Server{
public app: express.Application;
public port:number=3000;
constructor(){
this.app=express();   
}
start(callback: Function){
this.app.listen(this.port, callback());  
}
}

import mongoose  from 'mongoose';
import Server from './clases/server';
import cors from 'cors';
import userRoutes from './routes/usuario';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import postRoutes from './routes/post';
const server = new Server();
//body-parser
server.app.use(bodyParser.urlencoded({extended:true}));
server.app.use(bodyParser.json());
//FileUpload
server.app.use(fileUpload({useTempFiles:true}));
//Configurar CORS
server.app.use(cors({origin:true,credentials:true}));
//Rutas de mi app
server.app.use('/user',userRoutes);
server.app.use('/post',postRoutes);    
//Conectar BD
mongoose.connect('mongodb://localhost:27017/fotosgram2',
    //{useUnifiedTopology:true,useNewUrlParser:true,useCreateIndex:true},
    (err)=>{
        if(err)throw err;
            console.log('Base de datos ONLINE2');
    }
)
//Levantar el express
server.start(()=>{
    console.log(`Servidor corriendo en puerto ${server.port}`);
});

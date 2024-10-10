import mongoose, { connect } from "mongoose";

const conectDB = async () => {
    mongoose
    .connect('mongodb://localhost:27017/tarefas')
    .then(() => console.log("Conectado ao MongoDB"))
    .catch((erro) => console.error("Erro ao conectar ao MongoDB:", erro))

}


export default conectDB
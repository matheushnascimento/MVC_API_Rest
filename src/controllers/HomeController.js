import Aluno from "../models/Aluno";
class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Matheus",
      sobrenome: "Nascimento",
      email: "matheus@gmail.com",
      idade: 22,
      peso: 72,
      altura: 1.72,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();

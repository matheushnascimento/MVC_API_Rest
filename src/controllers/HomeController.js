import Aluno from "../models/Aluno";
class HomeController {
  async index(req, res) {
    const aluno = new Aluno({
      name: "Matheus",
      last_name: "Nascimento",
      email: "matheus@gmail.com",
      age: 22,
      weight: 72,
      height: 1.72,
    });

    res.json(aluno);
  }
}

export default new HomeController();

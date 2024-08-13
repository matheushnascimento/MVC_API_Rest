import Aluno from "../models/Aluno";
import knex from "../database";
class HomeController {
  async index(req, res) {
    const aluno = new Aluno({
      name: "",
      last_name: "Nascimento",
      email: "matheus@gmail.com",
      age: 22,
      weight: 74,
      height: 1.72,
    });

    await knex("alunos").insert(aluno);
    res.json(aluno);
  }
}

export default new HomeController();

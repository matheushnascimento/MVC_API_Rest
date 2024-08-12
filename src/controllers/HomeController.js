class HomeController {
  index(req, res) {
    res.json({ everythingUp: true });
  }
}

export default new HomeController();

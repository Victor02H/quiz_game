import axios from "axios";

export default async function handler(req, res) {
  const { amount, category, difficulty } = req.query;

  await axios.get(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
    .then(({ data }) => res.status(200).json(data))
    .catch((err) => console.log(err))
}

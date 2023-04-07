import axios from "axios";

export default async function handler(req, res) {
  await axios.get("https://opentdb.com/api_category.php")
    .then(({ data }) => res.status(200).json(data))
    .catch((err) => console.log(err));
}

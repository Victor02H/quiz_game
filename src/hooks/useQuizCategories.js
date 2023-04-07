import axios from "axios";

export default async function useQuizCategories() {
  const { data } = await axios.get("/api/categories");

  return [
    {
      quizCategories: data.trivia_categories,
    }
  ];
}

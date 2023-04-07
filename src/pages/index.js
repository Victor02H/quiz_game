
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [quizCategories, setQuizCategories] = useState([]);
  const [quizQuestions, setQuisQuestions] = useState([]);

  const [amountQuestions, setAmountQuestions] = useState(1);
  const [categorySelected, setCategorySelected] = useState("");
  const [difficultySelected, setDifficultySelected] = useState("");

  useEffect(() => {
    axios.get("/api/categories")
      .then(({ data }) => setQuizCategories(data.trivia_categories))
      .catch((err) => console.log(err));
  }, []);

  async function searchQuestions() {
    await axios.get("/api/questions", {
      params: {
        amount: amountQuestions,
        category: categorySelected,
        difficulty: difficultySelected,        
      }
    })
      .then(({ data }) => setQuisQuestions(data.results))
      .catch((err) => console.log(err));
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-200">

      <div className="w-8/12 flex justify-between">
        <div className="w-3/12">
          <label htmlFor="">Amout of questions</label>

          <input type="number" value={amountQuestions} onChange={(e) => setAmountQuestions(e.target.value)} className="w-full" />
        </div>

        <div className="w-3/12">
          <label htmlFor="">Category</label>

          <select name="" id="" value={categorySelected} className="w-full" onChange={(e) => setCategorySelected(e.target.value)}>
            <option value="" disabled>Choose an option</option>

            {quizCategories?.map((category) => {
              return (
                <option key={category.id} value={category.id}>{category.name}</option>
              );
            })}
          </select>
        </div>

        <div className="w-3/12">
          <label htmlFor="">Difficulty</label>

          <select name="" id="" value={difficultySelected} className="w-full" onChange={(e) => setDifficultySelected(e.target.value)}>
            <option value="" disabled>Choose an option</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="w-20 h-6">
          <button onClick={searchQuestions}>Ok</button>
        </div>
      </div>

      {quizQuestions?.map((question) => {
        return (
          <div key={question.id}>
            {question.question}
          </div>
        );
      })}

    </main>
  )
}

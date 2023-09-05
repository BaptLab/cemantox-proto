import axios from "axios";

const fetchAnswer = async (wordSubmitted) => {
  try {
    console.log("word submitted in axios : ", wordSubmitted);
    const response = await axios.get(`http://127.0.0.1:8080/word/guess/${wordSubmitted}`);
    console.log("response from axios : ", response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchAnswer;

// import { response } from "express";
import { useState } from "react";

const App = () => {
  const [image, setImage] = useState(null);
  // const [value, setValue] = useState("");
  // const [response, setResponse] = useState("");
  // const [error, setError] = useState("");
  // const surpriseOptions = [
  //   "ar panašu į banginį?",
  //   "ar spalva šviesi?",
  //   "ar tai vaikas?",
  // ];
  // const surprise = () => {
  //   const randomValue =
  //     surpriseOptions[Math.floor(Math.random() * surpriseOptions.length)];
  //   setValue(randomValue);
  // };

  const uploadImage = (e) => {
  // const uploadImage = async (e) => {
    // console.log(e.target.files)
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    setImage(e.target.files[0]);
    e.target.value = null;
    // try {
    //   const options = { method: "POST", body: formData };
    //   const response = await fetch("http://localhost:8000/upload", options);
    //   const data = await response.json(); // Pridėti 'await' laukimas??
    //   console.log(data);
    // } catch (err) {
    //   console.log(err);
    //   setError("kažkas neveikia, dar syk bandyk");
    // }
  };
  // console.log(value);

  // const analyzeImage = async () => {
  //   setResponse("");
  //   if (!image) {
  //     setError("nerastas paveikslas!");
  //     return;
  //   }

  //   try {
  //     const options = {
  //       method: "POST",
  //       body: JSON.stringify({ message: value }),
  //       headers: { "Content-type": "application/json" },
  //     };
  //     const response = await fetch("http://localhost:8000/openai", options);
  //   } catch (err) {
  //     console.log(err);
  //     setError("kažkas neveikia");
  //   }
  // };
  // const clear = () => {
  //   setImage(null);
  //   setValue("");
  //   setResponse("");
  //   setError("");
  // };
  return (
    <div className="app">
      <section className="search-section">
        <div className="image-container">
          {image && <img src={URL.createObjectURL(image)} />}
          {/* {image && <img src={URL.createObjectURL(e)} />} */}
        </div>
        <p className="extra-info">
          <span>
            <label htmlFor="files">įkelti paveikslėlį</label>{" "}
            <input
              onChange={uploadImage}
              id="files"
              accept="image/*"
              type="file"
              hidden
            />
          </span>
          komentavimui
        </p>
        {/* <p>
          Ką norėtum sužinoti apie paveikslėlį?&nbsp;
          <button className="surprise" onClick={surprise} disabled={response}>
            Nustebink mane
          </button>
        </p> */}
        {/* <div className="input-container">
          <input
            value={value}
            placeholder="ką matai paveikslėlyje.."
            onChange={(e) => setValue(e.target.value)}
          />
          {!response && !error && (
            <button onClick={analyzeImage}>Paklausk manęs</button>
          )}
          {response && error && <button onClick={clear}>Pašalinti</button>}
        </div>
        {error && <p>{error}</p>}
        {response && <p className="answer">{response}</p>} */}
      </section>
    </div>
  );
};

export default App;

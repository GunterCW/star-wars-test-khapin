let requestURL = `https://swapi.dev/api/people/`;
const input = document.querySelector("input");
const form = document.querySelector("form");
const error = document.querySelector(".error-text");

const sendRequest = async (url, id = "") => {
  try {
    const response = await fetch(url + `${id}`);
    const data = await response.json();
    error.textContent = "";
    return data;
  } catch (errorBlock) {
    error.textContent = "Что то пошло не так";
    document.querySelector(".homeworld").textContent = "N/D";
    document.querySelector(".card__title").textContent = "Имя";
    document.querySelector(".gender").textContent = "N/D";
    document.querySelector(".height").textContent = "N/D";
    document.querySelector(".mass").textContent = "N/D";
    document.querySelector(".color-eyes").style.background = "blue";
  }
};

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const userData = await sendRequest(requestURL, input.value);
  const planetData = await sendRequest(userData.homeworld);
  input.value = "";
  document.querySelector(".homeworld").textContent = planetData.name;
  document.querySelector(".card__title").textContent = userData.name;
  document.querySelector(".gender").textContent = userData.gender;
  document.querySelector(".height").textContent = userData.height;
  document.querySelector(".mass").textContent = userData.mass;
  document.querySelector(".color-eyes").style.background = userData.eye_color;
});

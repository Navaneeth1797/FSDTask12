function getRandomDogImage() {
  const dogApiUrl = "https://dog.ceo/api/breeds/image/random";

  fetch(dogApiUrl)
    .then((response) => response.json())
    .then((data) => {
      const container = document.getElementById("dogContainer");
      container.innerHTML = `<img src="${data.message}" class="img-fluid rounded" alt="Random Dog">`;
    })
    .catch((error) => {
      console.error("Error fetching dog image:", error);
      alert("Error fetching dog image.");
    });
}

getRandomDogImage();

document
  .getElementById("changeDogBtn")
  .addEventListener("click", getRandomDogImage);

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Content loaded");
  //   const greeting = document.createElement("h1");
  //   //root is in the html file in a div with the ID of root
  //   const root = document.querySelector("#root");

  //   greeting.textContent = "What's up world!";
  //   root.append(greeting);

  // fetch request returns a promise not data. Make request Get response then get data

  fetch("https://api.discogs.com/artists/52835", {
    method: "GET",
    headers: {
      "User-Agent": "JonathanG/2.0",
    },
  })
    .then(function (response) {
      console.log(response);
      return response.json();
    })

    .then(function (data) {
      console.log(data);
      showArtist(data);
      return data;
    });

  function showArtist(data) {
    console.log(data);
    const paragraph = document.createElement("p");
    paragraph.textContent = data.name;
    root.appendChild(paragraph);
  }

  
});

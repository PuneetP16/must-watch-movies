import React, { useState } from "react";
import "./styles.css";

var genreDictionary = {
  Action: [
    {
      title: "Mission: Impossible – Fallout",
      year: "2018",
      desc:
        "Ethan Hunt and the IMF team join forces with CIA assassin August Walker to prevent a disaster of epic proportions. Arms dealer John Lark and a group of terrorists known as the Apostles plan to use three plutonium cores for a simultaneous nuclear attack on the Vatican, Jerusalem and Mecca, Saudi Arabia."
    },
    {
      title: "Avengers: Endgame",
      year: "2019",
      desc:
        "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe."
    },
    {
      title: " The Dark Knight",
      year: "2008",
      desc:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    }
  ],
  Animation: [
    {
      title: "Toy Story 4",
      year: "2019",
      desc:
        "Woody, Buzz Lightyear and the rest of the gang embark on a road trip with Bonnie and a new toy named Forky. The adventurous journey turns into an unexpected reunion as Woody's slight detour leads him to his long-lost friend Bo Peep."
    },
    {
      title: "WALL·E",
      year: "2008",
      desc:
        "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind."
    },
    {
      title: "Toy Story",
      year: "1995",
      desc:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room."
    }
  ],
  Mystrey: [
    {
      title: "Spider-Man: Into the Spider-Verse",
      year: "2018",
      desc:
        "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities."
    },
    {
      title: "Gone Girl",
      year: "2014",
      desc:
        "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent."
    },
    {
      title: " Seven",
      year: "1995",
      desc:
        "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
    }
  ]
};

var genreWeKnow = Object.keys(genreDictionary);

export default function App() {
  var [selectedGenre, setGenre] = useState("Action");

  function genreChangeHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>Must Watch Movies</h1>
      <div className="button-div">
        {
          /*creating array from object and mapping each 
        element in the array to create buttons*/
          genreWeKnow.map((genre) => (
            <button
              onClick={() => genreChangeHandler(genre)}
              style={{
                width: "150px",
                fontSize: "1.5rem",
                fontWeight: "600",
                padding: "0.5rem 1rem",
                margin: "1rem",
                border: "3px solid #000",
                borderRadius: "8px",
                cursor: "pointer",
                backgroundColor: "#304",
                color: "#fff"
              }}
            >
              {genre}
            </button>
          ))
        }
      </div>
      <div className="list-div">
        {
          //displaying the list of series
          genreDictionary[selectedGenre].map((movies) => (
            <div
              style={{
                border: "3px solid black",
                borderRadius: "10px",
                maxWidth: "400px",
                padding: "0.5rem 1rem",
                margin: "1rem auto",
                backgroundColor: "#FEE2E2",
                fontSize: "1.3rem"
              }}
            >
              <h2>{movies.title}</h2>
              <h5>
                <em>{movies.desc}</em>
              </h5>
              <h5>{`Realese Year : ${movies.year}`}</h5>
            </div>
          ))
        }
        <div class="bottom-container">
          <div class="icons">
            <a
              class="footer-link"
              target="_blank"
              href="https://www.linkedin.com/in/puneet-patel-96b607a0/"
            >
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              class="footer-link"
              target="_blank"
              href="https://github.com/PuneetP16"
            >
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a
              class="footer-link"
              target="_blank"
              href="https://puneetpatel.netlify.app/"
            >
              <i class="fas fa-user fa-2x"></i>
            </a>
            <a
              class="footer-link"
              target="_blank"
              href="https://twitter.com/PatelPuneet16"
            >
              <i class="fab fa-twitter-square fa-2x"></i>
            </a>
          </div>
          <p class="copyright">© 2021 Puneet Patel</p>
        </div>
      </div>
    </div>
  );
}

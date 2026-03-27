// Girls Objects

const girls = [
  {
    name: "Emma",
    imgSrc: "./Girls1/Girls1.GIF",
    questions: [
      {
        category: "Social Media",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale social network è diventato il punto di riferimento per i video brevi e i trend virali?",
        correct_answer: "TikTok",
        incorrect_answers: ["Facebook", "LinkedIn", "Pinterest"],
      },
      {
        category: "Fashion",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale stilista italiana è famosa per il suo logo con l'occhio e il successo globale come influencer?",
        correct_answer: "Chiara Ferragni",
        incorrect_answers: [
          "Donatella Versace",
          "Miuccia Prada",
          "Alberta Ferretti",
        ],
      },
      {
        category: "Events",
        type: "multiple",
        difficulty: "easy",
        question:
          "Come si chiama l'evento di beneficenza annuale a New York noto come 'la notte più importante della moda'?",
        correct_answer: "Met Gala",
        incorrect_answers: [
          "Oscar Night",
          "Fashion Week Paris",
          "Grammy Awards",
        ],
      },
      {
        category: "Luxury",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale di queste città è considerata la capitale mondiale dell'Alta Moda (Haute Couture)?",
        correct_answer: "Parigi",
        incorrect_answers: ["Berlino", "Madrid", "Tokyo"],
      },
      {
        category: "Celebrity Gossip",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale famosa coppia di Hollywood si è separata nel 2016, scatenando anni di gossip sui loro figli?",
        correct_answer: "Brad Pitt e Angelina Jolie",
        incorrect_answers: [
          "Ben Affleck e Jennifer Lopez",
          "Tom Cruise e Katie Holmes",
          "Ryan Reynolds e Blake Lively",
        ],
      },
      {
        category: "Lifestyle",
        type: "multiple",
        difficulty: "easy",
        question:
          "Qual è il nome del cocktail a base di Prosecco, Aperol e soda, diventato un must degli aperitivi?",
        correct_answer: "Aperol Spritz",
        incorrect_answers: ["Negroni", "Mojito", "Manhattan"],
      },
      {
        category: "Reality TV",
        type: "multiple",
        difficulty: "easy",
        question:
          "In quale reality show i concorrenti vivono in una casa isolata dal mondo, costantemente ripresi?",
        correct_answer: "Grande Fratello",
        incorrect_answers: [
          "L'Isola dei Famosi",
          "Masterchef",
          "Uomini e Donne",
        ],
      },
      {
        category: "Jewelry",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale brand di gioielli è famoso per le sue scatoline color 'azzurro acquamarina'?",
        correct_answer: "Tiffany & Co.",
        incorrect_answers: ["Pandora", "Cartier", "Bulgari"],
      },
      {
        category: "Trends",
        type: "multiple",
        difficulty: "easy",
        question: "Cosa si intende per 'Capsule Collection'?",
        correct_answer: "Una linea di abiti in edizione limitata",
        incorrect_answers: [
          "Una collezione di pillole dimagranti",
          "Un tipo di arredamento moderno",
          "Un nuovo modello di smartphone",
        ],
      },
      {
        category: "Social Media Style",
        type: "multiple",
        difficulty: "easy",
        question:
          "Chi è l'utente con più follower al mondo su Instagram (escludendo l'account ufficiale della piattaforma)?",
        correct_answer: "Cristiano Ronaldo",
        incorrect_answers: ["Selena Gomez", "Kylie Jenner", "Lionel Messi"],
      },
    ],
    description: `"Amo stare dove succedono le cose: tra un red carpet e l'aperitivo più esclusivo in città. Se non è di tendenza o non è su Instagram, probabilmente non mi interessa.
                   Spero che tu abbia scelto il posto giusto per il nostro appuntamento!"`,

    finalMessage: `Stasera te la do... una possibilità`,
  },

  {
    name: "Lisa",
    imgSrc: "./Girls1/Girls2.gif",
    questions: [
      {
        category: "Cinema",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale personaggio di 'Mercoledì Addams' è diventato un'icona goth grazie alla recente serie TV?",
        correct_answer: "Jenna Ortega",
        incorrect_answers: ["Millie Bobby Brown", "Emma Watson", "Zendaya"],
      },
      {
        category: "Literature",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale scrittrice creò il mostro di Frankenstein durante una vacanza sul lago di Ginevra?",
        correct_answer: "Mary Shelley",
        incorrect_answers: ["Jane Austen", "Virginia Woolf", "Emily Brontë"],
      },
      {
        category: "Music",
        type: "multiple",
        difficulty: "easy",
        question:
          "Chi è il carismatico frontman della band 'The Cure', icona dello stile dark?",
        correct_answer: "Robert Smith",
        incorrect_answers: ["Marilyn Manson", "Dave Gahan", "Ian Curtis"],
      },
      {
        category: "Aesthetics",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale periodo storico ispira maggiormente la moda 'Gothic Lolita'?",
        correct_answer: "Epoca Vittoriana",
        incorrect_answers: ["Anni '70", "Rinascimento", "Antica Roma"],
      },
      {
        category: "Horror Classics",
        type: "multiple",
        difficulty: "easy",
        question:
          "Qual è il nome del vampiro protagonista del capolavoro del cinema espressionista 'Nosferatu'?",
        correct_answer: "Conte Orlok",
        incorrect_answers: [
          "Edward Cullen",
          "Lestat de Lioncourt",
          "Conte Dracula",
        ],
      },
      {
        category: "Mythology",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale creatura leggendaria si trasforma durante le notti di luna piena?",
        correct_answer: "Licantropo",
        incorrect_answers: ["Gargoyle", "Banshee", "Succube"],
      },
      {
        category: "Art",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale pittore è famoso per i suoi mondi onirici e inquietanti, come nel 'Trittico del Giardino delle delizie'?",
        correct_answer: "Hieronymus Bosch",
        incorrect_answers: ["Claude Monet", "Andy Warhol", "Sandro Botticelli"],
      },
      {
        category: "Occult",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale mazzo di carte viene usato per leggere il futuro o esplorare l'inconscio?",
        correct_answer: "Tarocchi",
        incorrect_answers: ["Carte da Poker", "Uno", "Magic: The Gathering"],
      },
      {
        category: "Cinema",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale film di animazione di Tim Burton narra di una sposa che torna dal regno dei morti?",
        correct_answer: "La Sposa Cadavere",
        incorrect_answers: ["Coraline", "Monster House", "Hotel Transylvania"],
      },
      {
        category: "Fashion Accessories",
        type: "multiple",
        difficulty: "easy",
        question:
          "Come si chiama il collarino stretto al collo tipico dell'estetica dark/goth?",
        correct_answer: "Choker",
        incorrect_answers: ["Piercing", "Corsetto", "Leggings"],
      },
    ],
    description: `"Preferisco il fascino delle ombre e del cinema horror alla noia della luce del sole. Cerco qualcuno che non abbia paura di esplorare il lato oscuro della bellezza insieme a me. 
                  Dimmi, hai mai letto qualcosa di veramente inquietante?"`,

    finalMessage: `Stasera ti estraggo l'anima...`,
  },

  {
    name: "Anna",
    imgSrc: "./Girls1/girls 3.gif",
    questions: [
      {
        category: "Literature",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale opera di Omero narra il lungo viaggio di ritorno di Ulisse a Itaca?",
        correct_answer: "Odissea",
        incorrect_answers: ["Iliade", "Eneide", "Divina Commedia"],
      },
      {
        category: "History",
        type: "multiple",
        difficulty: "easy",
        question:
          "In che anno è caduto il muro di Berlino, segnando la fine di un'era?",
        correct_answer: "1989",
        incorrect_answers: ["1945", "1968", "2001"],
      },
      {
        category: "Science",
        type: "multiple",
        difficulty: "easy",
        question: "Qual è l'elemento chimico più abbondante nell'universo?",
        correct_answer: "Idrogeno",
        incorrect_answers: ["Ossigeno", "Oro", "Azoto"],
      },
      {
        category: "Philosophy",
        type: "multiple",
        difficulty: "easy",
        question:
          "A quale filosofo si attribuisce la frase 'So di non sapere'?",
        correct_answer: "Socrate",
        incorrect_answers: ["Platone", "Nietzsche", "Cartesio"],
      },
      {
        category: "Art",
        type: "multiple",
        difficulty: "easy",
        question: "Chi dipinse il soffitto della Cappella Sistina in Vaticano?",
        correct_answer: "Michelangelo Buonarroti",
        incorrect_answers: [
          "Raffaello Sanzio",
          "Donatello",
          "Leonardo da Vinci",
        ],
      },
      {
        category: "Astronomy",
        type: "multiple",
        difficulty: "easy",
        question:
          "Qual è il pianeta del sistema solare famoso per i suoi spettacolari anelli?",
        correct_answer: "Saturno",
        incorrect_answers: ["Marte", "Giove", "Nettuno"],
      },
      {
        category: "Geography",
        type: "multiple",
        difficulty: "easy",
        question: "Qual è il fiume più lungo del mondo?",
        correct_answer: "Rio delle Amazzoni",
        incorrect_answers: ["Nilo", "Mississippi", "Danubio"],
      },
      {
        category: "Medicine",
        type: "multiple",
        difficulty: "easy",
        question:
          "Chi scoprì la penicillina, rivoluzionando la lotta alle infezioni?",
        correct_answer: "Alexander Fleming",
        incorrect_answers: ["Marie Curie", "Louis Pasteur", "Charles Darwin"],
      },
      {
        category: "Languages",
        type: "multiple",
        difficulty: "easy",
        question:
          "Quale lingua è considerata la 'madre' delle lingue romanze come italiano, francese e spagnolo?",
        correct_answer: "Latino",
        incorrect_answers: ["Greco Antico", "Sancrito", "Arabo"],
      },
      {
        category: "Politics",
        type: "multiple",
        difficulty: "easy",
        question: "Dove ha sede il Parlamento Europeo?",
        correct_answer: "Strasburgo",
        incorrect_answers: ["Ginevra", "Londra", "Berlino"],
      },
    ],
    description: `"Passo la maggior parte del mio tempo tra i libri e i corridoi dei musei; la curiosità è la mia guida. Se vuoi davvero conquistarmi, stimola la mia mente con una conversazione brillante. 
                  L'intelligenza è l'unica cosa che mi affascina davvero."`,

    finalMessage: `Stasera ti studio approfonditamente...`,
  },
];

//
//
//
//
// First Page Logic

const select = document.getElementById("character");
const visualButtons = document.querySelectorAll(".name-btn");

select.addEventListener("change", (e) => {
  document.querySelectorAll(".selectedGirl").forEach((girl) => {
    girl.classList.remove("selectedGirl");
  });

  const selected = document.getElementById(e.target.value);
  if (selected) {
    selected.classList.add("selectedGirl");
  }

  visualButtons.forEach((btn) => {
    if (btn.dataset.value === e.target.value) {
      btn.classList.add("is-selected");
    } else {
      btn.classList.remove("is-selected");
    }
  });
});

visualButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    select.value = value;
    select.dispatchEvent(new Event("change", { bubbles: true }));
  });
});

let character = "";

const form = document.getElementById("character-choice");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  character = document.getElementById("character").value;
  const selected = girls.filter((girl) => girl.name === character);
  const body = document.getElementById("welcome-body");
  body.classList.add("bar-background");
  start(selected[0]);
});
function start(girl) {
  const main = document.querySelector("main");
  const { name, imgSrc, questions, description, finalMessage } = girl;

  main.innerHTML = `
      <section id="animazione">
        <img src='${imgSrc}' alt="" />
      </section>
      <div id="sidebar" class="pixel-border"></div>
    `;

  const sidebar = document.getElementById("sidebar");

  let score = 0;
  let questionNumber = 0;
  const numOfQuestions = 5;
  let pulledQuestions = [];
  let usedQuestionsArr = [];
  let usedAnswersArr = [];

  function randomQuestionExtraction() {
    if (pulledQuestions.length === questions.length) {
      return null;
    }

    let selectedQuestion;

    do {
      const randomIndex = Math.floor(Math.random() * questions.length);
      selectedQuestion = questions[randomIndex];
    } while (pulledQuestions.includes(selectedQuestion));

    pulledQuestions.push(selectedQuestion);
    return selectedQuestion;
  }

  function getRandomAnswerOrder() {
    return [0, 1, 2, 3].sort(() => Math.random() - 0.5);
  }

  function checkAnswer(e, questionObj) {
    const { question, correct_answer } = questionObj;
    const buttonAnswers = document.querySelectorAll(".button-answer");

    buttonAnswers.forEach((btn) => {
      btn.disabled = true;
      btn.style.cursor = "not-allowed";
    });

    if (e.target.innerText.toLowerCase() === correct_answer.toLowerCase()) {
      e.target.classList.add("correct-answer");
      score++;
      usedAnswersArr.push(`Your answer: ${correct_answer} ✅`);
    } else {
      e.target.classList.add("wrong-answer");
      usedAnswersArr.push(
        `Your answer: ${e.target.innerText} ❌ - Correct answer: ${correct_answer} ✅`,
      );
    }

    usedQuestionsArr.push(question);

    setTimeout(() => {
      const nextQuestion = randomQuestionExtraction();
      displayNextQuestion(nextQuestion);
    }, 550);
  }

  function displayHtml() {
    if (document.getElementById("welcome-body")) {
      sidebar.innerHTML = `
          <main>
            <form class="welcome-form">
              <section class="title">
                <h1>Welcome to <strong>your worst date</strong></h1>
              </section>

              <section class="subtitle">
                <h2>Instructions</h2>
                <p>
                  ${description}
                </p>
              </section>

              <section >
                <button class="retro-btn" id="button-proceed" type="submit">Proceed</button>
              </section>
            </form>
          </main>
        `;

      const welcomeForm = document.querySelector(".welcome-form");

      welcomeForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const body = document.getElementById("welcome-body");
        body.setAttribute("id", "benchmark-body");
        displayHtml();
      });
    } else if (document.getElementById("benchmark-body")) {
      const body = document.getElementById("benchmark-body");
      body.classList.add("bar-background");
      sidebar.innerHTML = `
          <main class="quiz-space">
            <article id="question-display">
              <p id="question-title"></p>
            </article>
            <section id="button-space"></section>
          </main>
        `;

      const firstQuestion = randomQuestionExtraction();
      displayNextQuestion(firstQuestion);
    } else if (document.getElementById("result-body")) {
      const body = document.getElementById("result-body");
      body.classList.add("bar-background");
      sidebar.innerHTML = `<p>${score >= 3 ? "bravo," : "inutile,"} ne hai beccate ${score}</p>`;

      if (score >= 3) {
        sidebar.innerHTML += `<p>${finalMessage}</p>`;
      } else {
        sidebar.innerHTML += "<p>sparisci</p>";
      }

      sidebar.innerHTML += `<button class="retro-btn" id="try-again">🔥😉💋 puoi riprovarci</button>`;

      const tryAgain = document.getElementById("try-again");

      tryAgain.addEventListener("click", () => {
        const body = document.getElementById("result-body");
        body.setAttribute("id", "welcome-body");

        score = 0;
        questionNumber = 0;
        pulledQuestions = [];
        usedAnswersArr = [];
        usedQuestionsArr = [];

        displayHtml();
      });
    }
  }

  function displayNextQuestion(questionObj) {
    const buttonSpace = document.getElementById("button-space");
    const questionTitle = document.getElementById("question-title");

    if (!questionObj || questionNumber >= numOfQuestions) {
      questionTitle.innerText = "The Quiz is over.\nGo to your results!";
      buttonSpace.innerHTML = `<button class="retro-btn" id="result-button">Results</button>`;

      const resultButton = document.getElementById("result-button");
      resultButton.addEventListener("click", () => {
        const body = document.getElementById("benchmark-body");
        body.setAttribute("id", "result-body");
        displayHtml();
      });

      return;
    }

    const { question, correct_answer, incorrect_answers } = questionObj;
    const allAnswers = [...incorrect_answers, correct_answer];

    questionTitle.innerText = question;
    buttonSpace.innerHTML = "";
    questionNumber++;

    getRandomAnswerOrder().forEach((index) => {
      buttonSpace.innerHTML += `
          <button class="retro-btn button-answer">${allAnswers[index]}</button>
        `;
    });
    const buttonAnswers = document.querySelectorAll(".button-answer");
    buttonAnswers.forEach((button) => {
      button.addEventListener("click", (e) => checkAnswer(e, questionObj));
    });
  }

  displayHtml();
}

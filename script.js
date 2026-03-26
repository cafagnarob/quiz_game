// DOM Elements Declarations
// ciaone

const select = document.getElementById("character")
select.addEventListener("change", (e) => {
  const arrSelected = document.querySelectorAll(".selectedGirl")
  arrSelected.forEach((girl) => {
    girl.classList.remove("selectedGirl")
  })
  const name = document.getElementById(`${e.target.value}`)
  name.classList.add("selectedGirl")
})

let character = ""
const form = document.getElementById("character-choice")
form.addEventListener("submit", (e) => {
  e.preventDefault()
  character = document.getElementById("character").value
  start()
})
const start = function () {
  if (character === "Emma") {
    const main = document.querySelector("main")
    main.innerHTML = `<section id="animazione">
        <img src="./Girls1/Girls1.GIF" alt="" />
      </section>
      <div id="sidebar" class="pixel-border">
        <section id="domande">domande</section>
        <section id="risposte">risposte</section>
      </div>`

    const questionsGossip = [
      {
        category: "Music: Pop Culture",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which celebrity breakup shocked the music industry the most in recent years?",
        correct_answer: "Taylor Swift and Joe Alwyn",
        incorrect_answers: [
          "Ed Sheeran and Cherry Seaborn",
          "Adele and Rich Paul",
          "Billie Eilish and Jesse Rutherford",
        ],
      },
      {
        category: "Music: Rock",
        type: "multiple",
        difficulty: "easy",
        question:
          "What rock band is known for having one of the wildest tour lifestyles in history?",
        correct_answer: "Mötley Crüe",
        incorrect_answers: ["Coldplay", "Imagine Dragons", "U2"],
      },
      {
        category: "Music: Pop Culture",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which artist famously changed their stage name and rebranded their entire image?",
        correct_answer: "Prince",
        incorrect_answers: ["Drake", "Bruno Mars", "Shawn Mendes"],
      },
      {
        category: "Music: Pop Culture",
        type: "multiple",
        difficulty: "easy",
        question: "What was the biggest pop music scandal of the 2010s?",
        correct_answer: "Taylor Swift and Kanye West feud",
        incorrect_answers: [
          "Adele’s album delay",
          "Ed Sheeran’s hiatus",
          "Dua Lipa’s tour cancellation",
        ],
      },
      {
        category: "Music: Rock",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which rock album is often considered the greatest of all time?",
        correct_answer: "The Dark Side of the Moon",
        incorrect_answers: ["Nevermind", "Back in Black", "Hotel California"],
      },
      {
        category: "Music: Pop",
        type: "multiple",
        difficulty: "easy",
        question:
          "What artist is known for dropping surprise albums without prior announcement?",
        correct_answer: "Beyoncé",
        incorrect_answers: ["Katy Perry", "Justin Bieber", "Sam Smith"],
      },
      {
        category: "Music: Pop Culture",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which musician had the most controversial performance at an awards show?",
        correct_answer: "Miley Cyrus",
        incorrect_answers: ["Ariana Grande", "Harry Styles", "Olivia Rodrigo"],
      },
      {
        category: "Music: Rock",
        type: "multiple",
        difficulty: "easy",
        question: "What band defined the grunge movement of the early 90s?",
        correct_answer: "Nirvana",
        incorrect_answers: ["Green Day", "Blink-182", "Red Hot Chili Peppers"],
      },
      {
        category: "Music: Pop",
        type: "multiple",
        difficulty: "easy",
        question: "Which pop star has the most loyal fanbase in music culture?",
        correct_answer: "Taylor Swift",
        incorrect_answers: ["Katy Perry", "Camila Cabello", "Charlie Puth"],
      },
      {
        category: "Music: Rock",
        type: "multiple",
        difficulty: "easy",
        question: "What rock legend is famous for destroying guitars on stage?",
        correct_answer: "Jimi Hendrix",
        incorrect_answers: ["Eric Clapton", "David Gilmour", "Mark Knopfler"],
      },
      {
        category: "Music: Pop Culture",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which celebrity feud in the music industry lasted the longest?",
        correct_answer: "Oasis brothers feud",
        incorrect_answers: [
          "Drake vs The Weeknd",
          "Ariana vs Billie",
          "Dua Lipa vs Miley Cyrus",
        ],
      },
      {
        category: "Music: Pop Culture",
        type: "multiple",
        difficulty: "easy",
        question: "What was the most talked-about comeback in music history?",
        correct_answer: "Eminem",
        incorrect_answers: [
          "One Direction",
          "Jonas Brothers",
          "Black Eyed Peas",
        ],
      },
      {
        category: "Music: Rock",
        type: "multiple",
        difficulty: "easy",
        question: "Which band pioneered the concept album format?",
        correct_answer: "The Beatles",
        incorrect_answers: ["Maroon 5", "OneRepublic", "The Killers"],
      },
      {
        category: "Music: Pop",
        type: "multiple",
        difficulty: "easy",
        question:
          "What pop artist is known for constantly reinventing their musical style?",
        correct_answer: "Madonna",
        incorrect_answers: ["Selena Gomez", "Demi Lovato", "Halsey"],
      },
      {
        category: "Music: Rock",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which rock festival is considered the most iconic of all time?",
        correct_answer: "Woodstock",
        incorrect_answers: ["Coachella", "Lollapalooza", "Glastonbury"],
      },
      {
        category: "Music: Pop Culture",
        type: "multiple",
        difficulty: "easy",
        question:
          "What musician had the most unexpected collaboration in recent years?",
        correct_answer: "Lil Nas X and Billy Ray Cyrus",
        incorrect_answers: [
          "Adele and Ed Sheeran",
          "Bruno Mars and Anderson .Paak",
          "Drake and Future",
        ],
      },
      {
        category: "Music: Pop Culture",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which artist’s personal life has influenced their music the most?",
        correct_answer: "Taylor Swift",
        incorrect_answers: ["Post Malone", "Shawn Mendes", "Khalid"],
      },
      {
        category: "Music: Rock",
        type: "multiple",
        difficulty: "easy",
        question:
          "What band is known for having the most dramatic internal conflicts?",
        correct_answer: "Fleetwood Mac",
        incorrect_answers: ["Coldplay", "Imagine Dragons", "Muse"],
      },
      {
        category: "Music: Culture",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which music genre has had the biggest cultural impact globally?",
        correct_answer: "Pop",
        incorrect_answers: ["Country", "Jazz", "Folk"],
      },
      {
        category: "Music: Pop/Rock",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the most controversial song ever released in pop or rock history?",
        correct_answer: "Like a Prayer",
        incorrect_answers: ["Shape of You", "Happy", "Counting Stars"],
      },
    ]
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    const sidebar = document.getElementById("sidebar")
    const domande = document.getElementById("domande")
    const buttonSpace = document.getElementById("button-space")
    const currentQuestionNum = document.getElementById("question-num")
    const submitButton = document.getElementById("submit-button")

    // Global Variables Delcaration

    let score = parseInt(sessionStorage.getItem("score")) || 0 // Dinamically updated score that will be displayed in the results page.
    let questionNumber = 0 // Number of the question the user is facing.
    let usedQuestionsArr =
      // array di domande utilizzate
      JSON.parse(sessionStorage.getItem("usedQuestionsArr")) || []
    let usedAnswersArr =
      // array di risposta utilizzate
      JSON.parse(sessionStorage.getItem("usedAnswersArr")) || []
    const difficulty = sessionStorage.getItem("chosenDifficulty") || "easy"
    const numOfQuestions = sessionStorage.getItem("totalQuestions") || 5
    let currentQuestion = {}

    let pulledQuestions = [] // Array domande già poste
    let arrQuestions = [] // Array dinamico che avrà le domande o Easy o Medium o Hard

    const randomQuestionExtraction = function () {
      //funzione per randomizzare domande
      if (pulledQuestions.length === arrQuestions.length) {
        //se l'array pulled question è uguale a quello delle question vuol dire che le domande sono finite
        return null
      }
      let randomIndex
      let selectedQuestion
      // finchè nelle pulled includono le select question
      do {
        randomIndex = Math.floor(Math.random() * arrQuestions.length)
        selectedQuestion = arrQuestions[randomIndex]
      } while (pulledQuestions.includes(selectedQuestion))

      pulledQuestions.push(selectedQuestion)
      return selectedQuestion
    }

    // Function to generate a random array to mix the possible answers' positions each time.

    const getRandomQuestionOrder = (questionObj) => {
      const { type } = questionObj
      if (type === "multiple") {
        const positions = [0, 1, 2, 3]
        positions.sort(() => Math.random() - 0.5)

        return positions
      } else {
        const positions = [0, 1]
        positions.sort(() => Math.random() - 0.5)

        return positions
      }
    }

    // Function to check if the answer is correct. If it is, updates score by 1.

    const checkAnswer = (e, questionObj) => {
      const { question, correct_answer } = questionObj
      const buttonAnswers = document.querySelectorAll(".button-answer")
      buttonAnswers.forEach((btn) => {
        btn.disabled = true
        btn.style.cursor = "not-allowed"
      })
      if (!e || !e.target) {
        usedAnswersArr.push(
          `You didn't answer the question ❌
      ${correct_answer} ✅`,
        )
        usedQuestionsArr.push(question)
        const nextQuestionObj = randomQuestionExtraction()
        currentQuestion = nextQuestionObj
        displayNextQuestion(nextQuestionObj)
        return
      }
      if (e.target.innerText && e.target.innerText === correct_answer) {
        e.target.classList.add("correct-answer")
        score++
        usedAnswersArr.push(`Your answer: ${correct_answer} ✅`)
      } else {
        e.target.classList.add("wrong-answer")
        usedAnswersArr.push(
          `Your answer: ${e.target.innerText} ❌ - 
      Correct answer: ${correct_answer} ✅`,
        )
      }
      usedQuestionsArr.push(question)
      setTimeout(() => {
        const nextQuestionObj = randomQuestionExtraction()
        currentQuestion = nextQuestionObj
        displayNextQuestion(nextQuestionObj)
      }, 550)
    }

    const displayHtml = function () {
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
            sono una ragazza brillante, elegante e profondamente innamorata della vita mondana. Amo le luci della città, gli aperitivi che si trasformano in notti lunghe. Sono sempre curata nei dettagli, ho uno stile naturale che non passa inosservato, ma senza mai risultare forzato.
          </p>
        </section>


        <section class="button-start">
          <button id="button-proceed" type="submit">Proceed</button>
        </section>
      </form>
    </main>
`
        const proceedButton = document.getElementById("button-proceed")
        const welcomeForm = document.querySelector(".welcome-form")

        welcomeForm.addEventListener("submit", (e) => {
          e.preventDefault()
          const body = document.getElementById("welcome-body")
          body.setAttribute("id", "benchmark-body")
          displayHtml()
        })
      } else if (document.getElementById("benchmark-body")) {
        sidebar.innerHTML = `<main>
      <article id="question-diplay">
        <p id="question-title"></p>
      </article>
      <section id="button-space"></section>
    </main> `

        if (difficulty === "easy") {
          arrQuestions = questionsGossip.filter(
            (question, i) => i <= numOfQuestions,
          )
        }

        const primaDomanda = randomQuestionExtraction()
        displayNextQuestion(primaDomanda)

        return
      } else if (document.getElementById("result-body")) {
        console.log(usedAnswersArr)
        sidebar.innerHTML = `<p> ${score >= 3 ? "bravo," : "inutile,"} ne hai beccate ${score}</p>`
        if (score >= 3) {
          sidebar.innerHTML += "<p> sta sera te la lancio </p>"
        } else {
          sidebar.innerHTML += "<p> sparisci </p>"
        }
        sidebar.innerHTML +=
          " <button id='try-again'> 🔥😉💋 puoi riprovarci </button>"
        const tryAgain = document.getElementById("try-again")
        tryAgain.addEventListener("click", () => {
          const body = document.getElementById("result-body")
          body.setAttribute("id", "welcome-body")
          questionNumber = 0
          pulledQuestions = []
          usedAnswersArr = []
          usedQuestionsArr = []
          displayHtml()
        })

        sessionStorage.clear()
      }
    }
    displayHtml()

    const displayNextQuestion = (questionObj) => {
      const buttonSpace = document.getElementById("button-space")
      const questionTitle = document.getElementById("question-title")
      currentQuestion = questionObj
      buttonSpace.innerHTML = ""
      if (questionNumber >= numOfQuestions) {
        sessionStorage.setItem("score", score)
        sessionStorage.setItem("usedAnswersArr", JSON.stringify(usedAnswersArr))
        sessionStorage.setItem(
          "usedQuestionsArr",
          JSON.stringify(usedQuestionsArr),
        )
        questionTitle.innerText = `The Quiz is over.\n
    Go to your results!`
        buttonSpace.innerHTML = `
        <button id='result-button'>Results</button>
    `
        buttonSpace.classList.add("button-start")
        const resultbutton = document.getElementById("result-button")
        resultbutton.addEventListener("click", () => {
          const body = document.getElementById("benchmark-body")
          body.setAttribute("id", "result-body")
          displayHtml()
        })
        return
      }
      const { question, correct_answer, incorrect_answers } = questionObj
      const allAnswers = [...incorrect_answers, correct_answer]
      questionTitle.innerText = `${question}`
      questionNumber++
      getRandomQuestionOrder(questionObj).forEach((index) => {
        buttonSpace.innerHTML += `
    <button class="button-answer">
    ${allAnswers[index]}
    </button>
    `
      })
      const buttonAnswers = document.querySelectorAll(".button-answer")
      buttonAnswers.forEach((button) =>
        button.addEventListener("click", (e) => checkAnswer(e, questionObj)),
      )
    }
  } else if (character === Lisa) {
  }
}

// const displayResults = () => {
//   const correctPercentageP = document.getElementById(
//     "percentage-correct-answers",
//   )
//   const resultMessage = document.getElementById("result-message")
//   const wrongPercentageP = document.getElementById("percentage-wrong-answers")
//   const correctAnswersP = document.getElementById("number-correct-answers")
//   const wrongAnswersP = document.getElementById("number-wrong-answers")
//   correctPercentageP.innerText = `${((score / numOfQuestions) * 100).toFixed(1)}%`
//   wrongPercentageP.innerText = `${(((numOfQuestions - score) / numOfQuestions) * 100).toFixed(1)}%`
//   correctAnswersP.innerText = `${score}/${numOfQuestions} questions`
//   wrongAnswersP.innerText = `${numOfQuestions - score}/${numOfQuestions} questions`
//   if (((score / numOfQuestions) * 100).toFixed(1) < 60) {
//     resultMessage.innerHTML = `
//     <h4>We're sorry!</h4>
//     <p class="youPass">You didn't pass the exam this time.</p>
//     <div class="certificate">
//     <p>You can try again later!</p>
//     <p>Check your email (including promotion / spam folder)</p>
//     </div>
//     `
//   }
// }

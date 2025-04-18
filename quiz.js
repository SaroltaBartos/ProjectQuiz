const questions = [
      {
        question: "What is the capital of Hungary?",
        options: ["Berlin", "Budapest", "Paris", "Madrid"],
        correct: 1
      },
      { 
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
      },
      {
        question: "What is the capital of Japan?",
        options: ["Seoul", "Beijing", "Tokyo", "Kyoto"],
        correct: 2
      },
      {
        question: "What is the capital of Germany?",
        options: ["Berlin", "Munich", "Hamburg", "Cologne"],
        correct: 0
      },
      {
        question: "What is the capital of Italy?",
        options: ["Florence", "Rome", "Milan", "Venice"],
        correct: 1
      },
      {
        question: "What is the capital of Spain?",
        options: ["Madrid", "Barcelona", "Seville", "Valencia"],
        correct: 0
      },
      {
        question: "What is the capital of the United Kingdom?",
        options: ["London", "Edinburgh", "Manchester", "Bristol"],
        correct: 0
      },
      {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        correct: 1
      },
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 2
      },
      {
        question: "What is the capital of Russia?",
        options: ["Moscow", "St. Petersburg", "Novosibirsk", "Kazan"],
        correct: 0
      },
      {
        question: "What is the capital of Brazil?",
        options: ["Rio de Janeiro", "Sao Paulo", "Brasilia", "Salvador"],
        correct: 2
      },
      {
        question: "What is the capital of Argentina?",
        options: ["Buenos Aires", "Cordoba", "Rosario", "Mendoza"],
        correct: 0
      },
      {
        question: "What is the capital of Mexico?",
        options: ["Guadalajara", "Mexico City", "Monterrey", "Cancun"],
        correct: 1
      },
      {
        question: "What is the capital of Poland?",
        options: ["Warsaw", "Krakow", "Gdansk", "Wroclaw"],
        correct: 0
      },
      {
        question: "What is the capital of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Bangalore"],
        correct: 1
      },
      {
        question: "What is the capital of China?",
        options: ["Beijing", "Shanghai", "Hong Kong", "Guangzhou"],
        correct: 0
      },
      {
        question: "What is the capital of Egypt?",
        options: ["Cairo", "Alexandria", "Giza", "Luxor"],
        correct: 0
      },
      {
        question: "What is the capital of Turkey?",
        options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
        correct: 1
      },
      {
        question: "What is the capital of Greece?",
        options: ["Athens", "Thessaloniki", "Crete", "Patras"],
        correct: 0
      },
      {
        question: "What is the capital of Sweden?",
        options: ["Stockholm", "Gothenburg", "Malmo", "Uppsala"],
        correct: 0
      },
    ];

    let currentQuestion = 0;
    let score = 0;
    let quizStarted = false;
    let quizType = ""; 
    let shuffledQuestions = []; 
    
    const startBtn1 = document.getElementById('start-20-quiz-btn');
    const startBtn2 = document.getElementById('start-5-quiz-btn');
    const quizContent = document.getElementById('quiz-content');
    const questionContainer = document.getElementById('question-container');
    const resultDiv = document.getElementById('result');
    const welcomeMessage = document.getElementById('welcome-message');
    const restartBtn = document.getElementById("restart-btn");
    
    
    startBtn1.addEventListener('click', () => {
        quizType = "20";  
        startQuiz();
    });
    
    
    startBtn2.addEventListener('click', () => {
        quizType = "5";  
        startQuiz();
    });
    
    function startQuiz() {
        quizStarted = true; 
        startBtn1.classList.add('hidden');  
        startBtn2.classList.add('hidden');
        quizContent.classList.remove('hidden'); 
        welcomeMessage.classList.add('hidden');
    
        if (quizType === "20") {
            showQuestion();  
        } else if (quizType === "5") {
            shuffleQuestion(); 
        }
    }

    function shuffleQuestion() {
        const shuffled = [...questions].sort(() => Math.random() - 0.5); 
        shuffledQuestions = shuffled.slice(0, 5); 
        showShuffledQuestion(); 
      }
    
    function showShuffledQuestion() { 
        const question = shuffledQuestions[currentQuestion]; 
        questionContainer.innerHTML = `
          <div class="question active">
            <h2>Question ${currentQuestion + 1} of ${shuffledQuestions.length}</h2>
            <p>${question.question}</p>
            <div class="space-y-3">
              ${question.options.map((option, index) => `
                <button class="option-btn w-full m-1 text-left bg-amber-100 text-gray-800 font-medium py-3 px-4 rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-orange-300" onclick="checkAnswer(${index})">${option}</button>
              `).join('')}
            </div>
          </div>
        `;
        restartBtn.classList.remove("hidden");
        restartBtn.addEventListener("click", () => {
          setTimeout(resetQuiz, 300);
        });
      }
    
    function showQuestion() {
        const question = questions[currentQuestion];
        questionContainer.innerHTML = `
         <div class="question active">
        <h2>Question ${currentQuestion + 1} of ${questions.length}</h2>
        <p>${question.question}</p>
        <div class="space-y-3">
          ${question.options.map((option, index) => `
            <button class="option-btn w-full m-1 text-left bg-amber-100 text-gray-800 font-medium py-3 px-4 rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-orange-300" onclick="checkAnswer(${index})">${option}</button>
          `).join('')}
        </div>
        </div>
       `;
       restartBtn.classList.remove("hidden");
       restartBtn.addEventListener("click", () => {
         setTimeout(resetQuiz, 300);
       });
      
    }
    
    function checkAnswer(selectedIndex) {
        if (!quizStarted) return;
    
        let question;
        if (quizType === "5") {
            question = shuffledQuestions[currentQuestion];
        } else {
            question = questions[currentQuestion];
        }
    
        const buttons = document.querySelectorAll('.option-btn');
        buttons.forEach(button => button.disabled = true);
    
        if (selectedIndex === question.correct) {
            buttons[selectedIndex].classList.remove('bg-amber-100', 'hover:bg-orange-300');
            buttons[selectedIndex].classList.add('bg-green-500', 'text-white');
            score++;
        } else {
            buttons[selectedIndex].classList.remove('bg-amber-100', 'hover:bg-orange-30');
            buttons[selectedIndex].classList.add('bg-red-500', 'text-white');
            buttons[question.correct].classList.remove('bg-amber-100', 'hover:bg-orange-30');
            buttons[question.correct].classList.add('bg-green-500', 'text-white');
        }

        setTimeout(() => {
            currentQuestion++; 
    
            if (quizType === "20") {
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    showResultFullQuiz();
                }
            } else if (quizType === "5") {
                if (currentQuestion < shuffledQuestions.length) {
                    showShuffledQuestion();
                } else {
                    showResultShuffeled();
                }
            }
        }, 1500);
    }

    function showResultFullQuiz() {
        questionContainer.innerHTML = '';
        resultDiv.classList.remove('hidden');
        resultDiv.innerHTML = `
          <h2 class="text-2xl font-bold mb-4 text-gray-800">Quiz Complete!</h2>
          <p class="text-lg mb-2 text-gray-700">Your score: ${score} out of ${questions.length}</p>
          <p class="text-lg mb-6 text-gray-700">Percentage: ${Math.round((score / questions.length) * 100)}%</p>
          <button onclick="resetQuiz()" class="px-6 py-3 rounded-xl bg-amber-500 text-white hover:bg-amber-600 focus:outline-2 focus:outline-offset-2 focus:outline-amber-500 active:bg-amber-700">
            Try Again
          </button>
        `;
      }
    
    function showResultShuffeled() {
      restartBtn.classList.add('hidden');
      questionContainer.innerHTML = '';
      resultDiv.classList.remove('hidden');
      resultDiv.innerHTML = `
         <h2 class="text-2xl font-bold mb-4 text-gray-800">Quiz Complete!</h2>
         <p class="text-lg mb-2 text-gray-700">Your score: ${score} out of ${shuffledQuestions.length}</p>
         <p class="text-lg mb-6 text-gray-700">Percentage: ${Math.round((score / shuffledQuestions.length) * 100)}%</p>
         <button onclick="resetQuiz()" class="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
           Try Again
         </button>
       `;
      }

    function resetQuiz() {
        currentQuestion = 0;
        score = 0;
        quizStarted = false;
        restartBtn.classList.add('hidden');
        resultDiv.classList.add('hidden');
        startBtn1.classList.remove('hidden');
        startBtn2.classList.remove('hidden');
        quizContent.classList.add('hidden');
      }
           
    
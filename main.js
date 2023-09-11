const progress_bar_data = [{
    title: "Product",
    isDone: true,
    state: false,
    questions: [{
        question: "How will you engage your users?",
        choices: ["Web", "Mobile", "Both"]
    },
    {
        question: "what is your father name?",
        choices: ["Web", "Mobile", "Both"]
    },
    {
        question: "what is your mother name?",
        choices: ["Web", "Mobile", "Both"]
    },
    {
        question: "what is your sister name?",
        choices: ["Web", "Mobile", "Both"]
    },
    {
        question: "what is your brother name?",
        choices: ["Web", "Mobile", "Both"]
    }]
},
{
    title: "Features",
    isDone: true,
    state: false,
    questions: []
},
{
    title: "Communication",
    isDone: false,
    state: true,
},
{
    title: "Interactivity",
    isDone: false,
    state: false,
        questions: [{
        question: "How will you engage your users?",
        choices: ["Web", "Mobile", "Both"]
    },
    {
        question: "what is your father name?",
        choices: ["Web", "Mobile", "Both"]
    },
    {
        question: "what is your mother name?",
        choices: ["Web", "Mobile", "Both"]
    },
    {
        question: "what is your sister name?",
        choices: ["Web", "Mobile", "Both"]
    },
    {
        question: "what is your brother name?",
        choices: ["Web", "Mobile", "Both"]
    }]
},
{
    title: "Security",
    isDone: false,
    state: false
}]

// aui code Start

const totalQuestions = 30;
const answerQuestions = 25;

function calculateProgressBar(totalQuestions, answerQuestions) {
    const displayTotalQuestion = document.querySelector("#total-question-display");
    const displayAnswerQuestion = document.querySelector("#answerd-question-display");

    const progressPercentage = answerQuestions / totalQuestions * 100;

    document.querySelector(".steps-progress-bar").style.width = `${progressPercentage}%`

    displayTotalQuestion.innerText = totalQuestions;
    displayAnswerQuestion.innerText = answerQuestions;
}

calculateProgressBar(totalQuestions, answerQuestions);

// aui code End



let main = document.getElementById('progress_main');
main.innerHTML = '';

progress_bar_data.map((object, index) => {
    let box = document.createElement('div');
    let title = document.createElement('div');
    let number = document.createElement('div');

    title.append(object.title)
    number.append(index + 1)

    object.isDone === true ? box.classList.add("calc_progress_box", "done") : box.classList.add("calc_progress_box");
    object.state === true ? box.classList.add("calc_progress_box", "active") : box.classList.add("calc_progress_box");

    title.classList.add("calc_progress_box_title");
    number.classList.add("calc_progress_box_number");

    box.append(title, number);

    main.append(box)
    
    
    


})


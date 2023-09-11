const progress_bar_data = [{
    title: "Product",
    isDone: true,
    state: false,
    questions: [{
        question: "How will you engage your users?",
        choices: ["Web", "Mobile", "Both"]
    }]
},
{
    title: "Features",
    isDone: true,
    state: false,
},
{
    title: "Communication",
    isDone: false,
    state: true,
},
{
    title: "Interactivity",
    isDone: false,
    state: false
},
{
    title: "Security",
    isDone: false,
    state: false
}]

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
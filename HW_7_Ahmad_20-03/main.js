const cards = document.getElementById('cards')
const url = 'https://jsonplaceholder.typicode.com/posts'

const getData = async (url) => {
    await fetch(url)
        .then(res =>  res.json())
        .then(data => {
            data.forEach(element => {
                const div = document.createElement('div')
                div.innerHTML = `
                    <div class="card_block">
                         <img src="news.png" alt="">
                         <h2>${element.title}</h2>
                         <p>${element.body}</p>
                    </div>
                `
                cards.append(div)
            })
        })
}
getData(url)


// var zodiak = prompt("Введите месяц")
// var date = Number(prompt("Введите дату рождения"))
//
// if (zodiak === "Март" && date >= 21 && date <= 31) {
//     alert("Овен")
// } else if (zodiak === "Март" && date <= 20 && date <= 31) {
//     alert("Рыбы")
// } else if (zodiak === "Апель" && date >= 20 && date <= 30) {
//     alert("Телец")
// } else if (zodiak === "Апрель" && date <= 19 && date <= 30) {
//     alert("Овен")
// } else if (zodiak === "Май" && date >= 21 && date <= 31) {
//     alert("Близнецы")
// } else if (zodiak === "Май" && date <= 21 && date <= 31) {
//     alert("Телец")
// } else if (zodiak === "Июнь" && date >= 20 && date <= 30) {
//     alert("Рак")
// } else if (zodiak === "Июнь" && date <= 21 && date <= 30) {
//     alert("Близнецы")
// } else if (zodiak === "Июль" && date >= 23 && date <= 31) {
//     alert("Лев")
// } else if (zodiak === "Июль" && date <= 22 && date <= 31) {
//     alert("Рак")
// } else if (zodiak === "Август" && date >= 23 && date <= 31) {
//     alert("Лев")
// } else if (zodiak === "Август" && date <= 23 && date <= 31) {
//     alert("Дева")
// } else if (zodiak === "Сентябрь" && date >= 22 && date <= 30) {
//     alert("Весы")
// } else if (zodiak === "Cентябрь" && date <= 22 && date <= 30) {
//     alert("Дева")
// } else if (zodiak === "Октябрь" && date >= 23 && date <= 31) {
//     alert("Скорпион")
// } else if (zodiak === "Октябрь" && date <= 22 && date <= 31) {
//     alert("Дева")
// } else if (zodiak === "Ноябрь" && date >= 21 && date <= 30) {
//     alert("Скорпион")
// } else if (zodiak === "Ноябрь" && date <= 22 && date <= 30) {
//     alert("Стрелец")
// } else if (zodiak === "Декабрь" && date >= 21 && date <= 31) {
//     alert("Козерог")
// } else if (zodiak === "Декабрь" && date <= 22 && date <= 31) {
//     alert("Стрелец")
// } else if (zodiak === "Январь" && date >= 19 && date <= 31) {
//     alert("Козерог")
// } else if (zodiak === "Январь" && date <= 20 && date <= 31) {
//     alert("Водолей")
// } else if (zodiak === "Февраль" && date >= 18 && date <= 28) {
//     alert("Козерог")
// } else if (zodiak === "Февраль" && date <= 19 && date <= 28) {
//     alert("Рыбы")
// } else {
//     alert("Error")
// }


const keyboard = document.querySelectorAll('.key');

//Math.ceil(min); ==> округляет число, округленное в большую сторону, до ближайшего целого.
//Math.floor(max); ==> округляет число вниз до ближайшего целого числа.
//Math ==> получаем число

RandomElement = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) ;
}

GetRandomElement = () => {
    return keyboard[RandomElement(0, keyboard.length-1)]
}
// getelementById забирает с html id
// Метод getAttribute("id") возвращает значения атрибута элемента.
//ClassList.add('selectat) добавляем класс в CSS
GetBtnRandom = () => {
    return document.getElementById(GetRandomElement().getAttribute('id')).classList.add("selectat");
}

document.addEventListener("keydown", (event) => {
    const getElement = document.getElementById(event.code);
    getElement.classList.add("press");

    const getHightlighted = document.querySelector(".selectat");
    getElement.addEventListener('animationend', () => {
        getElement.classList.remove("press")
    })

    if (getElement === getHightlighted) {
        getHightlighted.classList.remove("selectat");
        GetBtnRandom()
    }


})
GetBtnRandom()
console.log("I love javascript"[2]);
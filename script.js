const car = document.querySelector("#todo1")
const money = document.querySelector("#todo2")
const phone = document.querySelector("#todo3")
const fat = document.querySelector("#todo4")
const live = document.querySelector("#todo5")
car.onclick = () => {
    const text = document.querySelector("#car")

    if (car.checked) {
        text.innerHTML = "Mua ô <del>tô</del>"
    } else {
        text.innerHTML = "Mua ô tô"
    }
}

money.onclick = () => {
    const text = document.querySelector("#money")

    if (money.checked) {
        text.innerHTML = "Tiết kiệm 200.000<del>.000</del>"
    } else {
        text.innerHTML = "Tiết kiệm 200.000.000"
    }
}

phone.onclick = () => {
    const text = document.querySelector("#phone")

    if (phone.checked) {
        text.innerHTML = "Thay ốp điện thoại mới"
    } else {
        text.innerHTML = "Thay điện thoại mới"
    }
}
fat.onclick = () => {
    const text = document.querySelector("#fat")

    if (fat.checked) {
        text.innerHTML = "<del>Giảm</del> béo thành công 5kg"
    } else {
        text.innerHTML = "Giảm béo thành công 5kg"
    }
}
live.onclick = () => {
    const text = document.querySelector("#live")

    if (live.checked) {
        text.innerHTML = "Sống <del>cuộc sống an nhàn</del>"
    } else {
        text.innerHTML = "Sống cuộc sống an nhàn"
    }
}

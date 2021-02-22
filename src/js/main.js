@@include('./lib/nouislider.min.js')
@@include('./lib/wNumb.min.js')
@@include('./lib/imask.js')
@@include('./lib/choices.min.js')
@@include('./lib/datepicker.min.js')

document.addEventListener('DOMContentLoaded', () => {

    const rangeWidth = document.getElementById('width-range'),
        rangeHeight = document.getElementById('height-range'),
        widthInput = document.getElementById('width-range-value'),
        heightInput = document.getElementById('height-range-value'),
        weightInput = document.getElementById("weight"),
        dateInput = document.getElementById("date"),
        citySelect = document.getElementById("city-select"),
        deliveryCheckbox = document.getElementById("delivery-checkbox"),
        deliveryAddress = document.querySelector(".form__item_address"),
        addressInput = document.getElementById("address"),
        nameInput = document.getElementById("name"),
        surnameInput = document.getElementById("surname"),
        phoneInput = document.querySelector("input[type='tel']"),
        commentsTextarea = document.getElementById("comments"),
        costInput = document.getElementById("cost"),
        figure = document.getElementById("figure"),
        figureWeight = document.querySelector(".figure__weight"),
        popup = document.querySelector(".popup"),
        popupBtn = document.querySelectorAll(".js-popup-btn"),
        popupCloseBtn = document.querySelector(".popup__close");
        popupWidth = document.querySelector("#popup-width span"),
        popupHeight = document.querySelector("#popup-height span"),
        popupWeight = document.querySelector("#popup-weight span"),
        popupCity = document.querySelector("#popup-city span"),
        popupDate = document.querySelector("#popup-date span"),
        popupAppartment = document.querySelector("#popup-appartment span"),
        popupAddress = document.querySelector("#popup-address span"),
        popupName = document.querySelector("#popup-name span"),
        popupSurname = document.querySelector("#popup-surname span"),
        popupPhone = document.querySelector("#popup-phone span"),
        popupComments = document.querySelector("#popup-comments span"),
        popupCost = document.querySelector("#popup-cost span");

    function prettify(num) {
        return n = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    };

    function calculate(weightCost=0, deliveryCost=0) {
        let total = heightInput.value*1200 + widthInput.value*1000 + weightCost + deliveryCost;
        costInput.value = prettify(total);
        popupCost.innerHTML = prettify(total);
    }

    function figureDrawing() {
        figure.style.width = 70 + (+widthInput.value) + "px";
        figure.style.height = 70 + (+heightInput.value) + "px";
    }

// width and height

    noUiSlider.create(rangeWidth, {
        start: [1],
        step: 1,
        connect: [true, false],
        tooltips: true,
        range: {
            'min': [1],
            'max': [100]
        },
        format: wNumb({
            decimals: 0,
        })
    });

    rangeWidth.noUiSlider.on('update', function (values, handle) {
        widthInput.value = values[handle];
        calculate();
        figureDrawing();
    });

    widthInput.addEventListener('input', function(event) {
        rangeWidth.noUiSlider.set(widthVal);
        widthInputVal = event.target.value;
        calculate();
        figureDrawing();
    });

    noUiSlider.create(rangeHeight, {
        start: [1],
        step: 1,
        connect: [true, false],
        tooltips: true,
        range: {
            'min': [1],
            'max': [100]
        },
        format: wNumb({
            decimals: 0,
        })
    });

    rangeHeight.noUiSlider.on('update', function (values, handle) {
        heightInput.value = values[handle];
        calculate();
        figureDrawing();
    });

    heightInput.addEventListener('input', function(event) {
        rangeHeight.noUiSlider.set(heightVal);
        heightInputVal = event.target.value;
        calculate();
        figureDrawing();
    });

// weight

    weightInput.addEventListener('input', function(event) {
        let weightVal = event.target.value,
            weightMaxVal = event.target.getAttribute('max'),
            weightCost = 0;

        if ( weightVal > 100 ) {
            weightVal = 100;
            weightInput.value = weightVal;
        } else if (weightVal <= 0) {
            weightVal = 1;
            weightInput.value = weightVal;
        }

        figureWeight.innerHTML = `${weightVal} kg`;

        if ( weightVal > (weightMaxVal/2) ) {
            weightCost = 3500;
        } 
        calculate(weightCost);
    });

// deliveryCheckbox

    deliveryCheckbox.addEventListener('change', function(event) {
        let deliveryCost = 0;
        if ( event.target.checked ) {
            deliveryCost = 1000;
            event.target.parentNode.classList.add("moved");
            deliveryAddress.classList.add("show");
        } else {
            deliveryCost = -1000;
            event.target.parentNode.classList.remove("moved");
            deliveryAddress.classList.remove("show");
        }
        calculate(deliveryCost);
    });

// calendar

    const picker = datepicker(dateInput, {
        formatter: (input, date, instance) => {
            const value = date.toLocaleDateString()
            input.value = value
        },
        minDate: new Date(Date.parse(new Date())+ 1000 * 3600 * 24 * 4),
        onSelect: (instance, date, minDate) => {
            return dateVal = date.toLocaleDateString();
        }
    });

// select and cities API

    fetch("https://wft-geo-db.p.rapidapi.com/v1/geo/countries", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "fc7a46e6bcmshd2f2f2833606168p197e52jsn45b089e6c933",
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com"
        }
    }).then( response => response.json())
    .then( json => {
        const citiesArr = json.data;
        citiesArr.forEach( el => {
            const city = el.name,
                cityOption = document.createElement("option");
            citySelect.append(cityOption);
            cityOption.innerHTML = city;
        });
    }).then( () => {
        const choices = new Choices(citySelect);
        citySelect.addEventListener('change', () => {
            const cityValue = choices.getValue();
            popupCity.innerHTML = cityValue.label;
        });
    }).catch(err => {
        console.error(err);
    });

// modal

    function popupData() {
        popupWidth.innerHTML = `${widthInput.value} m`;
        popupHeight.innerHTML = `${heightInput.value} m`;
        popupWeight.innerHTML = `${weightInput.value} kg`;
        popupDate.innerHTML = dateVal;
        popupName.innerHTML = nameInput.value;
        popupSurname.innerHTML = surnameInput.value;
        popupPhone.innerHTML = phoneInput.value;
        popupComments.innerHTML = commentsTextarea.value;
        if ( deliveryCheckbox.checked ) {
            popupAppartment.innerHTML = "yes";
            popupAddress.innerHTML = addressInput.value;
        } else {
            popupAppartment.innerHTML = "no";
            popupAddress.innerHTML = "-";
        }
    }

    popupBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            popup.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";
            popupData();
        });
    });

    popupCloseBtn.addEventListener('click', () => {
        popup.style.display = "none";
        document.querySelector("body").style.overflow = "auto";
    });

    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = "none";
            document.querySelector("body").style.overflow = "auto";
        }
    });

// phone mask

    let mask = IMask(phoneInput, {
        mask: '+375 00 000-00-00'
    });
});
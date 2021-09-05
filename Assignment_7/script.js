let button = document.getElementById('button');
let city = document.getElementById('city')
let city_name = document.querySelector('.name');
let weather = document.querySelector('.weather_type');
let temp = document.querySelector('.temp');
let humidity = document.querySelector('.humidity');
let cntry = document.querySelector('.country')


button.addEventListener('click', function () {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&appid=50a7aa80fa492fa92e874d23ad061374")
        .then(response => response.json())
        .then(data => {
            let name_value = data.name;
            let tempValue = Math.round(data["main"]["temp"] - 273.17).toFixed(2);
            let descValue = data["weather"][0]["description"];
            let weather_type = data["weather"]["main"];
            let humid_value = data["main"]["humidity"];
            let country = data.sys.country;
            let icon = document.querySelector("#icon");
            let body = document.querySelector('#top');


            city_name.innerHTML = `<strong>${name_value}, `;
            cntry.innerHTML = country
            weather.innerHTML = `<strong>${descValue}</strong>`;
            temp.innerHTML = `<strong>${tempValue}&#176;</strong>`;
            humidity.innerHTML = `<strong>${humid_value}&percnt;</strong>`;

            descValue=descValue.toLowerCase();
            if (descValue.includes('sun') && descValue.includes('cloud')) {
                icon.innerHTML = `<i class=\"fas fa-cloud-sun\"></i>`;
                body.style.backgroundImage='url("https://media3.giphy.com/media/QH6ytk1V9IExi/200w.webp?cid=ecf05e479ond1yoc5y9eflxc1v69f5y3p6d78syl60z7opy0&rid=200w.webp&ct=g")'
                body.style.backgroundSize="cover";
            }
            else if(descValue.includes('mist')|| descValue.includes('ogg') || descValue.includes('haze')){
                icon.innerHTML="<i class=\"fas fa-smog\"></i>";
                body.style.backgroundImage='url("https://media4.giphy.com/media/yhZr5Wx7CBFbq/200.webp?cid=ecf05e47yfae4ie3r31yfblw5jv390ibbo3s2j833sufgvj5&rid=200.webp&ct=g")';
                body.style.backgroundSize="cover";
            }else if(descValue.includes('snow')){
                icon.innerHTML="<i class=\"fas fa-snowflake\"></i>";
                body.style.backgroundImage='url("https://media4.giphy.com/media/BDucPOizdZ5AI/giphy.webp?cid=ecf05e476fp7gjm1wr5knuprxo5dve9o2u8sflxcqm7zbbx5&rid=giphy.webp&ct=g")';
                body.style.backgroundSize="cover";
            }
            else if(descValue.includes('rain') || descValue.includes('showers')){
                icon.innerHTML="<i class=\"fas fa-cloud-rain\"></i>";
                body.style.backgroundImage='url("https://media1.giphy.com/media/26DMWExfbZSiV0Btm/giphy.webp?cid=ecf05e47uialoolntuyvhkinbdqdjvj8ufceztfdf7300mwz&rid=giphy.webp&ct=g")';
                body.style.backgroundSize="cover";
            }
            else if (descValue.includes('cloud')) {
                icon.innerHTML = "<i class=\"fas fa-cloud\"></i>";
                body.style.backgroundImage='url("https://media2.giphy.com/media/3o7rc6sa2RvKo8K5EI/200w.webp?cid=ecf05e47jklvhdu1b0vkqc27oa0nwj20hwrk2knk9laogbql&rid=200w.webp&ct=g")';
                body.style.backgroundSize="cover";
            }
            else if (descValue.includes('sun') || descValue.includes('clear sky')) {
                icon.innerHTML = "<i class=\"far fa-sun\"></i>";
                body.style.backgroundImage='url("https://media3.giphy.com/media/JeHRQDQyi6FW16gWpg/giphy.gif?cid=ecf05e47rjl70c2nt0lln5ejko3319gy0gut7rurl8eeacy8&rid=giphy.gif&ct=g")'
                body.style.backgroundSize="cover";
            }

        })
        .catch(err => alert("Wrong City Name"))
})

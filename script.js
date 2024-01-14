    // checking pattern in search bar
    const input = document.getElementsByClassName('search-bar__input');
    input[0].addEventListener('keypress', (e) => {
        let key = e.key;
        let regex = new RegExp("[^!@#$%^&*()]");
        if(!regex.test(key)){
            e.preventDefault();  
            return false;
        }
    });

    // AJAX
    fetch("https://baconipsum.com/api/?type=lucky", { method: 'GET' })
    .then(res => res.json())
    .then(response => {
        console.log(response);
        const text = document.querySelector('.content__subtitle');
        text.innerText = response;
    })
    .catch(err => {
        console.log("error" + err);
    });


    // hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".header__nav");
    let isHidden = false;

    hamburger.addEventListener("click", ()=>{
        hamburger.classList.toggle("active");
        nav.classList.toggle("active");
        const body = document.querySelector("body");
        if(isHidden){
            body.style = "overflow:auto";
        }
        else
            body.style = "overflow: hidden"
        isHidden = !isHidden;
    })

    document.querySelectorAll(".header__nav-list-item").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
        document.querySelector("body").style = "overflow: auto"
    }))


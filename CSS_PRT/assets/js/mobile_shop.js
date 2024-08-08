window.onload = function() {
    let display = document.getElementById("display");
    let images = document.querySelectorAll(".phone img");
    for (let im of images) {
        im.onclick = function() {
            display.src = this.src;
        }
    }

    let bg = document.querySelectorAll("div.product div");
    let btn = document.querySelectorAll(".button button");
    for (let i of btn) {
        i.onclick = function() {
            let prefix = this.getAttribute("value");
            display.src = `assets/images/galaxys8/${prefix}1.jpg`
            for (let i = 0; i < images.length; i++) {
                images[i].src = `assets/images/galaxys8/${prefix}${i + 1}.jpg`
            }
            for (b of bg) {
                b.style.background = `linear-gradient(lightblue, ${prefix.slice(0,-1)})`;
            }
        }
    }
    let content = document.querySelectorAll(".product div h2");
    let searchBtn = document.querySelector(".search");
    searchBtn.onclick = function() {
        searchContent = document.getElementById("search").value;
        console.log(document.getElementById("search").value);
        for (let i = 0; i < content.length; i++) {
            console.log(content[i].textContent.indexOf(searchContent));
            // console.log(i);
            if (content[i].textContent.indexOf(searchContent) !== -1) {
                bg[i].style.border = '2px solid red';
            }
        }
    }

}


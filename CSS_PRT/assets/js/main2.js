function deleteProduct(product) {
    let p = this.document.querySelector(".products");
    if (confirm("Bạn có chắc chắn xóa hay không?") === true) {
        p.removeChild(product);
    }
}

window.addEventListener('load', function() {
    let closes = document.querySelectorAll("a.close");
    let p = this.document.querySelector(".products");
    for (let i of closes) {
        i.onclick=function() {
            deleteProduct(i.parentElement);
            // if (confirm("Bạn có chắc chắn xóa hay không?") === true) {
            //     p.removeChild(i.parentElement);
            // }
        }
    }

    let insert = this.document.querySelector("a.insert");
    let btn = this.document.querySelector("input.btn");
    let form = this.document.querySelector("div.form");
    insert.addEventListener('click', function() {
        form.classList.toggle("show");
    })

    btn.addEventListener('click', function() {
        let ten = document.querySelector("div.form input.input-form:nth-child(1)");
        let gia = document.querySelector("div.form input.input-form:nth-child(2)");
        let anh = document.querySelector("div.form input.input-form:nth-child(3)");
        let newProduct = `
        <div class="product">
            <div class="new">
                <img src="${anh.value}" alt="IPhone">
                <h2>${ten.value}</h2>
                <div class="price">${gia.value}<sup>đ</sup></div>
            </div>
            <a onclick="deleteProduct(this.parentElement)"href="#" class="close">&times;</a>
        </div>
        `;
        // p.innerHTML = newProduct + p.innerHTML;
        let prod = document.querySelector(".product:first-child");
        prod.insertAdjacentHTML('beforebegin', newProduct);
        let t = setTimeout(function() {
            let tmps = document.querySelectorAll(".product .new");
            for (let e of tmps)
            e.classList.remove("new");
            clearTimeout(t);
        }, 1000);
    })
})
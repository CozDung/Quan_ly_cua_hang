var productList = []

var count = 0
function addProduct() {
    var productName = document.getElementById('productName').value
    var category = document.getElementById('category').value
    var quantity = document.getElementById('quantity').value
    var price = document.getElementById('price').value

    var product = {
        'productName': productName,
        'category': category,
        'quantity': quantity,
        'price': price
    }

    productList.push(product)

    document.getElementById('result').innerHTML += `<tr>
        <td>${++count}</td>
        <td>${productName}</td>
        <td>${category}</td>
        <td>${quantity}</td>
        <td>${price}</td>
        <td><button class="btn btn-edit active" onclick="editProduct(${count - 1}">Edit</button></td>
        <td><button class="btn btn-delete active" onclick="deleteProduct(${count - 1})">Delete</button></td>
    </tr>`
}

function deleteProduct(index) {
    // console.log(index)
    productList.slice(index, 1)
    showProduct()
}

function showProduct() {
    document.getElementById('result').innerHTML = ''

    for(var i = 0; i < productList.length; i++){
            document.getElementById('result').innerHTML += `<tr>
            <td>${i+1}</td>
            <td>${productList[i].productName}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].quantity}</td>
            <td>${productList[i].price}</td>
            <td><button class="btn btn-edit active" onclick="editProduct(${i}">Edit</button></td>
            <td><button class="btn btn-delete active" onclick="deleteProduct(${i})">Delete</button></td>
        </tr>`
    }
}
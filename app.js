let candy_container = document.getElementById("candy_container")

axios.request({
    url: "http://127.0.0.1:5000/api/candy"
}).then((success) => {
    for(let i = 0; i < success[`data`].length; i++) {
        candy_container.insertAdjacentHTML(`beforeend`,
        `
            <div>
                <h2>${success[`data`][i][0]}</h2>
                <img src=${success[`data`][i][1]} />
                <p>${success[`data`][i][2]}</p>
                <button id="${success[`data`][i][0]}">Delete</button
            </div>
        `)
    }
}).catch((failure) => {
    failure
})
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
                <button id="${success[`data`][i][3]}" class="delete_button">Delete</button
            </div>
        `)
    }
}).catch((failure) => {
    submit_button.insertAdjacentHTML(`afterend`, `<p>Error</p>`)
})

function handle_submit(details) {
    axios.request({
        url: "http://127.0.0.1:5000/api/candy",
        method: "POST",
        data: {
            name: document.getElementById("name").value,
            image_url: document.getElementById("img_url").value,
            description: document.getElementById("description").value,
        }
    }).then((success) => {
        submit_button.insertAdjacentHTML(`afterend`, `<p>Candy Submitted</p>`)
    }).catch((error) => {
        submit_button.insertAdjacentHTML(`afterend`, `<p>Error</p>`)
    })
}

let submit_button = document.getElementById("submit_button")
submit_button.addEventListener(`click`, handle_submit)

function handle_delete(details) {
    axios.request({
        url: "http://127.0.0.1:5000/api/candy",
        method: "DELETE",
        data: {
            candy_id: details[`target`][`id`]
        }
    }).then((success) => {
        success
    }).catch((error) => {
        error
    })
}

let delete_button = document.getElementsByClassName("delete_button")
delete_button = addEventListener(`click`, handle_delete)
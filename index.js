const content = document.querySelector("#content")

window.addEventListener("load", () =>{


    fetch("https://api.nationalize.io" , {mode: "cors"})
    .then((response) =>{
        console.log(response)
        return response.json()
    })
    .then((data)=>{
        console.log(data)
        data.forEach((element) =>{
            html += `<p> ${element.country_id} </p>`
        })

        content.innerHTML = html
    })
    .catch((error) =>{
        console.log(error)
    })

})
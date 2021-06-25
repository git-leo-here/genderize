

document.querySelector('.js-go').addEventListener("click",()=>{
    let input= document.querySelector('.js-userinput').value
    search(input)
})

document.querySelector('.js-userinput').addEventListener('keyup',(e)=>{
    if (e.code == "Enter") {
        let input= document.querySelector('.js-userinput').value
        search(input)
    }
})

function search(query){
    query.replace(" ","+")
    const url ="https://api.genderize.io?name="

    let request = new XMLHttpRequest()
    request.open('GET', url+query)
    request.send()

    request.addEventListener('load',  (e)=>{
        let data = e.target.response
        pushToDOM(data)
    })
}

function pushToDOM(input){
    const container = document.querySelector(".js-container");
    let response=JSON.parse(input)

    let gender=response.gender
    
    container.innerHTML=gender

}
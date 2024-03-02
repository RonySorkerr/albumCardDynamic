
const loadAPI = async () => {
    const url = 'https://jsonplaceholder.org/users'
    const res = await fetch(url)
    const data = await res.json()
    loadData(data)
}

const loadData = (data) => {
    const cardContainer = document.getElementById('cardContainer')
    data.forEach(users => {
        
        // console.log(users)
        const userCard = document.createElement('div')
        userCard.classList = `card bg-base-100 shadow-xl`
        userCard.innerHTML = `
        <div class="card-body text-center">
        <h2 class="text-center text-2xl font-extrabold">${users.firstname} ${users.lastname}</h2>
        <p>${users.website}</p>
        <p></p>
        <p></p>
        <div class="card-actions justify-center"><button class="btn btn-primary" onclick="fullInfo()">${users.id}</button></div>
        </div>
        `
        cardContainer.appendChild(userCard)
    });
}

const fullInfo = () =>{
    console.log('clicked')
}

loadAPI() 
function mysearch() {
    const searchInput = document.getElementById('searchInput').value

    let filtereddata = users.filter(
        user => user.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
    )

    let mydiv = ''
    filtereddata.forEach(fuser =>{
        mydiv += `<div> ${fuser.name}    </div>`
    })

    demoDiv.innerHTML = mydiv

} mysearch()


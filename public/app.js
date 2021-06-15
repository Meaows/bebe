

let nickname = ""
let color = ""

let sendMessage = async (message) => {
    event.preventDefault()
    var message = document.getElementById("message").value
    await fetch('/message', {
      method: 'POST',
      body: JSON.stringify({nickname, message, color}),
      headers: { 'Content-Type': 'application/json'},
    })

    
};

function addMessage(nickname, message, color) {
    let divek = document.createElement('div');
    let banan = document.createElement('p')
    let banan2 = document.createElement('p')
    banan.style.color = color
    banan.id = "banan"
    banan.append(nickname + ": ")
    divek.append(banan)
    banan2.classList.add("banan2")
    banan2.append(message);
    divek.append(banan2)
    document.getElementById("text").append(divek);
    $('.banan2').emoticonize(({delay: 15}));
}


let newMessage = async() => {
    let response = await fetch('/listen');
    let data = await response.json()
    addMessage(data.nickname, data.message, data.color);
    newMessage()

}

let Bebe = async () => {
    nickname = prompt('Twoj nick:');
    await fetch('/newUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nickname }),
    }).then(response => {return response.json()}).then(kolorek => {color = kolorek})
    console.log(color)
  };


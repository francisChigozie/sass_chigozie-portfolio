//Listen toAPI Button3
document.querySelector('.button3').addEventListener
('click', getApiData)

document.querySelector('.button2').addEventListener
('click', sendForm)


//GET External DATA
function getApiData(){
    fetch('https://digitalexhibition.herokuapp.com/contact') //https://api.github.com/users
    .then(function(res){
       return res.json()
    })
    .then(function(data){
    console.log(data)

    let output = '';
    data.forEach(function(user){
        output += `
        <li>${user.login}: ${user.following_url}</li> `
    })
    document.querySelector('#output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err)
        document.querySelector('#errors').innerHTML = err;
    })
   
}

// Submit / Post the form
document.querySelector('.button2').addEventListener('click', sendForm);
const url = "https://digitalexhibition.herokuapp.com/contact";

const data = [
    document.getElementById('name'),
    document.getElementById('subject'),
    document.getElementById('email'),
    document.getElementById('phone'),
    document.getElementById('text'),
]
             

function sendForm() {
     fetch(url, {
               method: 'POST',
               headers: {
                   'Content-type': 'application/json'
               },
               body: JSON.stringify(data)
           })
           .then(function(res){
            return res.json()
            })
            .then(function(data){
            console.log(data)

            let output = 'Contact sent successfully';
            
            document.querySelector('#output').innerHTML = output;
            })
            .catch(function(err){
                console.log(err)
                document.querySelector('#errors').innerHTML = err;
            })
           
}
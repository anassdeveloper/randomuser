const content = document.querySelector('.content');

function fetchData(url){
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const result = [...data.results];
        createCardHtml(result[0])
    })
}

fetchData('https://randomuser.me/api/');


function createCardHtml(data){
    const { picture, name,email, gender, phone, location,dob, registered } = data;
    let html = `
    <div class="card">
       <div class="card_head">
          <img src="${picture.large}" alt="profil" />
          <h3>${name.title + " " + name.first + " " + name.last}</h3>
       </div>
       <div class="card_body">
           <p>${location.city} City</p>
           <p>mail : ${email}</p>
           <p>${gender}</p>
           <p>${dob.age} years</p>
           <p>${phone}📲</p>
       </div>
       <div class="card_date">
          <p>📆${registered.date.slice(0, 10)}</p>
       </div>
    </div>
    `;

    content.insertAdjacentHTML('beforeend', html)
}
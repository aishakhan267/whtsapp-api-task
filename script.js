// const axios = require('axios');

// Make a request for a user with a given ID
axios.get('https://tk-whatsapp.herokuapp.com/messages')
  .then(function (response) {
    // handle success
    console.log(response);
    for (let i = 0; i < response.data.length; i++) {
      let messages = response.data[i]
      document.querySelector("ul").innerHTML +=
        `<li>
      <div class="whole-page">
        <div class="corner">
          <img src="${messages.profilePic}">
        </div>
        <div id="final">
          <div class="convo">
            <h3>${messages.name}</h3>
            <span>${messages.firstLine}</span>
            <span>${messages.number}</span>
          </div>
          <div class="chat">
            <span id="circle">${messages.time}</span>
            <span id="shape">${messages.numbUnread}</span>
          </div>
        </div>
      </div>
      </li>`
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

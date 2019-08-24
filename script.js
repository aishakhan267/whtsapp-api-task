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
            <h2>${messages.name}</h2>
            <span id="text">${messages.firstLine}</span>
            <span>${messages.number}</span>
          </div>
          <div class="chat">
            <span1>${messages.time}</span>
            <span>${messages.numbUnread}</span>
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

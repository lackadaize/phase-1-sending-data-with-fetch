function submitData () {
const formData = {
    name: "Steve",
    email: "steve@steve.com",
};

const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
};

return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
         document.querySelector('body').append(object.id);
    })
    .catch(function (error) {
          document.querySelector('body').append(error.message);
    });
};
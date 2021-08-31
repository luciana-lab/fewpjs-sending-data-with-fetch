// Add your code here

/*
const destinationURL = "http://localhost:3000/dogs";

// configurationObject contains 3 core components for a POST request: HTTP verb, headers, body
const configurationObject = {
  // default: verb is GET, reason we need to specify the POST request
  method: "POST",

  // headers are sent just ahead of the actual data, contain info about the data being sent
  // Content-Type indicate the format the data is being sent
  // After send data, the server at the destination URL will send back a response, it's a good practice to tell the server what data format we accept in return
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },

  // data being sent in fetch() must be stored in the body of the configurationObject
  // Whatever data we're assin to the body needs to be a string
  // JSON.stringify() converts objects to strings
  body: JSON.stringify({
    dogName: "Toddy",
    dogBreed: "Poodle and Pincher",
  }),
};

// 1st argument: string representing the destionation URL
// 2nd argument: JavaScript Object with certain properties that can change fetch() default behavior
fetch(destinationURL, configurationObject)
  // pass a callback function that takes in response as an argument
  // his is a Response object, represents what the destination server sent back to us
  // json() converts the body of the response from JSON to a plain old JavaScript object
  // the result of json() is returned and made available in the 2nd then()
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  // when something goes wrong in a fetch(), catch() will be called
  // allow us to write code to handle the error
  .catch(function (error) {
    alert("Bad things! Ragnarok!");
    console.log(error.message);
  });
*/

// All in one:

// function submitData(name, email) {
//     return fetch("http://localhost:3000/users", {
//         method: "POST",
//         headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//         },
//         body: JSON.stringify({
//             name, 
//             email
//         })
//     })
//     .then(resp => resp.json())
//     .then(obj => document.body.innerHTML = obj.id)
//     .catch(function (error) {
//       document.body.innerHTML = error.message
//     })
// }

// Breaking into pieces:

function submitData(name, email) {

    const formData = {
        name,
        email
    };
    
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(resp => resp.json())
    .then(obj => document.body.innerHTML = obj.id)
    .catch(function (error) {
        document.body.innerHTML = error.message
    });
}
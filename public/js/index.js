function sayHello() {
  alert('Hello User!!! you just clicked a button');
}
function getData() {
  fetch('http://localhost:5000/user/hello')
    .then((resp) => resp.json())
    .then((resp) => alert(resp.message))
    .catch((err) => console.log(err));
}

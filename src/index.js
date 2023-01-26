// Researched using the React documentation components, React elements and the map() method. The React Bootstrap for the card component too.
// https://reactjs.org/docs/components-and-props.html
// https://reactjs.org/docs/lists-and-keys.html
// https://react-bootstrap.github.io/components/cards/

//2
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

//3
let userInfo = {
  name: "Nas",
  surname: "Escobar",
  date_of_birth: "12/12/2012",
  address: "15 Hollywood Hills",
  country: "USA",
  email: "TheWorldIsYours@gmail.com",
  telephone: "09878987898",
  company: "Nas Inc",
  profile_picture: "https://media.fashionnetwork.com/m/35fa/f43a/492c/bc6c/e5ff/185c/2642/aa06/c60e/b592/b592.jpg",
  shopping_cart: ["Wine", "Ice cream", "Cheese"]
}

//4
function addShoppingCart(){
  return (
    userInfo.shopping_cart.map((item) =>
      <li>{item}</li>
    )
  )
}

//5
function Main(){
  return (
    <div>

      {/* 6 */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />     

      {/* 7 */}
      <Card style={{ width: '18rem' }}>
    <h1>{userInfo.name} {userInfo.surname}</h1>
    <Card.Img variant="top" src={userInfo.profile_picture} width = "200px" />
    <Card.Body>
      <Card.Text>
        <p>DOB: {userInfo.date_of_birth}</p>
        <p>ADDRESS: {userInfo.address}</p>
        <p>COUNTRY: {userInfo.country}</p>
        <p>EMAIL: {userInfo.email}</p>
        <p>TELEPHONE: {userInfo.telephone}</p>
        <p>COMPANY: {userInfo.company}</p>
        
        {/* 9 */}
        <ul>Favourite Foods</ul>
        <p>{addShoppingCart()}</p>
      </Card.Text>
    </Card.Body>
  </Card>
    </div>
  )
}

//9
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
  Thinking
    1. This program shows the details of a user created using React.

    2. Imported several important modules and the the card component from React Bootstrap module. This is required otherwise we wouldn't be able to make use of React Bootstrap's functionality. I created a custom stylesheet named "styles.css" for several of my elements.

    3. An object containing the user's important information.

    4. I loop over our array items in userInfo.shopping_cart, using the map() method to return a new <li> element with each item as the text inside.
    
    5. The main content for our React app is contained in this component named "Main".

    6. A link to our React Bootstrap css styles. By default, unless my custom stylesheet overrides it, the styles from here are applied to my elements. 

    7. I use the "Card" component from React Bootstrap to create a card with details from my user contained inside. Between '{}' I have placed the values from my "userInfo" object inside my <p> elements.

    8. I've created an unordered list here. Inside "addShoppingCart" component is called, which populates the list with an item from userInfo.shopping_cart.

    9. I render my component "Main" into the "root" named element in our index.html file.
*/

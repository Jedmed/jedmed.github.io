# Projects
<ul>
  <li><h2><a href="/Projects/Harvest_Game">Harvest Game</a></h2>
    <h3>Summary</h3>
  <p>A Game where two players compete to plant and harvest their crops with a watering feature that provides a strategic element.</p>
    <h3>Built with:</h3>
    <p>Javascript, jQuery, Bootstrap, HTML/CSS</p>
    <h3>Challenges</h3>
    <p>The water plant functionality in the game requires initiating an event over multiple targets. I was able to do this by finding the Index of the current target; generating an array with all targets relative to the Index of current target; then intiating the event on the array.</p>
    <p>When working on the Single Player mode, the weeds had to be randomly generated on an empty field. At first I made a while loop that would keep looping through and checking each field until it ran out of fields to check. Unfortunately this method would occassionally cause the browser to crash due to the high randomness in finding an empty field. So instead I made an array containing the index of the remaining empty fields and have each loop simply pop the index as it found matches.</p>
    <h3>Future Features (Achieved)</h3>
    <p>I would like to work on a Single Player mode where the player would have to plant, water and harvest as many crops as they can before their field gets overridden with weeds that are being continuously being generated.</p>
  </li>
  
  <li><h2><a href="https://protected-tor-29059.herokuapp.com/pokedex/">Pokedex</a></h2>
    <h3>Summary</h3>
  <p>An Express CRUD Application displaying the data of all the 151 original Pokemons. It has all 7 RESTful Routes and you can modify the data. The Pokedex does not have a Database connected to it and will reset upon cache emptying.</p>
    <h3>Built With:</h3>
    <p>Javascript, Node.js, Express, Bootstrap, EJS/CSS</p>
    <h3>Challenges</h3>
    <p>Creating a Schema that would house the stats of each Pokemon proved tough and required some creativity.</p>
  </li>
  
  <li><h2><a href="https://didd-shop.herokuapp.com/shop">DIDD (E-Commerce Concept Store)</a></h2>
    <h3>Summary</h3>
  <p>DIDD is a CRUD Applications built in Express using Mongo Database. It has all 7 RESTful Routes and 5 Controllers including a Login and Admin System. The Shopping Cart was written from scratch and uses its own model.</p>
    <h3>Built With:</h3>
    <p>Javascript, Node.js, MongoDB, Mongoose, Express, Bootstrap, EJS/CSS</p>
    <h3>Challenges</h3>
    <p>I wanted to set up multiple controllers for various purposes and found it hard to control which routes existed with each controller and what session to parse. I also wanted to make sure that users would not be able to access areas they weren't allowed or try to go to pages that did not exist.  This required a lot of loss-ends tying and making sure that every scenario was accounted for.</p>
  <p>Another challenge that I encountered was learning to build a Shopping Cart from scratch. The Cart was no ordinary Schema and I had to improvise ways of storing the necessary item in an array and calling the item when needed</p>
    <h3>Future Features</h3>
    <p>A User Account area for users to change their account details.</p>
  <p>A Checkout feature where users can checkout with their shopping cart</p>
  <p>The ability to alter Shopping Cart product quantities</p>
  <p>The ability to select what size clothing to purchase</p>
  </li>
  
  <li><h2><a href="https://peaceful-ocean-64726.herokuapp.com/">Online Blog</a></h2>
    <h3>Summary</h3>
  <p>The Online Blog is an open blogging site where any user can post a blog anonymously. The user can also create an account in order to delete and edit blogs. This was my first introduction into Angular.js and the use of AJAX to create a website.</p>
    <h3>Built With:</h3>
    <p>Javascript, Angular.js Node.js, MongoDB, Mongoose, Express, Bootstrap, HTML/CSS</p>
    <h3>Challenges</h3>
    <p>I wanted only the logged in Users to be able to edit and delete Blog Posts so I had to write the update and delete routes in a way that was only accessible to a user-session.</p>
  </li>
</ul>

# Mini-Projects
<ul>
  <li><a href="/tic_tac_toe">Tic Tac Toe</a></li>
  <li><a href="/calculator">Calculator</a></li>
</ul>

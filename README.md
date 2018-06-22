# Projects
<ul>
  <li><h2><a href="/Projects/Harvest_Game">Harvest Game</a></h2>
    <h3>Summary</h3>
  <p>A Game where two players compete to plant and harvest their crops with a watering feature that provides a strategic element.</p>
    <h3>How it was built</h3>
    <p>Harvest Game is built primarily using jQuery. The game board is generated in Javascript and the weeds are randomly placed, hence every gameboard you play on will be different!</p>
    <h3>Challenges</h3>
    <p>The water plant functionality in the game requires initiating an event over multiple targets. I was able to do this by finding the Index of the current target; generating an array with all targets relative to the Index of current target; then intiating the event on the array.</p>
    <p>When working on the Single Player mode, the weeds had to be randomly generated on an empty field. At first I made a while loop that would keep looping through and checking each field until it ran out of fields to check. Unfortunately this method would occassionally cause the browser to crash due to the high randomness in finding an empty field. So instead I made an array containing the index of the remaining empty fields and have each loop simply pop the index as it found matches.</p>
    <h3>Future Features (Achieved)</h3>
    <p>I would like to work on a Single Player mode where the player would have to plant, water and harvest as many crops as they can before their field gets overridden with weeds that are being continuously being generated.</p>
  </li>
</ul>

# Mini-Projects
<ul>
  <li><a href="/tic_tac_toe">Tic Tac Toe</a></li>
  <li><a href="/calculator">Calculator</a></li>
</ul>

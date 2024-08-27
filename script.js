 //Initialize the score to 0

 let score = 0;

 /**
  * Update the score displayed on the screen.
  * It selects the HTML element with the class 'score'
  * and updates its text content to reflect the current score
  */
 function updateScore(){
    document.getElementById('score').textContent = score;
 }

 /**
  * Resets the game by:
  * - Setting the score back to 0 and updating the displayed score.
  * - Removing the 'found' and 'rotated' classes from all the card
  * elements with the class 'one' 
  */

 function restart(){
    score = 0;
    updateScore();
    const cards = document.querySelectorAll('.one');
    cards.forEach(card => {
        card.classList.remove('found', 'rotated');
    });
 }

 /**
  * Handles the logic for rotating a card and matching pairs
  * 
  * @param {string} id - The ID of the card element to be rotated.
  * @param {string} image - The class name representing the image of the card
  * used to identify matching pairs
  * This function checks if the card is already part of a found pair
  * 
  * If not , it checks if there's already a rotated card. If the images of the rotated 
  * cards match, they are marked as found 
  * 
  * If they don't match , the rotated card is flipped back.The current card is then rotated.
  * The score is incremented and updated if a match is found. 
  */

function rotateCard(id, image) {
    debugger
    let imageToSpin = document.getElementById(id);
    let foundItems = document.getElementsByClassName("found");
    let rotatedItems = document.getElementsByClassName("rotated");

    let idFound = false;                               

    if (foundItems.length > 0){
        Array.prototype.slice.call(foundItems)?.forEach(function(element) {
            if(element.classList === imageToSpin.classList)
            {
                idFound=true;
            }
        });
    }

    if(!idFound){
        if(rotatedItems.length > 0){
            Array.prototype.slice.call(rotatedItems)?.forEach(function(element) {
                if(element.classList.contains(image) && element.id !== id)
                {
                    element.classList.add('found');
                    imageToSpin.classList.add('found');
                    score ++;
                    updateScore();
                }else{
                    if(!element.classList.contains('found'))
                        element.classList.toggle('rotated');
                }
            });
        }
        imageToSpin.classList.toggle("rotated");
    }
}

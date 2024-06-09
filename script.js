//Function to find and return the intersection of the two inputted lists on index page
function findDuplicates(event) {
// Prevents  form submission being sent to server and therefore the page from reloading
//allows javascript to handle it instead 
event.preventDefault();

//get the input data from the textarea form and assign it to list1 and 2
//target the data from thr input form with .value
//split each value, removing any whitespace (tabs, spaces, newlines)
//creates a new array by mapping to each value in the current array, converting each value one to a number
const list1 = document.getElementById('list1').value.split(/\s+/).map(Number)
const list2 = document.getElementById('list2').value.split(/\s+/).map(Number)

//finds the intersection of list1 and 2
//filter creates a new array containing onl those elements in the current array that passs as True in the conditional statement
//value refer to each element in the array
//list2.includes(value) iterates through each value in list 2 to see if it is in list one.
//new array is created from all that pass as true (values that are in both list1 and list2)
const duplicates = list1.filter(value => list2.includes(value));

//gets the id 'duplicates' of the <p> element from html
//.textContent sets or replaces any content of the selected element  
document.getElementById('duplicates').textContent = duplicates.length > 0 ? duplicates.join(' '): 'No duplicates found.';

}

// select elements from the DOM
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// get chapters from localStorage OR use empty array
let chaptersArray = getChapterList() || [];

// display saved chapters on page load
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// button click event
button.addEventListener('click', () => {
  if (input.value != '') {
    displayList(input.value);      // display the chapter
    chaptersArray.push(input.value); // add to array
    setChapterList();              // update localStorage
    input.value = '';              // clear input
    input.focus();                 // focus input
  }
});

// build and display a list item
function displayList(item) {
  let li = document.createElement('li');
  let deletebutton = document.createElement('button');

  li.textContent = item;
  deletebutton.textContent = '❌';
  deletebutton.classList.add('delete');

  li.append(deletebutton);
  list.append(li);

  deletebutton.addEventListener('click', () => {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });
}

// save array to localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// get array from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// remove chapter from array and localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}
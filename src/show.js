function showMore() {

    const showMore = document.getElementById('moreContent');
    const button = document.getElementById('show');


    if (button.innerText === 'Show More') {
        showMore.classList.remove('hidden');
        showMore.classList.add('some-class');  // Replace 'some-class' with the class you want to add
        button.textContent = 'Show Less';
    } else {
        showMore.classList.remove('show');  // Replace 'some-class' with the class you want to remove
        showMore.classList.add('hidden');
        button.textContent = 'Show More';
    }


}
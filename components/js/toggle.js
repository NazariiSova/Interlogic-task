function toggleSwitch(option) {
    const switchContainer = option.parentElement;
    const options = switchContainer.getElementsByClassName('cards__toggle-option');
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('active');
    }
    option.classList.add('active');
}
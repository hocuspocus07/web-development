document.addEventListener('DOMContentLoaded', function () {
     const workForWords = document.getElementById('work-for-words');
    const words = ['innovation', 'passion for technology', 'excellence', 'customer satisfaction', 'positive impact'];
    let wordIndex = 0;
    let letterIndex = 0;

    function typeWord() {
        if (letterIndex < words[wordIndex].length) {
            workForWords.textContent += words[wordIndex].charAt(letterIndex);
            letterIndex++;
            setTimeout(typeWord, 200);
        } else {
            setTimeout(eraseWord, 1000); // wait before erasing 
        }
    }

    function eraseWord() {
        if (letterIndex > 0) {
            workForWords.textContent = words[wordIndex].substring(0, letterIndex - 1);
            letterIndex--;
            setTimeout(eraseWord, 100);
        } else {
            wordIndex = (wordIndex + 1) % words.length; // move to next word
            setTimeout(typeWord, 500); // wait
        }
    }

    typeWord();
    document.body.classList.add('loaded');
});

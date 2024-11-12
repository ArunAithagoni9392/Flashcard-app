const flashcardsContainer = document.getElementById('flashcards');

function addFlashcard() {
  const question = document.getElementById('question').value.trim();
  const answer = document.getElementById('answer').value.trim();

  if (question && answer) {
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');
    
    const questionText = document.createElement('div');
    questionText.classList.add('question');
    questionText.textContent = question;

    const answerText = document.createElement('div');
    answerText.classList.add('answer');
    answerText.textContent = answer;

    flashcard.appendChild(questionText);
    flashcard.appendChild(answerText);

    flashcard.addEventListener('click', () => {
      answerText.style.display = answerText.style.display === 'none' ? 'block' : 'none';
    });

    flashcardsContainer.appendChild(flashcard);

    document.getElementById('question').value = '';
    document.getElementById('answer').value = '';
  } else {
    alert('Please enter both question and answer.');
  }
}
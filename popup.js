// Track clicks on model cards for analytics/debugging
document.addEventListener('DOMContentLoaded', () => {
  const modelCards = document.querySelectorAll('.model-card');
  
  modelCards.forEach(card => {
    card.addEventListener('click', (e) => {
      const modelName = card.querySelector('.model-name').textContent;
      console.log(`Opening ${modelName}`);
      // Chrome extension will handle opening the link in a new tab
    });
  });
});

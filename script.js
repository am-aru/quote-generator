const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The purpose of our lives is to be happy. - Dalai Lama",
    "Get busy living or get busy dying. - Stephen King",
    "You only live once, but if you do it right, once is enough. - Mae West",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  ];
  
  const quoteElement = document.getElementById('quote');
  const newQuoteButton = document.getElementById('new-quote-btn');
  const tweetButton = document.getElementById('tweet-btn');
  
 
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
    tweetButton.classList.remove('hidden'); 
  }
  

  function tweetQuote() {
    const quoteText = quoteElement.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`;
    window.open(twitterUrl, '_blank'); 
  }
  
 
  newQuoteButton.addEventListener('click', generateRandomQuote);
  tweetButton.addEventListener('click', tweetQuote);
  
  
  generateRandomQuote();
  
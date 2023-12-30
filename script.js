async function fetchRandomQuote() {
    try {
      const response = await fetch ('https://type.fit/api/quotes');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomQuote = data[randomIndex];
      return randomQuote;
    } catch (error) {
      console.log('Error fetching the quote:', error);
      return null;
    }
  }
  
  async function displayRandomQuote() {
    const quoteContainer = document.getElementById('quote');
    const authorContainer = document.getElementById('author');
  
    const quote = await fetchRandomQuote();
  
    if (quote) {
      quoteContainer.textContent = `"${quote.text}"`;
      authorContainer.textContent = `- ${quote.author || 'Unknown'}`;
    } else {
      quoteContainer.textContent = 'Failed to fetch a quote. Please try again later.';
      authorContainer.textContent = '';
    }
  }
  
  displayRandomQuote();
  
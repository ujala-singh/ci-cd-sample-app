// tests/script.test.js
const fs = require('fs');

describe('Frontend App Tests', () => {
  beforeEach(() => {
    // Load the HTML into the document body from the 'apps' folder
    document.body.innerHTML = fs.readFileSync('app/index.html', 'utf8');
  });

  test('message should be empty initially', () => {
    // Find the message element
    const message = document.getElementById('message');

    // Assert that the message is initially empty
    expect(message.innerHTML).toBe('');
  });

  test('button should exist in the document', () => {
    // Find the button element
    const button = document.getElementById('click-me');

    // Assert that the button exists
    expect(button).not.toBeNull();
  });

  test('message element should exist in the document', () => {
    // Find the message element
    const message = document.getElementById('message');

    // Assert that the message element exists
    expect(message).not.toBeNull();
  });

  test('button click should change message', () => {
    // Load the JavaScript into the document head from the 'apps' folder
    const script = document.createElement('script');
    script.src = 'app/script.js';
    script.onload = () => {
      // Find elements
      const button = document.getElementById('click-me');
      
      // Simulate the button click
      button.click();

      // Find the message element
      const message = document.getElementById('message');

      // Assert that the message has changed
      expect(message.innerHTML).toBe('You clicked the button!');
    };
    document.head.appendChild(script);
  });
});

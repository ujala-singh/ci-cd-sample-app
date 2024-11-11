// tests/script.test.js
const fs = require('fs');

describe('Frontend App Tests', () => {
  test('button click should change message', () => {
    document.body.innerHTML = fs.readFileSync('app/index.html');
    const button = document.getElementById('click-me');
    const message = document.getElementById('message');

    button.click();
    expect(message.innerHTML).toBe('You clicked the button!');
  });
});

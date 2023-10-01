//your code here
cy.contains('3 random audios');
cy.get('audio', { timeout: 10000 }).should($audios => {
  // Your assertions here
});

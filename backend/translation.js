const patterns = [
    {
      pattern: ['🏃', '🌧️'],
      templates: ['{person} ran from the rain', 'Quick dash through the storm']
    },
    {
      pattern: ['🐱', '🐟'],
      templates: ['The cat spotted its favorite meal', 'Feline fishing adventures']
    }
  ];
  
  function matchPattern(sequence) {
    for (const rule of patterns) {
      if (sequence.join('') === rule.pattern.join('')) {
        return rule.templates[Math.floor(Math.random() * rule.templates.length)];
      }
    }
    return "A mysterious emoji tale...";
  }
  
  function translateEmojis(sequence) {
    return matchPattern(sequence);
  }
  
  module.exports = { translateEmojis };
  
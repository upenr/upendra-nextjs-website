const mediumToMarkdown = require('medium-to-markdown');
 
// Enter url here
mediumToMarkdown.convertFromUrl('https://towardsdatascience.com/machine-learning-with-ibm-powerai-getting-started-with-image-classification-part-1-6219e3c6a9fa')
.then(function (markdown) {
  console.log(markdown); //=> Markdown content of medium post
});
const prompts = require('prompts');

(async () => {
    const response = await prompts({
        type: 'text',
        name: 'meaning',
        message: 'What is the name of your character'
    });

    console.log(response.meaning);
})();
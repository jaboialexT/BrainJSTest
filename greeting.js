const brain = require('brain.js');
const data = require('./greetingsData.json');
const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
}));

network.train(trainingData,{
    iterations: 2000,
    log: stats=>{
        console.log(stats)
    }
});

const output = network.run("hello");

console.log(`Category: ${output}`)
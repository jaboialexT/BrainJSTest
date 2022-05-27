const brain = require('brain.js');

const network = new brain.recurrent.LSTM();

const trainingData = [
    {
        input: "We cannot solve problems with the kind of thinking we employed when we came up with them.",
        output:"Albert Einstein"
    },
    {
        input: "Learn as if you will live forever, live like you will die tomorrow.",
        output:"Mahatma Gandhi"
    },
    {
        input: "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
        output:"Mark Twain"
    },
    {
        input: "When you change your thoughts, remember to also change your world.",
        output:"Norman Vincent Peale"
    }
]

network.train(trainingData,{
    iterations: 500,
    log:stats=>{
        console.log(stats)
    }
})

const output = network.run("Stay")

console.log(`Author: ${output}`);
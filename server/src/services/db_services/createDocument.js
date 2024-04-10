const readline = require('readline');

const createDocument = async () => {

    let task_name;
    let start_coordiantes;
    let finish_coordiantes;
    let positions;
    let completed;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve, reject) => {
        rl.question(' Enter the task name: ', (answer) => {
            task_name = answer;
            rl.question(' Enter start coordinates: ', (answer) => {
                start_coordiantes = answer;
                rl.question(' Enter finish coordinates: ', (answer) => {
                    finish_coordiantes = answer;
                    rl.close();

                    const document = {
                        'task_name': task_name,
                        'start_coordinates': start_coordiantes,
                        'finish_coordinates': finish_coordiantes,
                        'positions': [start_coordiantes],
                        'completed': start_coordiantes === finish_coordiantes
                    };

                    resolve(document);
                });
            });
        });
    });
}

module.exports = createDocument;

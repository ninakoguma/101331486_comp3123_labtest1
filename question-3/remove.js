const fs = require('fs');
const path = require('path');

// sets the folder path
const logsFolder = path.join(__dirname, 'Logs');

// deletes the files and remove folder
if (fs.existsSync(logsFolder)) {
    const files = fs.readdirSync(logsFolder);

    for (let i = 0; i < files.length; i++) {
        console.log(`delete files...${files[i]}`);
        fs.unlinkSync(path.join(logsFolder, files[i]));
    }

    fs.rmdirSync(logsFolder);
    console.log('The Logs have been removed from the folder!');
} else {
    console.log('There are no logs that can be removed!');
}
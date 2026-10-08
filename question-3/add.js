const fs = require('fs');
const path = require('path');

// sets the folder path
const logsFolder = path.join(__dirname, 'Logs');

// make folder if it is missing
if (!fs.existsSync(logsFolder)) {
    fs.mkdirSync(logsFolder);
}

// creates 10 new log files
for (let i = 0; i < 10; i++) {
    const file = `log${i}.txt`;
    const filePath = path.join(logsFolder, file);
    
    fs.writeFileSync(filePath, 'some sample text');
    console.log(file);
}
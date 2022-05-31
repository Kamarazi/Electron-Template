const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

// Listen for the app to be ready
app.on('ready', function(){
    // Create the window
    mainWindow = new BrowserWindow({});
    // Load the html file in the window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol:'file:',
        slashes: true
    }));

    // Build the menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    // Insert menu
    Menu.setApplicationMenu(mainMenu);
});

//Create menu template
const mainMenuTemplate = [{
    label:'File',
    submemu:[
        {   // change this
            label: 'a'
        },
        {
            label: 'b'
        }
    ]
}]

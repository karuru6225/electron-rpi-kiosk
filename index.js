const electron = require('electron');
const {app, BrowserWindow} = electron;
const config = require('./config.js');

let mainWindow;

function createWindow(){
  mainWindow = new BrowserWindow(config.mainWindow);

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  //*
  mainWindow.webContents.openDevTools({
    mode: 'undocked'
  });//*/
  mainWindow.on('resize', ()=>{
    console.log(mainWindow.getSize());
  });
  mainWindow.on('move', ()=>{
    console.log(mainWindow.getPosition());
  });
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
}

app.on('ready', createWindow);
app.on('window-all-closed', function(){
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('activate', function(){
  if(mainWindow === null){
    createWindow();
  }
});

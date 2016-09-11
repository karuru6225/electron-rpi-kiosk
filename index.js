const electron = require('electron');

const {app, BrowserWindow} = electron;

let mainWindow;

function createWindow(){
  mainWindow = new BrowserWindow({
    width: 800,
    height: 480,
    fullscreen: true,
    frame: false
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  //mainWindow.webContents.openDevTools();
  mainWindow.on('closed', function(){
    mainWindow = null;
  });
  setInterval(()=>{
    console.log(mainWindow.getSize());
  },1000);
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

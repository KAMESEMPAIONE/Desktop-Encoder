const { app, BrowserWindow } = require("electron")
const path = require("path")

const createWindow = () => {
  const win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    autoHideMenuBar: true,
    icon: path.join(__dirname, "reactBuild", "logo.png"),
  })

  win.loadFile(path.join(__dirname, "reactBuild", "index.html"))
  win.maximize()
}

app.whenReady().then(() => {
  createWindow()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

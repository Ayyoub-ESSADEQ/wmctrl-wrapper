const { exec } = require('child_process');
const path = require('path');
const os = require('os');

class Wmctrl {
  constructor() {
    // Determine the architecture
    const arch = os.arch();
    let binaryName;

    switch (arch) {
      case 'x64':
        binaryName = 'wmctrl-amd64';
        break;
      case 'arm64':
        binaryName = 'wmctrl-arm64';
        break;
      case 'arm':
        binaryName = 'wmctrl-armhf';
        break;
      case 'ia32':
        binaryName = 'wmctrl-i386';
        break;
      default:
        throw new Error(`Unsupported architecture: ${arch}`);
    }

    // Path to the bundled wmctrl binary
    this.wmctrlPath = path.join(__dirname, 'bin', binaryName);
    console.log(this.wmctrlPath)
  }


  /**
   * Execute a wmctrl command.
   * @param {string} args - The arguments to pass to wmctrl.
   * @returns {Promise<string>} - The stdout of the command.
   */
  execute(args) {
    return new Promise((resolve, reject) => {
      // Wrap the path in quotes
      exec(`"${this.wmctrlPath}" ${args}`, (error, stdout, stderr) => {
        if (error) {
          reject(stderr);
        } else {
          resolve(stdout);
        }
      });
    });
  }

  /**
   * Show information about the window manager and environment.
   * @returns {Promise<string>}
   */
  showInfo() {
    return this.execute('-m');
  }

  /**
   * List windows managed by the window manager.
   * @returns {Promise<string>}
   */
  listWindows() {
    return this.execute('-l');
  }

  /**
   * List desktops.
   * @returns {Promise<string>}
   */
  listDesktops() {
    return this.execute('-d');
  }

  /**
   * Switch to the specified desktop.
   * @param {number} desktop - The desktop number to switch to.
   * @returns {Promise<string>}
   */
  switchDesktop(desktop) {
    return this.execute(`-s ${desktop}`);
  }

  /**
   * Activate the window by switching to its desktop and raising it.
   * @param {string} window - The window identifier.
   * @returns {Promise<string>}
   */
  activateWindow(window) {
    return this.execute(`-a ${window}`);
  }

  /**
   * Close the window gracefully.
   * @param {string} window - The window identifier.
   * @returns {Promise<string>}
   */
  closeWindow(window) {
    return this.execute(`-c ${window}`);
  }

  /**
   * Move the window to the current desktop and activate it.
   * @param {string} window - The window identifier.
   * @returns {Promise<string>}
   */
  moveWindowToCurrentDesktop(window) {
    return this.execute(`-R ${window}`);
  }

  /**
   * Move the window to the specified desktop.
   * @param {string} window - The window identifier.
   * @param {number} desktop - The desktop number.
   * @returns {Promise<string>}
   */
  moveWindowToDesktop(window, desktop) {
    return this.execute(`-r ${window} -t ${desktop}`);
  }

  /**
   * Resize and move the window around the desktop.
   * @param {string} window - The window identifier.
   * @param {string} mvarg - The move and resize argument.
   * @returns {Promise<string>}
   */
  resizeMoveWindow(window, mvarg) {
    return this.execute(`-r ${window} -e ${mvarg}`);
  }

  /**
   * Change the state of the window.
   * @param {string} window - The window identifier.
   * @param {string} starg - The state argument.
   * @returns {Promise<string>}
   */
  changeWindowState(window, starg) {
    return this.execute(`-r ${window} -b ${starg}`);
  }

  /**
   * Set the name (long title) of the window.
   * @param {string} window - The window identifier.
   * @param {string} name - The new name.
   * @returns {Promise<string>}
   */
  setWindowName(window, name) {
    return this.execute(`-r ${window} -N ${name}`);
  }

  /**
   * Set the icon name (short title) of the window.
   * @param {string} window - The window identifier.
   * @param {string} iconName - The new icon name.
   * @returns {Promise<string>}
   */
  setWindowIconName(window, iconName) {
    return this.execute(`-r ${window} -I ${iconName}`);
  }

  /**
   * Set both the name and the icon name of the window.
   * @param {string} window - The window identifier.
   * @param {string} name - The new name.
   * @returns {Promise<string>}
   */
  setWindowTitle(window, name) {
    return this.execute(`-r ${window} -T ${name}`);
  }

  /**
   * Activate or deactivate window manager's "showing the desktop" mode.
   * @param {boolean} on - Whether to activate or deactivate.
   * @returns {Promise<string>}
   */
  showDesktop(on) {
    return this.execute(`-k ${on ? 'on' : 'off'}`);
  }

  /**
   * Change the viewport for the current desktop.
   * @param {number} x - The x-coordinate of the viewport.
   * @param {number} y - The y-coordinate of the viewport.
   * @returns {Promise<string>}
   */
  changeViewport(x, y) {
    return this.execute(`-o ${x},${y}`);
  }

  /**
   * Change the number of desktops.
   * @param {number} num - The new number of desktops.
   * @returns {Promise<string>}
   */
  changeNumberOfDesktops(num) {
    return this.execute(`-n ${num}`);
  }

  /**
   * Change the geometry of all desktops.
   * @param {number} width - The new width.
   * @param {number} height - The new height.
   * @returns {Promise<string>}
   */
  changeDesktopGeometry(width, height) {
    return this.execute(`-g ${width},${height}`);
  }
}

module.exports = Wmctrl;
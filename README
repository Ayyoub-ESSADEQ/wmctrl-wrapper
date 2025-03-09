# wmctrl-wrapper

A Node.js wrapper for the `wmctrl` command, providing a simple and programmatic way to interact with window managers on Linux.

## Features

- List all windows.
- Switch between desktops.
- Activate, close, or move windows.
- Resize and move windows.
- Set window titles and states (e.g., always on top).
- Bundled `wmctrl` binaries for Linux (no need to install `wmctrl` manually).

## Installation

Install the package using npm:

```bash
npm install wmctrl-wrapper
```

## Usage

### Basic Example

```javascript
const Wmctrl = require('wmctrl-wrapper');
const wmctrl = new Wmctrl();

// List all windows
wmctrl.listWindows()
  .then(windows => console.log(windows))
  .catch(err => console.error('Error:', err));

// Set a window to always on top
wmctrl.changeWindowState('0x02000003', 'add,above')
  .then(() => console.log('Window set to always on top'))
  .catch(err => console.error('Error:', err));
```

### API

#### `listWindows()`
List all windows managed by the window manager.

```javascript
wmctrl.listWindows()
  .then(windows => console.log(windows))
  .catch(err => console.error('Error:', err));
```

#### `switchDesktop(desktop)`
Switch to the specified desktop.

```javascript
wmctrl.switchDesktop(1)
  .then(() => console.log('Switched to desktop 1'))
  .catch(err => console.error('Error:', err));
```

#### `activateWindow(window)`
Activate a window by switching to its desktop and raising it.

```javascript
wmctrl.activateWindow('0x02000003')
  .then(() => console.log('Window activated'))
  .catch(err => console.error('Error:', err));
```

#### `closeWindow(window)`
Close a window gracefully.

```javascript
wmctrl.closeWindow('0x02000003')
  .then(() => console.log('Window closed'))
  .catch(err => console.error('Error:', err));
```

#### `moveWindowToDesktop(window, desktop)`
Move a window to the specified desktop.

```javascript
wmctrl.moveWindowToDesktop('0x02000003', 2)
  .then(() => console.log('Window moved to desktop 2'))
  .catch(err => console.error('Error:', err));
```

#### `resizeMoveWindow(window, mvarg)`
Resize and move a window.

```javascript
wmctrl.resizeMoveWindow('0x02000003', '0,100,100,800,600')
  .then(() => console.log('Window resized and moved'))
  .catch(err => console.error('Error:', err));
```

#### `changeWindowState(window, starg)`
Change the state of a window (e.g., maximize, minimize, always on top).

```javascript
wmctrl.changeWindowState('0x02000003', 'add,above')
  .then(() => console.log('Window set to always on top'))
  .catch(err => console.error('Error:', err));
```

#### `setWindowName(window, name)`
Set the name (long title) of a window.

```javascript
wmctrl.setWindowName('0x02000003', 'New Window Name')
  .then(() => console.log('Window name updated'))
  .catch(err => console.error('Error:', err));
```

#### `setWindowIconName(window, iconName)`
Set the icon name (short title) of a window.

```javascript
wmctrl.setWindowIconName('0x02000003', 'New Icon Name')
  .then(() => console.log('Window icon name updated'))
  .catch(err => console.error('Error:', err));
```

#### `setWindowTitle(window, name)`
Set both the name and icon name of a window.

```javascript
wmctrl.setWindowTitle('0x02000003', 'New Title')
  .then(() => console.log('Window title updated'))
  .catch(err => console.error('Error:', err));
```

#### `showDesktop(on)`
Activate or deactivate the "showing the desktop" mode.

```javascript
wmctrl.showDesktop(true)
  .then(() => console.log('Showing desktop'))
  .catch(err => console.error('Error:', err));
```

#### `changeViewport(x, y)`
Change the viewport for the current desktop.

```javascript
wmctrl.changeViewport(100, 200)
  .then(() => console.log('Viewport changed'))
  .catch(err => console.error('Error:', err));
```

#### `changeNumberOfDesktops(num)`
Change the number of desktops.

```javascript
wmctrl.changeNumberOfDesktops(4)
  .then(() => console.log('Number of desktops changed'))
  .catch(err => console.error('Error:', err));
```

#### `changeDesktopGeometry(width, height)`
Change the geometry of all desktops.

```javascript
wmctrl.changeDesktopGeometry(1920, 1080)
  .then(() => console.log('Desktop geometry changed'))
  .catch(err => console.error('Error:', err));
```

## Bundled Binaries

This package includes precompiled `wmctrl` binaries for Linux. If your platform is not supported, you can install `wmctrl` manually and the wrapper will use the system-installed binary.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.
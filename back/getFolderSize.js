const execSync = require("child_process").execSync;

function getFolderSize (path) {
  let size = 0;
  let stdout;
  try {
    let cmd = `du -hb --max-depth=1 ${path}`;
    stdout = execSync(cmd).toString().trim();
  } catch (e) {
    stdout = e.stdout.toString().trim();
    console.warn(e.toString());
  }
  try {
    stdout = stdout.split('\n');
    stdout = stdout[stdout.length - 1];
    size = parseInt(stdout.replace(path, '').trim());
  } catch (e) {
    console.error(e.toString());
  }
  return size;
}

module.exports = exports = getFolderSize;

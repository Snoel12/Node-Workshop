module.exports = function () {
  if (cmd === "pwd") {
    console.log(`Current directory: ${process.cwd()}`);
  }
  process.stdout.write("\nprompt > ");
};

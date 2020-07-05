let readline = require("readline");

process.stdin.setRawMode(true);
process.stdin.setEncoding("utf8");
readline.emitKeypressEvents(process.stdin);

process.stdin.on("data", (data) => {
  console.log("data", JSON.stringify(data));
});

process.stdin.on("keypress", (ch, key) => {
  console.log('got "keypress"', ch, key);
  if (key && key.ctrl && key.name == "c") {
    process.stdin.pause();
  }
});

process.stdin.setRawMode(true);

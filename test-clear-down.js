"use strict";

/**
 * @param {number} ms
 * @returns {Promise<void>}
 */
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function run() {
  const CLEAR = "\x1B[2J\x1B[3J\x1B[H";
  const CLEAR_DOWN = "\x1B[0J";
  const CLEAR_LINE = "\x1B[2K";
  const CURSOR_UP = "\x1B[A";

  process.stdout.write("Apple: in progress\n");
  await delay(100);
  process.stdout.write("Banana: in progress\n");
  await delay(1000);
  process.stdout.write(CURSOR_UP);
  process.stdout.write(CURSOR_UP);
  process.stdout.write(`${CLEAR_LINE}Apple: done\n`);
  await delay(1000);
  process.stdout.write(`${CLEAR_LINE}Banana: done\n`);
  process.stdout.write(CLEAR_DOWN);

  await delay(2000);
  process.stdout.write(CLEAR);
  await run();
}

run();

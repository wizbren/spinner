process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinnerArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];
const spinTimer = 250;

let i = 0;
const spinner = () => {
  process.stdout.write(spinnerArr[i]);

  i = (i + 1) % spinnerArr.length;

  setTimeout(spinner, spinTimer);
};

spinner();
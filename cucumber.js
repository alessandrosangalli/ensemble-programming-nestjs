let common = [
  'test/acceptance/features/**/*.feature',
  '--require-module ts-node/register',
  '--require test/acceptance/step-definitions/**/*.ts',
  '--format progress-bar',
].join(' ');

module.exports = {
  default: common,
};

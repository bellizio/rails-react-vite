const micromatch = require('micromatch');

module.exports = {
  '**/*.{css,scss,js,jsx,ts,tsx}': (allFiles) => {
    const jsFiles = micromatch(allFiles, ['**/*.{js,jsx,ts,tsx}']);
    const allFilesStr = allFiles.join(' ');

    return [
      `eslint --fix ${jsFiles.join(' ')}`,
      `prettier --write ${allFilesStr}`,
    ];
  },
};

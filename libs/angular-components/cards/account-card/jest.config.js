const name = 'account-card';
const suiteName = 'AccountCardModule';

module.exports = {
  name,
  preset: '../../../../jest.config.js',
  coverageDirectory: `../../../coverage/libs/${name}`,
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './testresults/',
        outputName: `junit-${name}.xml`,
        suiteName,
        classNameTemplate: '{classname}',
        titleTemplate: `${suiteName} › {classname} › {title}`,
        ancestorSeparator: ' › ',
      },
    ],
  ],
};

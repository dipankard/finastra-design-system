const name = 'filter-tree';
const suiteName = 'FilterTreeComponentModule';

module.exports = {
  name,
  preset: '../../../../jest.config.js',
  coverageDirectory: `../../../../coverage/libs/${name}`,
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
        ancestorSeparator: ' › '
      }
    ]
  ]
};

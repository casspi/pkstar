const { execSync } = require('child_process')
const { rt, rc } = require('./utils.cjs')

module.exports = (plop) => {
  plop.setActionType('end', async () => {
    execSync(`npm run entry`)
  })

  plop.setHelper('upperCase', function (text) {
    console.log('text=>', text)
    return text.toUpperCase()
  })

  plop.setGenerator('component', {
    description: '创建一个新util工具',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入名称？',
      },
    ],
    actions: [
      {
        type: 'add',
        path: rc('{{ camelCase name }}.ts'),
        templateFile: rt('index.hbs'),
      },
      {
        type: 'end',
      },
    ],
  })
}

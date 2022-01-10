/**
 * @see https://github.com/leonardoanalista/cz-customizable
 */
module.exports = {
  types: [{
      value: 'feature',
      name: 'feature:                  Новые модули, компоненты, страницы и т.д.'
    },
    {
      value: 'enhancements',
      name: 'enhancements:             Улучшение существующих модулей, компонентов, страниц и т.д.'
    },
    {
      value: 'fix',
      name: 'fix:                      Исправление багов или несоответствий'
    },
    {
      value: 'deprecated',
      name: 'deprecated:               То, что устарело и будет удалено'
    },
  ],

  scopes: ['components', 'pages', 'module', 'scss', 'store', 'system', 'test'],
  allowCustomScopes: false,

  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'DEV-',
  ticketNumberRegExp: '\\d{1,5}',

  messages: {
    type: "Выберите тип изменений:\n",
    scope: 'Выберите область изменений:\n',
    customScope: 'Введите значение области изменений:',
    ticketNumber: 'Введите номер задачи (если есть):\n',
    subject: 'Коротко опишите изменения:\n',
    body: 'Подробное описание (опционально):\n',
    breaking: 'Список несовместимых правок:\n',
    footer: 'Список измененных сущностей (опционально):\n',
    confirmCommit: 'Подтвердить и отправить commit',
  },

  allowBreakingChanges: ['feature', 'fix', 'deprecated'],
  skipQuestions: ['footer'],

  subjectLimit: 120,
  upperCaseSubject: true,
  breakingPrefix: 'BREAKING CHANGES:',
  footerPrefix: 'CHANGED COMPONENTS:'
};

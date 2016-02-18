[![Build Status](https://travis-ci.org/telemark/tfk-dsf-unwrap-parents.svg?branch=master)](https://travis-ci.org/telemark/tfk-dsf-unwrap-parents)
[![Coverage Status](https://coveralls.io/repos/telemark/tfk-dsf-unwrap-parents/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/tfk-dsf-unwrap-parents?branch=master)
[![Code Climate](https://codeclimate.com/github/telemark/tfk-dsf-unwrap-parents/badges/gpa.svg)](https://codeclimate.com/github/telemark/tfk-dsf-unwrap-parents)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# tfk-dsf-unwrap-parents
Unwrap parents from dsf results

## Installation
From npm

```sh
$ npm install tfk-dsf-unwrap-parents
```

From GitHub

```sh
$ git clone git@github.com:telemark/tfk-dsf-unwrap-parents.git
```

cd into directory and run setup

```sh
$ npm run setup
```

## Usage

```javascript
'use strict'

var unwrapParents = require('tfk-dsf-unwrap-parents')
var data = {
  'RESULT': {
    'HOV': {
      'FODT': '261186',
      'PERS': '12345',
      'INR': '26118612345',
      'FODTAR': '1986',
      'STAT-KD': '1',
      'STAT': 'BOSATT',
      'NAVN-S': 'GRÅ',
      'NAVN-F': 'GEORG',
      'NAVN-M': 'GAFFEL',
      'NAVN': 'GRÅ GEORG GAFFEL',
      'NAVN-D': '19861212',
      'ADR': 'SNIPPETSTADSTREDET 24',
      'POSTN': '1732',
      'POSTS': 'HØTTEN',
      'ADRTYPE': 'O',
      'SPES-KD': '0',
      'SPES': 'VANLIG BOSATT'
    },
    'FOR': [
      {
        'FODT': '090457',
        'PERS': '54321',
        'INR': '09045754321',
        'FODTAR': '1957',
        'STAT-KD': '1',
        'STAT': 'BOSATT',
        'NAVN-S': 'GRÅ',
        'NAVN-F': 'GUNHILD',
        'NAVN-M': {},
        'NAVN': 'GRÅ GUNHILD',
        'NAVN-D': '19831020',
        'ADRR': '19850812',
        'ADRF': '19850801',
        'ADR': 'SNIPPETSTADSTREDET 24',
        'POSTN': '1732',
        'POSTS': 'HØTTEN',
        'ADRTYPE': 'O',
        'SPES-KD': '0',
        'SPES': 'VANLIG BOSATT',
        'Barn': [
          {
            'BAR-FODT': '261186',
            'BAR-PERS': '12345',
            'BAR-INR': '26118612345',
            'BAR-KJO': 'M'
          }
        ]
      },
      {
        'FODT': '230457',
        'PERS': '67890',
        'INR': '23045767890',
        'FODTAR': '1957',
        'STAT-KD': '1',
        'STAT': 'BOSATT',
        'NAVN-S': 'GRÅ',
        'NAVN-F': 'GANDALF',
        'NAVN-M': {},
        'NAVN': 'GRÅ GANDALF',
        'NAVN-D': {},
        'ADR': 'SNIPPETSTADSTREDET 24',
        'POSTN': '1732',
        'POSTS': 'HØTTEN',
        'ADRTYPE': 'O',
        'SPES-KD': '0',
        'SPES': 'VANLIG BOSATT',
        'Barn': [
          {
            'BAR-FODT': '261186',
            'BAR-PERS': '12345',
            'BAR-INR': '26118612345',
            'BAR-KJO': 'M'
          }
        ]
      }
    ]
  }
}

console.log(JSON.stringify(unwrapParents(data), null, 2))

```

returns

```javascript
[
  {
    "FODT": "090457",
    "PERS": "54321",
    "INR": "09045754321",
    "FODTAR": "1957",
    "NAVN-S": "GRÅ",
    "NAVN-F": "GUNHILD",
    "NAVN-M": {},
    "NAVN": "GRÅ GUNHILD",
    "ADR": "SNIPPETSTADSTREDET 24",
    "POSTN": "1732",
    "POSTS": "HØTTEN",
    "SPES-KD": "0",
    "SPES": "VANLIG BOSATT"
  },
  {
    "FODT": "230457",
    "PERS": "67890",
    "INR": "23045767890",
    "FODTAR": "1957",
    "NAVN-S": "GRÅ",
    "NAVN-F": "GANDALF",
    "NAVN-M": {},
    "NAVN": "GRÅ GANDALF",
    "ADR": "SNIPPETSTADSTREDET 24",
    "POSTN": "1732",
    "POSTS": "HØTTEN",
    "SPES-KD": "0",
    "SPES": "VANLIG BOSATT"
  }
]
```

## License
[MIT](LICENSE)
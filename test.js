'use strict';

const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const querystring = require('querystring');
const process = require('process');

(async ()=>{
    let res = await fetch('https://hydro.ac/api', {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'referer': 'https://hydro.ac/paintboard',
        'cookie': `sid=gvyNS20Fy4RMckpFOkxmxlq9M6IdtXgs; sid.sig=rHxOb9IUOHHXFgE8mFJRYIhyyMg;`
      },
      body: querystring.stringify({
          query:"{paintboard{paint(x:46,y:30,color:0)}}"
      })
    });
    console.log(JSON.parse(await res.text()));
})();
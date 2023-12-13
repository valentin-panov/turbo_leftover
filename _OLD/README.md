[![Build status](https://ci.appveyor.com/api/projects/status/47uh2tnuy0j9h6yv?svg=true)](https://ci.appveyor.com/project/vapanov/turbo-leftover)

WEB VERSION: https://valentin-panov.github.io/turbo_leftover/

# Try to find the development artefact in the production build?

```javascript
if (process.env.NODE_ENV !== 'production') {
alert('FIND ME IN THE CHUNK ? /// NODE_ENV: ' + process.env.NODE_ENV)
}
```


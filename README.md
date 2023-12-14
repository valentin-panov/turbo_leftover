WEB VERSION: https://turbo-leftover.vercel.app

## Try to find the development artefact in the production build?

```javascript
if (process.env.NODE_ENV !== 'production') {
alert('FIND ME IN THE CHUNK ? /// NODE_ENV: ' + process.env.NODE_ENV)
}
```

https://github.com/valentin-panov/turbo_leftover/blob/56801de239bb703a050d86995cb7a2a7cf1137a7/apps/web/pages/index.tsx#L7



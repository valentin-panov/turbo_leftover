WEB VERSION: https://turbo-leftover.vercel.app

## Try to find the development artefact in the production build?

apps/web/pages/index.tsx

```javascript
if (process.env.NODE_ENV !== 'production') {
alert('FIND ME IN THE CHUNK ? /// NODE_ENV: ' + process.env.NODE_ENV)
}
```

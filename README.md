`jest-29-4-2` and `jest-29-4-2` are separate "projects" with respective Jest versions installed (using `npm install --before`). `node_modules` checked in for convenience.

```sh
npm --prefix jest-29-4-2 test // Passes
npm --prefix jest-29-4-3 test // Fails
```

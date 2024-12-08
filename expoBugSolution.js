Debugging this issue requires a systematic approach.

1. **Verbose Logging:** Add verbose logging statements at crucial points within your app's build process, focusing on modules that might cause problems (native modules, complex imports, etc.).

2. **Dependency Review:** Examine your `package.json` file, looking for conflicting or incompatible dependencies.  Try updating or downgrading packages that might be the cause of the issue. Consider `npm ls` or `yarn why` for dependency tree analysis.

3. **Gradual Removal:** Systematically comment out or remove sections of your code to identify problematic areas. This process of elimination helps isolate the offending code or configuration.

4. **Clean Build:** Before any of the above, always try cleaning your build cache with `expo prebuild --clean` before running the build command again.

5. **Check Expo Version:** Ensure you are using a stable, up-to-date version of Expo CLI. Update using `npm update -g expo-cli`.

6. **Native Module Troubleshooting:** If the issue relates to native modules, check for build errors related to those modules in the output from build process. Examine their respective documentation.

Example of more verbose logging (within relevant module):
```javascript
console.log('Entering complexModule: ', someVariable);
// ...your code...
console.log('Exiting complexModule: ', result);
```
This approach helps in identifying the stage of the build where the issue occurs, narrowing down the possibilities.
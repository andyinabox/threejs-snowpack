# THREE.js <3 Snowpack

A simple starter project.

## Setup

First you should make a copy of the `threejs-snowpack` directory:

```bash
cp -r threejs-snowpack my-new-project
```

Next, run the setup script within the new project directory.

```bash
cd my-new-project/
./setup.sh
```
This will do a little cleanup and run `npm init` again so you can rename the project:

```bash
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (threejs-snowpack) 

> my-new-project
```
After this the rest of the depencies will be installed, and you can start the dev server with:

```bash
npm run start
```

## Building

```bash
npm run build
```
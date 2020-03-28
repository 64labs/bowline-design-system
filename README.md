# Bowline Design System

> A lightweight design system built on React. [bowline-design-system.netlify.com](https://bowline-design-system.netlify.com)

## Install

```bash
yarn add @64labs/bowline-design-system
```

## Usage

```jsx
import React from 'react'
import {Button} from '@64labs/bowline-design-system'

const App = () => {
  return <Button>Press me!</Button>
}
```

Check out the [full documentation](https://bowline-design-system.netlify.com) and [Playroom](https://bowline-playroom.netlify.com).

## 🚀 Developing

1.  **Clone the repository**

    ```bash
    git clone https://github.com/64labs/bowline-design-system
    ```

2.  **Install dependencies**

### Authenticate with GitHub

Bowline is hosted on [GitHub Packages](https://help.github.com/en/packages) which requires some tweaks to your npm configuration. You'll need to point the `64labs` namespace to the GitHub Packages registry and add your personal GitHub token to your own `~/.npmrc`.

```sh
//npm.pkg.github.com/:_authToken={PERSONAL_ACCESS_TOKEN}
@64labs:registry=https://npm.pkg.github.com/
```

For a detailed explanation visit [Configuring npm for use with GitHub Packages](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages).

    ```bash
    cd bowline-design-system
    yarn install
    ```

3.  **Start the component dev server**

    ```bash
    yarn start
    ```

    The dev server watches for changes in the `src` directory and rebuilds the final output.

4.  **Start documentation site**

    Open another terminal tab and navigate to the `www` directory and run:

    ```bash
    cd www
    yarn start
    ```

    This will start up the docs site at http://localhost:8080 React app which is locally linked to the `bowline` components.

5.  **Start Playroom**

    Open another terminal tab in the project root and run:

    ```bash
    yarn playroom:start
    ```

    This will start up a local instance of Playroom at http://localhost:9000 which is also locally linked to the `bowline` components.

## Publishing

[TODO]

## License

MIT © [64labs](https://github.com/64labs)

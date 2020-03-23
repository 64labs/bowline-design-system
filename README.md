# Bowline Design System

> A lightweight design system built on React. [bowline.netlify.com](https://bowline.netlify.com)

## Install

```bash
npm install --save bowline
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

    ```bash
    cd bowline
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

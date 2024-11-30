# For use in project 
- install 

```bash
pnpm i @rambo-react/ui-meteors
```

- add styles to main.tsx

```bash
import '@rambo-react/ui-meteors/dist/style.css'
```

# For deploy to npm
- update version in package.json

```bash
"version": "0.0.2" => "version": "0.0.3",
```

# About dependencies
- if you installed some library for example (radix) in the ui-meteors library, then the setting in vite.config.ts will add the dependency of this library automatically. Here is the configuration:
```bash
rollupOptions: {
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(devDependencies),
        'react/jsx-runtime',
      ],
    }
```
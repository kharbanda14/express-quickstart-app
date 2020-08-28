# Caching

Application uses **[node-cache](https://www.npmjs.com/package/node-cache)** plugin for caching. It is wrapped in few functions
so that multiple drivers can be added in the future. As of now node-cache is supported.

## methods
```javascript
set(key: any, value: any, ttl: any): boolean;
get(key: any, callback?: any): any;
take(key: any): any;
remove(...key: any[]): number;
flush(): void;
instance(): NodeCache;
```


## Usage

```javascript

const {cache} = require('express-quickstart-package');

cache.set('key', 'value', ttl); // ttl is in seconds

cache.get('key', () => 'some default value if any')

cache.take('key') // return the item from cache and delete

// or with callback function to get default value
```

> Use cache.instance() to get the underlying instance for more control and methods.


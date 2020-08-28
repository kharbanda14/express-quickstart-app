# Logging

Logging provider uses **[winston](https://www.npmjs.com/package/winston)** package

## Configuring Log Level

Configuring log level is easy, update the `.env` file to do the same

```env
LOG_LEVEL="debug"
```

As of only file, and console logging is supported which can be configured using:

```env
LOG_DRIVER="console"
# or Log to multiple drivers
LOG_DRIVER="console,file"
```

> Log files can be found in `storage/logs` directory.
# Storage

## Available methods

### FileSystemStorage

```javascript
writeFile(filename, data): Promise<StorageFile>;
getFile(filename): Promise<StorageFile>;
getAbsPath(filename): string;
getRelativePath(filename): string;
makeDirectory(directory): Promise<any>
exists(filename): Promise<boolean>
storeUploadFile(file, destination, fileName = null): Promise<StorageFile>
```

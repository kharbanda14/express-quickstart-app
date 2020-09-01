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


## File Uploading
File uploading is simple, a helper function is available to upload the files to storage folder.

```javascript
const { storage } = require("express-quickstart-package");
router.post("/", function (req, res, next) {
  // stores the file with a random name
  storage.storeUploadFile(req.files.media, "public");
  // stores the file with the name provided
  // extension is added automatically.
  storage.storeUploadFile(req.files.media, "public", "customFilename");
});
```
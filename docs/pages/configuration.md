# Configuration

Create a **.env** file in the project root folder, using the template mentioned in **.env.sample**
and adjust according to your needs

```env
DB_URL=""

# secret used for JWT for now
APP_SECRET=""

LOG_LEVEL="info"

MAIL_DRIVER="smtp"

REDIS_URL=""

SMTP_HOST="localhost"
SMTP_PORT="1025"
SMTP_USER=""
SMTP_PASSWORD=""

MAIL_FROM_NAME="LocalUser"
MAIL_FROM_EMAIL="admin@localhost.com"

# Path where the files will be stored
FILESYSTEM_STORAGE="storage/data"
```

The application is configured for [Dotenv](https://www.npmjs.com/package/dotenv).
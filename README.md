# Project Name

Description: For the backend API, we use Express.js to create endpoints, deployed on Google App Engine. App Engine configuration is in `app.yaml`. When Android hits the `kecocokan` endpoint, images of `tanah` and `tanaman` are stored in a Cloud Storage bucket. MySQL in Google Cloud Platform is used for the database to store data for `tanah`, `tanaman`, `kecocokan tanah and tanaman`, login, and user.

## Documentation

### Login

- **Method:** POST
- **URL:** `/login`

```json
{
  "email": "string",
  "password": "string"
}

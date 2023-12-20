# Project Name

Description: For the backend API, we use Express.js to create endpoints, deployed on Google App Engine. App Engine configuration is in `app.yaml`. When Android hits the `kecocokan` endpoint, images of `tanah` and `tanaman` are stored in a Cloud Storage bucket. MySQL in Google Cloud Platform is used for the database to store data for `tanah`, `tanaman`, `kecocokan tanah and tanaman`, login, and user.

## Documentation

### Login

- **Method:** POST
- **URL:** `/login`

```json
Documentation Login Method: POST Url: /login { "email": "string", "password": "string" } Register Method: POST Url: /register { "name": "string", "email": "string", "password": "string" } Database Get tanaman Method: GET Url: /tanaman { "id_tanaman": "string", "nama_tanaman": "string", "nama_latin_tanaman": "string", "desc_tanaman": "string", "habitat_tanaman": "string", "kegunaan1": "string", "kegunaan2": "string", "kegunaan3": "string", "gambar_tanaman": "string", } Get tanaman by id Method: GET Url: /tanaman/id_tanaman { "id_tanaman": "string", "nama_tanaman": "string", "nama_latin_tanaman": "string", "desc_tanaman": "string", "habitat_tanaman": "string", "kegunaan1": "string", "kegunaan2": "string", "kegunaan3": "string", "gambar_tanaman": "string", } Get tanah Method: GET Url: /tanah { "id_tanah": "string", "nama_tanah": "string", "desc_tanah": "string", "karateresitik_fisik_tanah": "string", "sifat_kimia_tanah": "string", "sifat_biologi_tanah": "string", "penyebaran_tanah": "string", "penggunaan_tanah": "string", "gambar_tanah": "string", } Get tanah by id Method: GET Url: /tanah/id_tanah { "id_tanah": "string", "nama_tanah": "string", "desc_tanah": "string", "karateresitik_fisik_tanah": "string", "sifat_kimia_tanah": "string", "sifat_biologi_tanah": "string", "penyebaran_tanah": "string", "penggunaan_tanah": "string", "gambar_tanah": "string", } Get kecocokan tanah and tanaman Method: GET Url: /kecocokan/id_tanah { "id_tanaman": "string", "nama_tanaman": "string", "nama_latin_tanaman": "string", "desc_tanaman": "string", "habitat_tanaman": "string", "kegunaan1": "string", "kegunaan2": "string", "kegunaan3": "string", "gambar_tanaman": "string", }

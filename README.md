Description
For the backend API, we use express js to make the endpoint. We try to make endpoint that deployed on the app engine. The configuration for the app engine are on the app.yaml. When the android hit the kecocokan endpoint, the tanah and tanaman images are store in the cloud storage bucket. For the database, we use MySQL in Google Cloud Platform to store data for tanah, tanaman, kecocokan tanah and tanaman, login and user.

Documentation
Login
Method: POST
Url: /login
{
  "email": "string",
  "password": "string"
}
Register
Method: POST
Url: /register
{
  "name": "string",
  "email": "string",
  "password": "string"
}
Database
Get tanaman
Method: GET
Url: /tanaman
{
  "id_tanaman": "string",
  "nama_tanaman": "string",
  "nama_latin_tanaman": "string",
  "desc_tanaman": "string",
  "habitat_tanaman": "string",
  "kegunaan1": "string",
  "kegunaan2": "string",
  "kegunaan3": "string",
  "gambar_tanaman": "string",
}
Get tanaman by id
Method: GET
Url: /tanaman/id_tanaman
{
  "id_tanaman": "string",
  "nama_tanaman": "string",
  "nama_latin_tanaman": "string",
  "desc_tanaman": "string",
  "habitat_tanaman": "string",
  "kegunaan1": "string",
  "kegunaan2": "string",
  "kegunaan3": "string",
  "gambar_tanaman": "string",
  }
Get tanah
Method: GET
Url: /tanah
{
  "id_tanah": "string",
  "nama_tanah": "string",
  "desc_tanah": "string",
  "karateresitik_fisik_tanah": "string",
  "sifat_kimia_tanah": "string",
  "sifat_biologi_tanah": "string",
  "penyebaran_tanah": "string",
  "penggunaan_tanah": "string",
  "gambar_tanah": "string",
  }
Get tanah by id 
Method: GET
Url: /tanah/id_tanah
{
  "id_tanah": "string",
  "nama_tanah": "string",
  "desc_tanah": "string",
  "karateresitik_fisik_tanah": "string",
  "sifat_kimia_tanah": "string",
  "sifat_biologi_tanah": "string",
  "penyebaran_tanah": "string",
  "penggunaan_tanah": "string",
  "gambar_tanah": "string",
  }
Get kecocokan tanah and tanaman
Method: GET
Url: /kecocokan/id_tanah
{
  "id_tanaman": "string",
  "nama_tanaman": "string",
  "nama_latin_tanaman": "string",
  "desc_tanaman": "string",
  "habitat_tanaman": "string",
  "kegunaan1": "string",
  "kegunaan2": "string",
  "kegunaan3": "string",
  "gambar_tanaman": "string",
  }

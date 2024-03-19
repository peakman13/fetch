<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>smple</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
</head>
<body class="bg-info">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h3 class="display-3 text-center">JSON UYGULAMASI</h3>
        <table class="table table-dark text-center table-striped">
          <thead>
            <tr>
              <th>isim</th>
              <th>soyisim</th>
              <th>e-mail</th>
              <th>islem</th>
            </tr>
          </thead>
          <tbody id="userTable">
            <!--<tr>
              <td>
                <input type=" text" class="form-control" id="" value="">
              </td>
              <td>
                <input type=" text" class="form-control" id="" value="">
              </td>
              <td>
                <input type=" text" class="form-control" id="" value="">
              </td>
              <td>
                <a href="" class="btn btn-warning">güncelle</a>
                <a href="" class="btn btn-danger">sil</a>
              </td>
            </tr> -->
          </tbody>
        </table>
        <form class="row">
          <div class="col-md-3">
            <input 
            class="form-control"
            type="text"
            id="first_name"
            placeholder="isminizi giriniz"/>
          </div>
          <div class="col-md-3">
            <input 
            class="form-control"
            type="text"
            id="last_name"
            placeholder="soyisminizi giriniz"/>
          </div>
          <div class="col-md-3">
            <input 
            class="form-control"
            type="text"
            id="email"
            placeholder="e-mail giriniz"/>
          </div>
          <div class="col-md-3 text-end">
            <a class="btn btn-success" onclick="createUser()">kullanıcı olustur</a>
            <a class="btn btn-primary" onclick="refleshData()">yenile</a>
          </div>
        </form>
      </div>
    </div>
  </div>

  <script src="bst.js"></script>  
</body>
</html>

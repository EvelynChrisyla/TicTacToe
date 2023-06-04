<?php
$servername = "database-6.cqgapuqaeazu.us-east-1.rds.amazonaws.com";
$username = "postgres";
$password = "admin1234";
$dbname = "databasetictactoe";
$port = 5432; 


// Membuat string koneksi berdasarkan nilai variabel yang telah ditentukan
$conn_string = "host=$servername port=$port dbname=$dbname user=$username password=$password";

// Membuka koneksi ke server PostgreSQL
$conn = pg_connect($conn_string);

// Memeriksa apakah koneksi berhasil atau gagal
if (!$conn) {
    die("Koneksi ke server PostgreSQL gagal: " . pg_last_error());
}

// Memperoleh data dari permintaan POST
$name = $_POST['name'];
$score = $_POST['score'];

// Melakukan sanitasi data
$name = pg_escape_string($conn, $name);
$score = pg_escape_string($conn, $score);

// Menyiapkan pernyataan SQL untuk menyimpan skor
$sql = "INSERT INTO scores (name, score) VALUES ('$name', '$score')";

// Menjalankan pernyataan SQL
$result = pg_query($conn, $sql);

// Memeriksa apakah penyimpanan skor berhasil atau gagal
if ($result) {
    echo "Skor berhasil disimpan!";
} else {
    echo "Gagal menyimpan skor: " . pg_last_error($conn);
}

// Menutup koneksi ke server PostgreSQL
pg_close($conn);
?>
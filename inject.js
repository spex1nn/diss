const { exec } = require('child_process');
const path = require('path');

// Java JAR dosyasının yolu
const jarPath = path.join(__dirname, 'startup.jar');

// .jar dosyasını çalıştır
exec(`java -jar "${jarPath}"`, (error, stdout, stderr) => {
    if (error) return console.error(`Hata: ${error.message}`);
    if (stderr) return console.error(`Hata: ${stderr}`);
    console.log(`Çıktı: ${stdout}`);
});

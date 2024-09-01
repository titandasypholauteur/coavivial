var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'    <head>'+
'    <title>vérification de ton profil</title>'+
'    <meta charset="utf-8">'+
'    <link rel="stylesheet" href="style.css">'+
'    <script>'+
'        function verifyEmail() {'+
'            let email = document.getElementById(\'email\').value;'+
'            if (email) {'+
'                alert(\'Courriel vérifié : \' + email);'+
'            } else {'+
'                alert(\'Veuillez entrer un courriel.\');'+
'            }'+
'        }'+
''+
'        function verifyPhone() {'+
'            let phone = document.getElementById(\'phone\').value;'+
'            if (phone) {'+
'                alert(\'Téléphone vérifié : \' + phone);'+
'            } else {'+
'                alert(\'Veuillez entrer un numéro de téléphone.\');'+
'            }'+
'        }'+
''+
'        function verifySocial(platform) {'+
'            let username = document.getElementById(platform).value;'+
'            if (username) {'+
'                alert(platform + \' vérifié : \' + username);'+
'            } else {'+
'                alert(\'Veuillez entrer un nom d\\\'utilisateur pour \' + platform + \'.\');'+
'            }'+
'        }'+
''+
'        function uploadDocument(type) {'+
'            let fileInput = document.getElementById(type);'+
'            if (fileInput.files.length > 0) {'+
'                alert(type + \' téléchargé : \' + fileInput.files[0].name);'+
'            } else {'+
'                alert(\'Veuillez télécharger \' + type + \'.\');'+
'            }'+
'        }'+
''+
'        function verifyPilotDetails() {'+
'            let license = document.getElementById(\'license\').value;'+
'            let certifications = document.getElementById(\'certifications\').value;'+
'            if (license && certifications) {'+
'                alert(\'Détails du pilote vérifiés.\');'+
'            } else {'+
'                alert(\'Veuillez entrer tous les détails du pilote.\');'+
'            }'+
'        }'+
'    </script>'+
'    </head>'+
'    <body>'+
'    <main>'+
'        <h2>vérifions ton profil</h2><br />'+
'        '+
'        <p>courriel</p>'+
'        <input type="email" id="email" placeholder="Entrez votre courriel">'+
'        <button onclick="verifyEmail()">Vérifier</button>'+
''+
'        <p>téléphone</p>'+
'        <input type="tel" id="phone" placeholder="Entrez votre téléphone">'+
'        <button onclick="verifyPhone()">Vérifier</button>'+
''+
'        <p>réseaux sociaux</p>'+
'        <p>_Instagram</p>'+
'        <input type="text" id="Instagram" placeholder="Entrez votre nom d\'utilisateur Instagram">'+
'        <button onclick="verifySocial(\'Instagram\')">Vérifier</button>'+
''+
'        <p>_TikTok</p>'+
'        <input type="text" id="TikTok" placeholder="Entrez votre nom d\'utilisateur TikTok">'+
'        <button onclick="verifySocial(\'TikTok\')">Vérifier</button>'+
''+
'        <p>_X</p>'+
'        <input type="text" id="X" placeholder="Entrez votre nom d\'utilisateur X">'+
'        <button onclick="verifySocial(\'X\')">Vérifier</button>'+
''+
'        <p>_YouTube</p>'+
'        <input type="text" id="YouTube" placeholder="Entrez votre nom d\'utilisateur YouTube">'+
'        <button onclick="verifySocial(\'YouTube\')">Vérifier</button>'+
''+
'        <p>identité</p>'+
'        <p>_carte d\'identité</p>'+
'        <input type="file" id="carte_identite" accept="image/*">'+
'        <button onclick="uploadDocument(\'carte_identite\')">Télécharger</button>'+
''+
'        <p>_carte bancaire</p>'+
'        <input type="file" id="carte_bancaire" accept="image/*">'+
'        <button onclick="uploadDocument(\'carte_bancaire\')">Télécharger</button><br />'+
''+
'        <p>Pour les pilotes</p>'+
'        <p>_validité de la licence de pilote</p>'+
'        <input type="text" id="license" placeholder="Entrez votre numéro de licence">'+
'        '+
'        <p>_certifications : diplômes, visites médicales, formations en simulateur et dans les avions...</p>'+
'        <textarea id="certifications" placeholder="Entrez vos certifications"></textarea>'+
'        <button onclick="verifyPilotDetails()">Vérifier les détails du pilote</button>'+
'    </main>'+
'    </body>'+
'</html>';
var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <title>paramètres</title>'+
'    <meta charset="utf-8">'+
'    <link rel="stylesheet" href="style.css">'+
'    <script>'+
'        function showQRCode() {'+
'            alert("QR code affiché ici.");'+
'        }'+
''+
'        function manageNotifications() {'+
'            alert("Gérer vos notifications ici.");'+
'        }'+
''+
'        function editProfile() {'+
'            alert("Modifier le profil public/privé.");'+
'        }'+
''+
'        function editContactInfo() {'+
'            alert("Modifier les informations de contact ici.");'+
'        }'+
''+
'        function verifyProfile() {'+
'            window.location.href = "verification_profil.html";'+
'        }'+
''+
'        function showPrivacyPolicy() {'+
'            alert("Afficher la politique de confidentialité ici.");'+
'        }'+
''+
'        function logout() {'+
'            alert("Déconnexion réussie !");'+
'            // Redirection vers la page d\'accueil ou de connexion'+
'            window.location.href = "cohotvial_accueil.html";'+
'        }'+
''+
'        function closeAccount() {'+
'            if (confirm("Êtes-vous sûr de vouloir clôturer votre compte ?")) {'+
'                alert("Compte clôturé.");'+
'                // Redirection après la clôture du compte'+
'                window.location.href = "cohotvial_accueil.html";'+
'            }'+
'        }'+
'    </script>'+
'</head>'+
'<body>'+
'    <main>'+
'        <ul>'+
'            <li><section><button onclick="showQRCode()">QR code</button><!--lier ton compte à ton smartphone, ta tablette et/ou ton ordinateur--></section></li>'+
'            <li><section><button onclick="manageNotifications()">Notifications</button><!--gérer tes notifications et la réception des courriels de la part de la plateforme--></section></li><br />'+
'        </ul>'+
'        <section style="text-align: left;"><button><a href="cohotvial_accueil.html">retour accueil</a></button></section><br />'+
'        <section style="text-align: left;"><button><a href="mon_profil.html">retour profil</a></button></section><br />'+
'        <ul>'+
'            <li><section><button>Paramètres et confidentialité</button></section></li>'+
'            <p><section><button onclick="editProfile()">profil</button><!--public/privé--></section></p>'+
'            <p><section><button onclick="editContactInfo()">infos de contact</button><!--c\'est ici que tu peux modifier ton numéro de téléphone, ton adresse courriel, tes réseaux sociaux--></section></p>'+
'            <p><section><button onclick="verifyProfile()">Vérification de ton profil</button></section></p>'+
'            <p><section><button onclick="showPrivacyPolicy()">politique de confidentialité de tes données personnelles</button></section></p>'+
'        </ul>'+
'        <ul>'+
'            <li><section><button onclick="logout()">Te déconnecter</button></section></li>'+
'            <li><section><button onclick="closeAccount()">Clôturer mon compte</button></section></li><br />'+
'        </ul>'+
'    </main>'+
'</body>'+
'</html>';
'</html>';
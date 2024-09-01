var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <meta charset="utf-8">'+
'    <title>pseudo</title>'+
'    <link rel="stylesheet" href="style.css">'+
'    <script>'+
'        function showNotifications() {'+
'            alert("Vous avez 3 nouvelles notifications !");'+
'        }'+
''+
'        function handleFileUpload(event) {'+
'            const fileInput = event.target;'+
'            const file = fileInput.files[0];'+
'            if (file) {'+
'                alert(`Vous avez sélectionné : ${file.name}`);'+
'            }'+
'        }'+
''+
'        function editProfile() {'+
'            const newBio = prompt("Entrez votre nouvelle bio :");'+
'            if (newBio) {'+
'                document.getElementById("bio").innerText = newBio;'+
'            }'+
'        }'+
''+
'        function logout() {'+
'            alert("Déconnexion réussie !");'+
'            // Redirection vers la page d\'accueil ou de connexion'+
'            window.location.href = "premiere_paj.html";'+
'        }'+
'    </script>'+
'</head>'+
'<body>'+
'    <header>'+
'        <h1 style="text-align: center;">pseudo</h1>'+
'        <section style="text-align: left;">'+
'            <input type="file" name="photo[]" accept="image/*" required onchange="handleFileUpload(event)">'+
'        </section>'+
'        <section style="text-align: center;">'+
'            <button><a href="coavivial_questcequecest.html">coavivial qu\'est-ce que c\'est ?</a></button>'+
'            <button><a href="mes_vols.html">Mes vols</a></button>'+
'            <button><a href="premiere_paj.html">retour accueil</a></button>'+
'        </section>'+
'        <section style="text-align: right;">'+
'            <span onclick="showNotifications()">invitations DM notifications</span>'+
'            <button><a href="parametres.html">paramètres</a></button>'+
'        </section>'+
'    </header>'+
'    <main>'+
'        <p style="text-align: center;">mes coavioneurs/mes coavioneuses</p>'+
'        <p style="text-align: center;">note</p>'+
'        <p style="text-align: center;">commentaires</p>'+
'        <p id="bio" style="text-align: center;">ma bio</p>'+
'        <section style="text-align: center;">'+
'            <button onclick="editProfile()">modifier</button>'+
'        </section>'+
'        <section style="text-align: center;">'+
'            <button onclick="logout()">Te déconnecter</button>'+
'        </section>'+
'    </main>'+
'</body>'+
'</html>';
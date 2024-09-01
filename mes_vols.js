var html =  '<!DOCTYPE html>'+
'<html lang="fr-FR">'+
'<head>'+
'    <title>Mes vols</title>'+
'    <meta charset="utf-8">'+
'    <link rel="stylesheet" href="style.css">'+
'    <script>'+
'        function updateStatus(row) {'+
'            // Obtient le statut sélectionné pour cette ligne'+
'            let statusSelect = row.querySelector(\'select\');'+
'            let status = statusSelect.value;'+
'            alert(\'Statut mis à jour à : \' + status);'+
'        }'+
'    </script>'+
'</head>'+
'<body>'+
'    <main>'+
'        <h1><center>Mes vols</center></h1><br />'+
''+
'        <table border="1" style="width:100%; border-collapse: collapse;">'+
'            <thead>'+
'                <tr>'+
'                    <th>Date</th>'+
'                    <th>Horaire</th>'+
'                    <th>Départ</th>'+
'                    <th>Destination</th>'+
'                    <th>Coavioneur/Coavioneuse</th>'+
'                    <th>Statut</th>'+
'                </tr>'+
'            </thead>'+
'            <tbody id="flightTable">'+
'                <!-- Example Row -->'+
'                <tr>'+
'                    <td><input type="date" value="2024-08-01"></td>'+
'                    <td><input type="time" value="14:00"></td>'+
'                    <td><input type="text" value="Paris"></td>'+
'                    <td><input type="text" value="Londres"></td>'+
'                    <td><input type="text" value="John Doe"></td>'+
'                    <td>'+
'                        <select onchange="updateStatus(this.parentElement.parentElement)">'+
'                            <option value="">-- Sélectionner --</option>'+
'                            <option value="refus">Refusé</option>'+
'                            <option value="attentvalid">En attente de validation</option>'+
'                            <option value="annule">Annulé</option>'+
'                            <option value="valide">Validé</option>'+
'                            <option value="realise">Réalisé</option>'+
'                        </select>'+
'                    </td>'+
'                </tr>'+
'                <!-- More rows can be added dynamically -->'+
'            </tbody>'+
'        </table>'+
'    </main>'+
'</body>'+
'</html>';
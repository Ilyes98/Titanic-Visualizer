from flask import Blueprint, request, jsonify
import pandas as pd
from db import collection_passengers

csv_import_routes = Blueprint('csv_import_routes', __name__)

@csv_import_routes.route("/import_csv", methods=["POST"])
def import_csv():
    try:
        file = request.files["csv_file"]
        if file:
            # Lire le fichier CSV
            df = pd.read_csv(file)
            # Remplacer les valeurs vides par une chaîne vide
            df.fillna("", inplace=True)
            # Convertir le dataframe en dictionnaire
            data = df.to_dict(orient='records')
            # Insérer les données dans la collection MongoDB
            collection_passengers.insert_many(data)
            return jsonify({"message": "Data imported successfully!"})
        else:
            return jsonify({"error": "CSV file missing"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

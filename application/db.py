import config
from pymongo import MongoClient

# Utilisation du mot de passe MongoDB à partir du fichier de configuration
password = config.MONGODB_PASSWORD
cluster = MongoClient(f"mongodb+srv://ilyes:{password}@cluster0.nigtf6y.mongodb.net/?retryWrites=true&w=majority")

try:
    db = cluster["titanic_data_db"]
    collection_passengers = db["passengers"]
    print("Connection to database successful.")
except ConnectionFailure:
    print("Failed to connect to the database.")

def get_passengers_collection():
    return collection_passengers

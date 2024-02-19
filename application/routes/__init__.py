from flask import Blueprint

# Importer les Blueprints de différents fichiers
from .passenger_routes import passenger_routes
from .csv_routes import csv_import_routes

# Créer un Blueprint principal pour les routes
main_routes = Blueprint('main_routes', __name__)

# Enregistrer les sous-blueprints pour les passagers et l'import CSV
main_routes.register_blueprint(passenger_routes)
main_routes.register_blueprint(csv_import_routes)

# Exporter le Blueprint principal
__all__ = ['main_routes']

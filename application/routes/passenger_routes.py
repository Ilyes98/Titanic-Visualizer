from flask import Blueprint, jsonify
from models.Passenger import get_passengers_from_db

passenger_routes = Blueprint('passenger_routes', __name__)

@passenger_routes.route("/passengers", methods=["GET"])
def get_passengers():
    try:
        passengers_list = get_passengers_from_db()
        return jsonify({"passengers": passengers_list})
    except RuntimeError as e:
        return jsonify({"error": str(e)}), 500

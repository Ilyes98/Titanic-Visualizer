from db import collection_passengers

def get_passengers_from_db():
    try:
        passengers = collection_passengers.find()
        passengers_list = []
        for passenger in passengers:
            passengers_list.append({
                "PassengerId": passenger.get("PassengerId"),
                "Survived": passenger.get("Survived"),
                "Pclass": passenger.get("Pclass"),
                "Name": passenger.get("Name"),
                "Sex": passenger.get("Sex"),
                "Age": passenger.get("Age"),
                "SibSp": passenger.get("SibSp"),
                "Parch": passenger.get("Parch"),
                "Ticket": passenger.get("Ticket"),
                "Fare": passenger.get("Fare"),
                "Cabin": passenger.get("Cabin"),
                "Embarked": passenger.get("Embarked")
            })
        return passengers_list
    except Exception as e:
        # Handle exceptions
        raise RuntimeError(f"Error retrieving passengers from database: {e}")

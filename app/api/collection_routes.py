from flask import Blueprint, jsonify
# from flask_login import login_required, current_user
from app.models import Collection

collection_routes = Blueprint('collections', __name__)


# @user_routes.route('/')
# @login_required
# def users():
#     users = User.query.all()
#     return {"users": [user.to_dict() for user in users]}


@collection_routes.route('/<int:id>')
# @login_required
def user(id):
    collection = Collection.query.get(id)
    return collection.to_dict();

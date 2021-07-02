from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Sound, Collection, Category, Scene, Joined_Sound_Cat

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
def user(id):
    collections = Collection.query.filter(Collection.owner_id == id)\
                .join(Scene, Scene.collection_id == 1)

    # user = User.query.get(id)
    return {"collections": [collection.to_dict() for collection in collections]}

# @user_routes.route('/<int:id>')
# @login_required
# def user(id):
#     user = User.query.get(id)
#     return user.to_dict()

# userList = users.query\
#     .join(friendships, users.id==friendships.user_id)\
#     .add_columns(users.userId, users.name, users.email, friends.userId, friendId)\
#     .filter(users.id == friendships.friend_id)\
#     .filter(friendships.user_id == userID)\
#     .paginate(page, 1, False)

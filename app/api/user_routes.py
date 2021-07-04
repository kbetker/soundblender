from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Sound, Collection, Category, Scene

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
# @login_required
def user(id):
    user = User.query.get(id)

    # user = User.query.get(id)
    return user.to_dict();



# @user_routes.route('/me')
# # @login_required
# def user():

#     # user = User.query.get(id)
#     return current_user.to_dict()



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

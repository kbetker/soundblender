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
    sounds = Sound.query.filter(Sound.owner_id == id)
    # user = User.query.get(id)
    return {"users": [sound.to_dict() for sound in sounds]}

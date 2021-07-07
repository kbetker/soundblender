from flask import Flask
from flask import Blueprint, jsonify
from app.models import Category, Sound, joined_snds_cats, db
from flask_login import login_required, current_user
# from app.forms import NewSound

categories_routes = Blueprint('categories', __name__)


@categories_routes.route('/<int:catId>/<int:soundId>')
@login_required
def getUserSounds(catId, soundId):
    sound = Sound.query.get(soundId)
    category = Category.query.get(catId)
    category.sounds.remove(sound)
    db.session.commit()
    return  {"Removed?": "Maybe??"}
# append
# remove or delete
# extend adds more than one

from flask import Flask
from flask import Blueprint, jsonify
from app.models import Category, Sound, joined_snds_cats, db
from flask_login import login_required, current_user
from app.forms import NewCategory

categories_routes = Blueprint('categories', __name__)


@categories_routes.route('/<int:catId>/<int:soundId>', methods=["DELETE"])
@login_required
def deleteSoundRelation(catId, soundId):
    sound = Sound.query.get(soundId)
    category = Category.query.get(catId)
    category.sounds.remove(sound)
    db.session.commit()
    return  {"Removed?": "Maybe??"}
# append
# remove or delete
# extend adds more than one

@categories_routes.route('/<int:catId>/delete', methods=["DELETE"])
# @login_required
def deleteCategory(catId):
    Category.query.filter(Category.id == catId).delete()
    print("========================= wat ========================")
    db.session.commit()
    return  {"category": "deleted"}



@categories_routes.route('/<int:catId>')
# @login_required
def getCategory(catId):
    sound = Category.query.get(catId)
    return  sound.to_dict()


@categories_routes.route("/<int:catId>/edit", methods=["PUT"])
# @login_required
def edit_category(catId):

    form = NewCategory()
    data = form.data

    categoryToEdit = Category.query.filter(Category.id == catId).first()
    categoryToEdit.name=data['name']
    categoryToEdit.color=data['color']
    categoryToEdit.arrangement=data['arrangement']

    db.session.commit()
    return {"cool": "Beings"}



@categories_routes.route("/new", methods=["POST"])
# @login_required
def new_category():

    form = NewCategory()
    data = form.data
    print(data['name'], "++++++++++++++++++++++++++++++ WAT ++++++++++++++++++++++++++++++")

    # if form.validate_on_submit():
    newCategory = Category(
            name=data['name'],
            arrangement=data['arrangement'],
            color=data['color'],
            scene_id=data['scene_id'],
        )
    db.session.add(newCategory)
    db.session.commit()
    print(newCategory.to_dict())
    return newCategory.to_dict()
    # else:
    #     return {'errors': validation_errors_to_error_messages(form.errors)}, 401

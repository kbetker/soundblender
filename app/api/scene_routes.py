from app.forms.scene_form import NewScene
from flask import Flask
from flask import Blueprint, jsonify
from app.models import Scene, db
from app.forms import NewScene
from flask_login import current_user, login_required

scene_routes = Blueprint('scenes', __name__)


@scene_routes.route('/new', methods=["POST"])
@login_required
def addScene():
    form = NewScene()
    data = form.data
    # if form.validate_on_submit():
    newScene= Scene(
            name=data['name'],
            theme=data['theme'],
            collection_id=data['collection_id'],
        )
    db.session.add(newScene)
    db.session.commit()
    print(newScene.to_dict())
    return form.data


@scene_routes.route("/<int:sceneId>/edit", methods=["PUT"])
# @login_required
def edit_category(sceneId):

    form = NewScene()
    data = form.data

    sceneToEdit = Scene.query.filter(Scene.id == sceneId).first()
    sceneToEdit.name=data['name']
    sceneToEdit.theme=data['theme']
    sceneToEdit.collection_id=data['collection_id']

    db.session.commit()
    return {"cool": "Beings"}


@scene_routes.route('/<int:sceneId>/delete', methods=["DELETE"])
# @login_required
def deleteuserScene(sceneId):
    Scene.query.filter(Scene.id == sceneId).delete()
    db.session.commit()
    return  {"sound": "deleted"}

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
    print("data WTFWTFWTFWTFWTFWTFWTFWTFWTFWTFWTFWTFWTFWFWTFWTFWFT", data)
    newScene= Scene(
            name=data['name'],
            theme=data['theme'],
            collection_id=data['collection_id'],
        )
    db.session.add(newScene)
    db.session.commit()
    print(newScene.to_dict())
    return form.data

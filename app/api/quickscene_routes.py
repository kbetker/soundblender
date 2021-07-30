from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import QuickScene, Sound, db
from app.forms import NewQuickScene

quickscene_routes = Blueprint('quickscenes', __name__)


# @user_routes.route('/')
# @login_required
# def users():
#     users = User.query.all()
#     return {"users": [user.to_dict() for user in users]}


@quickscene_routes.route('/<int:id>')
@login_required
def getOneCollection(id):
    collection = QuickScene.query.get(id)
    return collection.to_dict();


@quickscene_routes.route('/all/<int:id>')
@login_required
def getAllCollections(id):
    # collections = Collection.query.get(id)
    collections = Collection.query.filter(Collection.owner_id == id)
    return  {"collection": [collection.to_dict() for collection in collections ]}
    # return collection.to_dict();




@quickscene_routes.route('/<int:sceneId>/new', methods=["POST"])
@login_required
def addQuickScene(sceneId):
    form = NewQuickScene()
    data = form.data
    # if form.validate_on_submit():
    newQuickScene= QuickScene(
            name=data['name'],
            scene_id=sceneId,
        )
    db.session.add(newQuickScene)
    db.session.commit()

    quickScene = QuickScene.query.filter(QuickScene.name == data['name']).first()

    return quickScene.to_dict()

@quickscene_routes.route('/<int:quicksceneId>/<int:soundId>/addquickscene', methods=["POST"])
@login_required
def addSoundRelation(quicksceneId, soundId):
    sound = Sound.query.get(soundId)
    quickscene = QuickScene.query.get(quicksceneId)
    quickscene.sounds.append(sound)
    db.session.commit()
    return  {"Rick": "Rolled"}



@quickscene_routes.route('/<int:qsId>/<int:soundId>/delete', methods=["DELETE"])
# @login_required
def deleteQsRelation(qsId, soundId):
    sound = Sound.query.get(soundId)
    quickscene = QuickScene.query.get(qsId)
    quickscene.sounds.remove(sound)
    db.session.commit()
    return  {"Removed?": "Maybe??"}


@quickscene_routes.route("/<int:qsId>/edit", methods=["PUT"])
# @login_required
def edit_category(qsId):

    form = NewQuickScene()
    data = form.data

    quicksceneToEdit = QuickScene.query.filter(QuickScene.id == qsId).first()
    quicksceneToEdit.name=data['name']

    db.session.commit()
    return {"cool": "Beings"}












# @quickscene_routes.route("/<int:collectionId>/edit", methods=["PUT"])
# # @login_required
# def edit_category(collectionId):

#     form = NewQuickScene()
#     data = form.data

#     collectionToEdit = QuickScene.query.filter(QuickScene.id == collectionId).first()
#     collectionToEdit.name=data['name']
#     collectionToEdit.owner_id=data['owner_id']

#     db.session.commit()
#     allCollections = Collection.query.filter(Collection.owner_id == data['owner_id'])
#     return  {"collection": [collection.to_dict() for collection in allCollections ]}




# @quickscene_routes.route('/<int:collectionId>/<int:userId>/delete', methods=["DELETE"])
# # @login_required
# def deleteuserCollection(collectionId, userId):
#     Collection.query.filter(Collection.id == collectionId).delete()
#     db.session.commit()
#     allCollections = Collection.query.filter(Collection.owner_id == userId)
#     return  {"collection": [collection.to_dict() for collection in allCollections ]}

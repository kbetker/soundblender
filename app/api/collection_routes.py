from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Collection, db
from app.forms import NewCollection

collection_routes = Blueprint('collections', __name__)


@collection_routes.route('/<int:id>')
@login_required
def getOneCollection(id):
    collection = Collection.query.get(id)
    return collection.to_dict();


@collection_routes.route('/all/<int:id>')
@login_required
def getAllCollections(id):
    collections = Collection.query.filter(Collection.owner_id == id)
    return  {"collection": [collection.to_dict() for collection in collections ]}




@collection_routes.route('/new', methods=["POST"])
@login_required
def addCollection():
    form = NewCollection()
    data = form.data
    # if form.validate_on_submit():
    newCollection= Collection(
            name=data['name'],
            is_midi=data['is_midi'],
            stop_all=data['stop_all'],
            scene_left=data['scene_left'],
            scene_right=data['scene_right'],
            owner_id=data['owner_id'],
        )
    db.session.add(newCollection)
    db.session.commit()
    allCollections = Collection.query.filter(Collection.owner_id == data['owner_id'])
    return  {"collection": [collection.to_dict() for collection in allCollections ]}



@collection_routes.route("/<int:collectionId>/edit", methods=["PUT"])
# @login_required
def edit_category(collectionId):

    form = NewCollection()
    data = form.data

    collectionToEdit = Collection.query.filter(Collection.id == collectionId).first()
    collectionToEdit.name=data['name']
    collectionToEdit.owner_id=data['owner_id']

    db.session.commit()
    allCollections = Collection.query.filter(Collection.owner_id == data['owner_id'])
    return  {"collection": [collection.to_dict() for collection in allCollections ]}
    # return {"Collection": "updated"}


@collection_routes.route('/<int:collectionId>/<int:userId>/delete', methods=["DELETE"])
# @login_required
def deleteuserCollection(collectionId, userId):
    Collection.query.filter(Collection.id == collectionId).delete()
    db.session.commit()
    allCollections = Collection.query.filter(Collection.owner_id == userId)
    return  {"collection": [collection.to_dict() for collection in allCollections ]}
    # return  {"collection": "deleted"}

from flask import Flask
from flask import Blueprint, jsonify, session, request
from app.models import Sound, db
from app.forms import NewSound

sound_routes = Blueprint('sound', __name__)


def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages



@sound_routes.route('/', methods=['GET'])
def wat():
    return {"wat": "WAT!?!?!"}

@sound_routes.route('/', methods=['POST'])
def new_sound():
    form = NewSound()
    form['csrf_token'].data = request.cookies['csrf_token']
    data = form.data
    if form.validate_on_submit():
        sound = Sound(
            sound_url=data['sound_url'],
            name=data['name'],
            owner_id=data['owner_id'],
            is_public=data['is_public'],
            target_volume=data['target_volume'],
            fade_speed=data['fade_speed'],
            is_looped=data['is_looped']
        )
        db.session.add(sound)
        db.session.commit()
        return sound.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

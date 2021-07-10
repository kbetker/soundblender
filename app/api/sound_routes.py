from flask import Flask
from flask import Blueprint, jsonify, session, request
from app.models import Sound, Category, db
from flask_login import current_user, login_required
from .s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)
from app.forms import NewSound
from wtforms.validators import DataRequired, Email, ValidationError

sound_routes = Blueprint('sound', __name__)



def validation_errors_to_error_messages(validation_errors):
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages



@sound_routes.route('/s/<int:id>')
# @login_required
def getUserSounds(id):
    sounds = Sound.query.filter(Sound.owner_id == id)
    return  {"sounds": [sound.to_dict() for sound in sounds ]}

@sound_routes.route('/<int:soundId>')
# @login_required
def getUserSound(soundId):
    sound = Sound.query.get(soundId)
    return  sound.to_dict()







@sound_routes.route('/<int:soundId>/delete', methods=["DELETE"])
# @login_required
def deleteuserSound(soundId):
    sound = Sound.query.get(soundId)
    categories = [c.id for c in sound.categories]
    for category in categories:
        sound.categories.remove(Category.query.get(category))
    db.session.commit()
    Sound.query.filter(Sound.id == soundId).delete()
    db.session.commit()
    return  {"sound": "deleted"}








@sound_routes.route("", methods=["POST"])
@login_required
def new_sound():
    if "sound_url" not in request.files:
        return {"errors": "image required"}, 400

    sound = request.files["sound_url"]

    if not allowed_file(sound.filename):
        return {"errors": "File type not permitted. Must be a .wav or .mp3."}, 400

    sound.filename = get_unique_filename(sound.filename)

    upload = upload_file_to_s3(sound)
    form = NewSound()
    data = form.data
    print(data, "++++++++++++++++++++++++++++++ WAT ++++++++++++++++++++++++++++++")

    if "url" not in upload:
        return upload, 400
    url = upload["url"]
    # if form.validate_on_submit():
    newSound = Sound(
            sound_url=url,
            name=data['name'],
            owner_id=data['owner_id'],
            is_public=data['is_public'],
            target_volume=data['target_volume'],
            fade_speed=data['fade_speed'],
            arrangement=data['arrangement'],
            is_looped=data['is_looped']
        )
    db.session.add(newSound)
    db.session.commit()
    print(newSound.to_dict())
    return newSound.to_dict()
    # else:
    #     return {'errors': validation_errors_to_error_messages(form.errors)}, 401




@sound_routes.route("/<int:soundId>/edit", methods=["PUT"])
# @login_required
def edit_sound(soundId):

    form = NewSound()
    data = form.data
    soundToEdit = Sound.query.filter(Sound.id == soundId).first()
    if not soundToEdit:
        return {'errors': ["Sound doesn't exist."]}
    soundToEdit.sound_url=data['sound_url']
    soundToEdit.name=data['name']
    soundToEdit.owner_id=data['owner_id']
    soundToEdit.is_public=data['is_public']
    soundToEdit.target_volume=data['target_volume']
    soundToEdit.fade_speed=data['fade_speed']
    soundToEdit.arrangement=data['arrangement']
    soundToEdit.is_looped=data['is_looped']


    db.session.commit()
    # print(soundToEdit.to_dict())
    return {"cool": "Beings"}
    # else:
    #










# @sound_routes.route('/', methods=['GET'])
# def wat():
#     return {"wat": "WAT!?!?!"}

# @sound_routes.route('/', methods=['POST'])
# def new_sound():
#     form = NewSound()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     data = form.data
#     if form.validate_on_submit():
#         sound = Sound(
#             sound_url=data['sound_url'],
#             name=data['name'],
#             owner_id=current_user,
#             is_public=data['is_public'],
#             target_volume=data['target_volume'],
#             fade_speed=data['fade_speed'],
#             is_looped=data['is_looped']
#         )
#         db.session.add(sound)
#         db.session.commit()
#         return sound.to_dict()
#     else:
#         return {'errors': validation_errors_to_error_messages(form.errors)}, 401

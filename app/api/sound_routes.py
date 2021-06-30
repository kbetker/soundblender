from flask import Flask
from flask import Blueprint, jsonify, session, request
from app.models import Sound, db
from flask_login import current_user, login_required
from .s3_helpers import (
    upload_file_to_s3, allowed_file, get_unique_filename)
from app.forms import NewSound

sound_routes = Blueprint('sound', __name__)



# def validation_errors_to_error_messages(validation_errors):
#     errorMessages = []
#     for field in validation_errors:
#         for error in validation_errors[field]:
#             errorMessages.append(f"{field} : {error}")
#     return errorMessages


@sound_routes.route("", methods=["POST"])
@login_required
def new_sound():
    if "sound_url" not in request.files:
        return {"errors": "image required"}, 400

    sound = request.files["sound_url"]

    if not allowed_file(sound.filename):
        return {"errors": "file type not permitted"}, 400

    sound.filename = get_unique_filename(sound.filename)

    upload = upload_file_to_s3(sound)
    form = NewSound()
    data = form.data

    if "url" not in upload:
        # if the dictionary doesn't have a url key
        # it means that there was an error when we tried to upload
        # so we send back that error message
        return upload, 400
    print("WTFWTFWTFWTFWTWTFWTFWTFWTFWTFWTFWTFWTFWTFWTWFTWFTWTWF",upload)
    url = upload["url"]
    print("=============================================================================", url)
    # flask_login allows us to get the current user from the request
    # if form.validate_on_submit():
    newSound = Sound(
            sound_url=url,
            name=data['name'],
            owner_id=data['owner_id'],
            is_public=data['is_public'],
            target_volume=data['target_volume'],
            fade_speed=data['fade_speed'],
            is_looped=True
        )
    db.session.add(newSound)
    db.session.commit()
    print(newSound.to_dict())
    return newSound.to_dict()
    # else:
    #     return {'errors': validation_errors_to_error_messages(form.errors)}, 401








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

from flask_wtf import FlaskForm
from wtforms import (StringField, IntegerField, BooleanField, BooleanField)
from wtforms.validators import DataRequired
# , validators=[DataRequired()]
class NewSound(FlaskForm):
    sound_url = StringField("Sound URL")
    name = StringField("Name")
    owner_id = IntegerField("owner_id")
    is_public = BooleanField("Allow Public to View?")
    target_volume = IntegerField("Set Volume")
    fade_speed = IntegerField("Set the speed to fade in and out")
    arrangement = IntegerField("Arrangement")
    is_looped = BooleanField("Loop Sound?")
    is_midi = BooleanField("MIDI Controlled?")
    play_stop_button = IntegerField("MIDI Play/Stop")
    volume_control = IntegerField("Volume Control")

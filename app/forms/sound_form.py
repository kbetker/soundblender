from flask_wtf import FlaskForm
from wtforms import (StringField, DecimalField, IntegerField, BooleanField, BooleanField)
from wtforms.validators import DataRequired
# , validators=[DataRequired()]
class NewSound(FlaskForm):
    sound_url = StringField("Sound URL")
    name = StringField("Name")
    owner_id = IntegerField("owner_id")
    is_public = BooleanField("Allow Public to View?")
    target_volume = DecimalField("Set Volume")
    fade_speed = DecimalField("Set the speed to fade in and out")
    arrangement = IntegerField("Arrangement")
    is_looped = BooleanField("Loop Sound?")

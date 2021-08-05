from flask_wtf import FlaskForm
from wtforms import (StringField, IntegerField, BooleanField)
from wtforms.validators import DataRequired
# , validators=[DataRequired()]
class NewCollection(FlaskForm):
    name = StringField("Name")
    is_midi = BooleanField("Use MIDI?")
    stop_all = IntegerField("Stop All Button")
    scene_left = IntegerField("Scene Left")
    scene_right = IntegerField("Scene Right")
    owner_id = IntegerField("Owner Id")

from flask_wtf import FlaskForm
from wtforms import (StringField, IntegerField, BooleanField, BooleanField)
from wtforms.validators import DataRequired
# , validators=[DataRequired()]
class NewCategory(FlaskForm):
    name = StringField("Name")
    color = StringField("Loop Sound?")
    scene_id = IntegerField("SceneId")
    arrangement = IntegerField("Arrangement")

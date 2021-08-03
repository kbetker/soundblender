from flask_wtf import FlaskForm
from wtforms import (StringField, IntegerField, BooleanField, BooleanField)
from wtforms.validators import DataRequired
# , validators=[DataRequired()]
class NewQuickScene(FlaskForm):
    name = StringField("Name")
    scene_id = IntegerField("SceneId")

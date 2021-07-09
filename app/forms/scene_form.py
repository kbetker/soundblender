from flask_wtf import FlaskForm
from wtforms import (StringField, IntegerField, BooleanField, BooleanField)
from wtforms.validators import DataRequired
# , validators=[DataRequired()]
class NewScene(FlaskForm):
    name = StringField("Name")
    theme = StringField("Theme")
    collection_id = IntegerField("Collection Id")

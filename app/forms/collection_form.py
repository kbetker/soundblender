from flask_wtf import FlaskForm
from wtforms import (StringField, IntegerField, BooleanField)
from wtforms.validators import DataRequired
# , validators=[DataRequired()]
class NewCollection(FlaskForm):
    name = StringField("Name")
    owner_id = IntegerField("Owner Id")

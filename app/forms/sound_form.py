from flask_wtf import FlaskForm
from wtforms import (StringField, DateField, DecimalField, IntegerField, BooleanField, SelectField, SubmitField, DateField, TextAreaField)
from wtforms.validators import DataRequired

class NewSound(FlaskForm):
    sound_url = StringField("Sound URL", validators=[DataRequired()])
    name = StringField("Name", validators=[DataRequired()])
    owner_id = IntegerField("owner_id", validators=[DataRequired()])
    is_public = BooleanField("Allow Public to View?")
    target_volume = DecimalField("Set Volume", validators=[DataRequired()])
    fade_speed = DecimalField("Set the speed to fade in and out")
    is_looped = IntegerField("Loop Sound?", validators=[DataRequired()])

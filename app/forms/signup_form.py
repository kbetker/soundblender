from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    print("Checking if user exits", field.data)
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError("already in use")

def password_matches(form, field):
    print("Checking if meets requirement")
    password = field.data
    # email = form.data['email']
    # user = User.query.filter(User.email == email).first()
    if len(password) < 5:
        raise ValidationError("Must be more than 5 characters")




class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired(), password_matches])

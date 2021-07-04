from .db import db

joined_snds_cats = db.Table('joined_snds_cats',
    db.Column('sounds_id', db.Integer, db.ForeignKey('sounds.id')),
    db.Column('categories_id', db.Integer, db.ForeignKey('categories.id'))
)

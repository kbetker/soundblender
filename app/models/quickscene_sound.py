from .db import db

quickscene_sounds = db.Table('quickscene_sounds',
    db.Column('sounds_id', db.Integer, db.ForeignKey('sounds.id')),
    db.Column('quickscenes_id', db.Integer, db.ForeignKey('quickscenes.id'))
)

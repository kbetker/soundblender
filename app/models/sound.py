# from app.models import Category
from .db import db



class Sound(db.Model):
    __tablename__ = 'sounds'

    id = db.Column(db.Integer, primary_key=True)
    sound_url = db.Column(db.String(800), nullable=False)
    name = db.Column(db.String, nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    is_public = db.Column(db.Boolean)
    target_volume = db.Column(db.Integer)
    fade_speed = db.Column(db.Integer)
    arrangement= db.Column(db.Integer)
    is_looped = db.Column(db.Boolean)

    categories = db.relationship("Category", secondary ="joined_snds_cats", back_populates="sounds")
    quickscenes = db.relationship("QuickScene", secondary ="quickscene_sounds", back_populates="sounds")

    owner = db.relationship("User", backref="sounds")


    def to_dict(self):
        return {
            "id": self.id,
            "sound_url": self.sound_url,
            "name": self.name,
            "owner_id": self.owner_id,
            "is_public": self.is_public,
            "target_volume": self.target_volume,
            "fade_speed": self.fade_speed,
            "arrangement": self.arrangement,
            "is_looped": self.is_looped
        }

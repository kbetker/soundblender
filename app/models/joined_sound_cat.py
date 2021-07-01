from .db import db


class Joined_Sound_Cat(db.Model):
    __tablename__ = 'joined_snds_cats'

    id = db.Column(db.Integer, primary_key=True)
    sounds_id = db.Column(db.Integer, db.ForeignKey("sounds.id"), nullable=False)
    categories_id = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)

    sound = db.relationship("Sound", backref="joined_snds_cats")
    category = db.relationship("Category", backref="joined_snds_cats")

    def to_dict(self):
        return {
            "id": self.id,
            "sounds_id": self.sounds_id,
            "categories_id": self.categories_id,
        }

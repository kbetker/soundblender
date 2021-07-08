from .db import db


class Category(db.Model):
    __tablename__ = 'categories'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    color = db.Column(db.String, default="white")
    scene_id = db.Column(db.Integer, db.ForeignKey("scenes.id"), nullable=False)
    arrangement = db.Column(db.Integer, default=0)


    sounds = db.relationship("Sound", secondary ="joined_snds_cats", back_populates="categories")
    scene = db.relationship("Scene", backref="categories", uselist=False)


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "color": self.color,
            "scene_id": self.scene_id,
            "arrangement": self.arrangement,
            "sounds": [s.to_dict() for s in self.sounds]
        }

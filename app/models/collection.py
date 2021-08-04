from .db import db


class Collection(db.Model):
    __tablename__ = 'collections'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    is_midi = db.Column(db.Boolean, nullable=False)
    stop_all = db.Column(db.Integer, nullable=False)
    scene_left = db.Column(db.Integer, nullable=False)
    scene_right = db.Column(db.Integer, nullable=False)


    owner = db.relationship("User", backref="collections", uselist=False)
    scene = db.relationship("Scene", backref="collections")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "is_midi": self.is_midi,
            "stop_all": self.stop_all,
            "scene_left": self.scene_left,
            "scene_right": self.scene_right,
            "owner_id": self.owner_id,
            "scenes": [s.to_dict() for s in self.scenes]
        }

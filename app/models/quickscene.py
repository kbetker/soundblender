from .db import db


class QuickScene(db.Model):
    __tablename__ = 'quickscenes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    scene_id = db.Column(db.Integer, db.ForeignKey("scenes.id"), nullable=False)


    sounds = db.relationship("Sound", secondary ="quickscene_sounds", back_populates="quickscenes")
    scene = db.relationship("Scene", backref="quickscenes", uselist=False)


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "scene_id": self.scene_id,
            "sounds": [s.to_dict() for s in self.sounds]
        }

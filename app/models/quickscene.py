from .db import db


class QuickScene(db.Model):
    __tablename__ = 'quickscenes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    is_midi = db.Column(db.Boolean, nullable=False)
    control_num = db.Column(db.Integer, nullable=False)
    scene_id = db.Column(db.Integer, db.ForeignKey("scenes.id"), nullable=False)


    sounds = db.relationship("Sound", secondary ="quickscene_sounds", back_populates="quickscenes")
    scene = db.relationship("Scene", backref="quickscenes", uselist=False)


    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "is_midi": self.is_midi,
            "control_num": self.control_num,
            "scene_id": self.scene_id,
            "sounds": [s.to_dict() for s in self.sounds]
        }

from .db import db

class Scene(db.Model):
    __tablename__ = 'scenes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    theme = db.Column(db.String(40), default="default")
    collection_id = db.Column(db.Integer, db.ForeignKey("collections.id"), nullable=False)

    collection = db.relationship("Collection", backref="scenes", uselist=False)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "theme": self.theme,
            "collection_id": self.collection_id,
            "categories": [c.to_dict() for c in self.categories],
            "quickscenes": [q.to_dict() for q in self.quickscenes]
        }

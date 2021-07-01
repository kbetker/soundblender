from .db import db

class Scene(db.Model):
    __tablename__ = 'scenes'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    theme = db.Column(db.String(40), default="default")
    collection_id = db.Column(db.Integer, db.ForeignKey("collection.id"), nullable=False)

    collection = db.relationship("Collections", back_populates="scenes")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "theme": self.theme,
            "collection_id": self.collection_id,
        }

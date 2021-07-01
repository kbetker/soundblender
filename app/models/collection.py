from .db import db


class Collection(db.Model):
    __tablename__ = 'collections'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates="collections")

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "owner_id": self.description,
        }

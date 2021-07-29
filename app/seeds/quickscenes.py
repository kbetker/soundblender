from app.models import db, QuickScene, Sound


def seed_quickscenes():
    #Me
    sounds = Sound.query.all()

    quickScene1 = QuickScene(name="QuickScene1", scene_id=1)
    quickScene1.sounds.extend(sounds[0:3])

    quickScene2 = QuickScene(name="QuickScene2", scene_id=1)
    quickScene2.sounds.extend(sounds[4:6])

    db.session.add(quickScene1)
    db.session.add(quickScene2)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_quickscenes():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()

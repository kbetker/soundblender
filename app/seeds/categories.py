from app.models import db, Category, Sound


def seed_categories():
    #Me
    sounds = Sound.query.all()

    music = Category(name="Music", color="MediumAquamarine", scene_id=1, arrangement=0)
    music.sounds.extend(sounds[0:5])

    battleMusic = Category(name="Battle-Music", color="Red", scene_id=1, arrangement=0)
    battleMusic.sounds.extend(sounds[5:10])

    wildernessAmbience1 = Category(name="Wilderness-Ambience1", color="Green", scene_id=1, arrangement=1)
    wildernessAmbience1.sounds.extend(sounds[10:15])

    wildernessAmbience2 = Category(name="Wilderness-Ambience2", color="Green", scene_id=1, arrangement=1)
    wildernessAmbience2.sounds.extend(sounds[15:19])

    townAmbience1 = Category(name="Town-Ambience", color="BlueViolet", scene_id=2, arrangement=0)
    townAmbience1.sounds.extend(sounds[19:24])

    townAmbience2 = Category(name="Town-Ambience", color="BlueViolet", scene_id=2, arrangement=0)
    townAmbience2.sounds.extend(sounds[24:28])


    coastalAmbience = Category(name="Coastal-Ambience", color="Aqua", scene_id=2, arrangement=1)
    coastalAmbience.sounds.extend(sounds[28:33])

    db.session.add(music)
    db.session.add(battleMusic)
    db.session.add(wildernessAmbience1)
    db.session.add(wildernessAmbience2)
    db.session.add(townAmbience1)
    db.session.add(townAmbience2)
    db.session.add(coastalAmbience)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()

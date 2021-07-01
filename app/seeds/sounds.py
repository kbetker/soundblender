from app.models import db, Sound

def seed_sounds():

    #demo sounds
    name1 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=1, is_public=False, target_volume=0.6, fade_speed=3000, arrangement=0, is_looped=True)
    name2 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=1, is_public=False, target_volume=0.9, fade_speed=2000, arrangement=0, is_looped=True)
    name3 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=1, is_public=False, target_volume=0.5, fade_speed=5000, arrangement=0, is_looped=True)
    name4 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=1, is_public=False, target_volume=1, fade_speed=4000, arrangement=0, is_looped=True)

    name5 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=1, is_public=False, target_volume=0.6, fade_speed=3000, arrangement=0, is_looped=True)
    name6 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=1, is_public=False, target_volume=0.9, fade_speed=2000, arrangement=0, is_looped=True)
    name7 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=1, is_public=False, target_volume=0.5, fade_speed=5000, arrangement=0, is_looped=True)
    name8 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=1, is_public=False, target_volume=1, fade_speed=4000, arrangement=0, is_looped=True)

    name9 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=1, is_public=False, target_volume=0.6, fade_speed=3000, arrangement=0, is_looped=True)
    name10 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=1, is_public=False, target_volume=0.9, fade_speed=2000, arrangement=0, is_looped=True)
    name11 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=1, is_public=False, target_volume=0.5, fade_speed=5000, arrangement=0, is_looped=True)
    name12 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=1, is_public=False, target_volume=1, fade_speed=4000, arrangement=0, is_looped=True)

    name13 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=1, is_public=False, target_volume=0.6, fade_speed=3000, arrangement=0, is_looped=True)
    name14 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=1, is_public=False, target_volume=0.9, fade_speed=2000, arrangement=0, is_looped=True)
    name15 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=1, is_public=False, target_volume=0.5, fade_speed=5000, arrangement=0, is_looped=True)
    name16 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=1, is_public=False, target_volume=1, fade_speed=4000, arrangement=0, is_looped=True)



    #my sounds
    name17 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=2, is_public=False, target_volume=0.6, fade_speed=3000, arrangement=0, is_looped=True)
    name18 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=2, is_public=False, target_volume=0.9, fade_speed=2000, arrangement=0, is_looped=True)
    name19 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=2, is_public=False, target_volume=0.5, fade_speed=5000, arrangement=0, is_looped=True)
    name20 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=2, is_public=False, target_volume=1, fade_speed=4000, arrangement=0, is_looped=True)

    name21 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=2, is_public=False, target_volume=0.6, fade_speed=3000, arrangement=0, is_looped=True)
    name22 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=2, is_public=False, target_volume=0.9, fade_speed=2000, arrangement=0, is_looped=True)
    name23 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=2, is_public=False, target_volume=0.5, fade_speed=5000, arrangement=0, is_looped=True)
    name24 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=2, is_public=False, target_volume=1, fade_speed=4000, arrangement=0, is_looped=True)

    name25 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=2, is_public=False, target_volume=0.6, fade_speed=3000, arrangement=0, is_looped=True)
    name26 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=2, is_public=False, target_volume=0.9, fade_speed=2000, arrangement=0, is_looped=True)
    name27 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=2, is_public=False, target_volume=0.5, fade_speed=5000, arrangement=0, is_looped=True)
    name28 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=2, is_public=False, target_volume=1, fade_speed=4000, arrangement=0, is_looped=True)

    name29 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="Ambient02", owner_id=2, is_public=False, target_volume=0.6, fade_speed=3000, arrangement=0, is_looped=True)
    name30 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="Music01", owner_id=2, is_public=False, target_volume=0.9, fade_speed=2000, arrangement=0, is_looped=True)
    name31 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/CampForestNight.mp3", name="Ambient01", owner_id=2, is_public=False, target_volume=0.5, fade_speed=5000, arrangement=0, is_looped=True)
    name32 = Sound(sound_url="http://kevinbetker.com/App_Academy/soundblender/MP3s/travel_2.mp3", name="Music02", owner_id=2, is_public=False, target_volume=1, fade_speed=4000, arrangement=0, is_looped=True)



    db.session.add(name1)
    db.session.add(name2)
    db.session.add(name3)
    db.session.add(name4)
    db.session.add(name5)
    db.session.add(name6)
    db.session.add(name7)
    db.session.add(name8)
    db.session.add(name9)
    db.session.add(name10)
    db.session.add(name11)
    db.session.add(name12)
    db.session.add(name13)
    db.session.add(name14)
    db.session.add(name15)
    db.session.add(name16)
    db.session.add(name17)
    db.session.add(name18)
    db.session.add(name19)
    db.session.add(name20)
    db.session.add(name21)
    db.session.add(name22)
    db.session.add(name23)
    db.session.add(name24)
    db.session.add(name25)
    db.session.add(name26)
    db.session.add(name27)
    db.session.add(name28)
    db.session.add(name29)
    db.session.add(name30)
    db.session.add(name31)
    db.session.add(name32)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_sounds():
    db.session.execute('TRUNCATE sounds RESTART IDENTITY CASCADE;')
    db.session.commit()

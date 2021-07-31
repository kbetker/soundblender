from app.models import db, Sound

def seed_sounds():



    #demo sounds
    # Music Category.Id=1
    sound1 = Sound(sound_url=".mp3", name="Calm Night", owner_id=1, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound2 = Sound(sound_url=".mp3", name="Suspense 1", owner_id=1, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound3 = Sound(sound_url=".mp3", name="Suspense 2", owner_id=1, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    sound4 = Sound(sound_url=".mp3", name="High Suspense", owner_id=1, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    sound5 = Sound(sound_url=".mp3", name="Calm Travel", owner_id=1, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    # Battle Music Category.Id=2
    sound6 = Sound(sound_url=".mp3", name="Fight-Medium", owner_id=1, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound7 = Sound(sound_url="https://kevinbetker.com/App_Academy/soundblender/MP3s/fight_big1.mp3", name="===Fight-Big===", owner_id=1, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    sound8 = Sound(sound_url="https://kevinbetker.com/App_Academy/soundblender/MP3s/fight_med.mp3", name="===Fight-Small-1===", owner_id=1, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    sound9 = Sound(sound_url=".mp3", name="Fight-Small-2", owner_id=1, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound10 = Sound(sound_url=".mp3", name="Fight-Small-3", owner_id=1, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    # Wilderness Ambience Category.Id=3
    sound11 = Sound(sound_url=".mp3", name="Campfire", owner_id=1, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    sound12 = Sound(sound_url="https://kevinbetker.com/App_Academy/soundblender/MP3s/dryCaveLoop.mp3", name="===Cave===", owner_id=1, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    sound13 = Sound(sound_url=".mp3", name="Creepy Woods", owner_id=1, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound14 = Sound(sound_url=".mp3", name="Crickets", owner_id=1, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound15 = Sound(sound_url=".mp3", name="Forest-Day", owner_id=1, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    # Wilderness Ambience Category.Id=4
    sound16 = Sound(sound_url=".mp3", name="Forest-Night", owner_id=1, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    sound17 = Sound(sound_url=".mp3", name="Rain", owner_id=1, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound18 = Sound(sound_url=".mp3", name="Small Stream", owner_id=1, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound19 = Sound(sound_url=".mp3", name="Thunder", owner_id=1, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    # Town - Ambience Category.Id=5
    sound20 = Sound(sound_url=".mp3", name="Apothecary", owner_id=1, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    sound21 = Sound(sound_url=".mp3", name="Black Smith", owner_id=1, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound22 = Sound(sound_url=".mp3", name="Coastal Town", owner_id=1, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound23 = Sound(sound_url=".mp3", name="Medium City", owner_id=1, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    sound24 = Sound(sound_url=".mp3", name="Medium Tavern", owner_id=1, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    # Town2 - Ambience Category.Id=6
    sound25 = Sound(sound_url=".mp3", name="Sewer", owner_id=1, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound26 = Sound(sound_url=".mp3", name="Small Tavern", owner_id=1, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound27 = Sound(sound_url=".mp3", name="Town", owner_id=1, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    sound28 = Sound(sound_url=".mp3", name="Town-Night", owner_id=1, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    # Coastal Ambience Category.id=7
    sound29 = Sound(sound_url=".mp3", name="Above Deck", owner_id=1, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound30 = Sound(sound_url=".mp3", name="Below Deck", owner_id=1, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound31 = Sound(sound_url=".mp3", name="Sea Storm", owner_id=1, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    sound32 = Sound(sound_url=".mp3", name="Under Water", owner_id=1, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    sound33 = Sound(sound_url=".mp3", name="Waves", owner_id=1, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)



    # User 2 sounds
    # Music Category.Id=1
    sound34 = Sound(sound_url=".mp3", name="Calm Night", owner_id=2, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound35 = Sound(sound_url=".mp3", name="Suspense 1", owner_id=2, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound36 = Sound(sound_url=".mp3", name="Suspense 2", owner_id=2, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    sound37 = Sound(sound_url=".mp3", name="High Suspense", owner_id=2, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    sound38 = Sound(sound_url=".mp3", name="Calm Travel", owner_id=2, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    # Battle Music Category.Id=2
    sound39 = Sound(sound_url=".mp3", name="Fight-Medium", owner_id=2, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound40 = Sound(sound_url=".mp3", name="Fight-Big", owner_id=2, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    sound41 = Sound(sound_url=".mp3", name="Fight-Small-1", owner_id=2, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    sound42 = Sound(sound_url=".mp3", name="Fight-Small-2", owner_id=2, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound43 = Sound(sound_url=".mp3", name="Fight-Small-3", owner_id=2, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    # Wilderness Ambience Category.Id=3
    sound44 = Sound(sound_url=".mp3", name="Campfire", owner_id=2, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    sound45 = Sound(sound_url=".mp3", name="Cave", owner_id=2, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    sound46 = Sound(sound_url=".mp3", name="Creepy Woods", owner_id=2, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound47 = Sound(sound_url=".mp3", name="Crickets", owner_id=2, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound48 = Sound(sound_url="https://kevinbetker.com/App_Academy/soundblender/MP3s/daytime.mp3", name="===Forest-Day===", owner_id=2, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    # Wilderness Ambience Category.Id=4
    sound49 = Sound(sound_url=".mp3", name="Forest-Night", owner_id=2, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    sound50 = Sound(sound_url=".mp3", name="Rain", owner_id=2, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound51 = Sound(sound_url="https://kevinbetker.com/App_Academy/soundblender/MP3s/streamLoop.mp3", name="===Small Stream===", owner_id=2, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound52 = Sound(sound_url=".mp3", name="Thunder", owner_id=2, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    # Town - Ambience Category.Id=5
    sound53 = Sound(sound_url=".mp3", name="Apothecary", owner_id=2, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    sound54 = Sound(sound_url=".mp3", name="Black Smith", owner_id=2, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound55 = Sound(sound_url=".mp3", name="Coastal Town", owner_id=2, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound56 = Sound(sound_url=".mp3", name="Medium City", owner_id=2, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    sound57 = Sound(sound_url=".mp3", name="Medium Tavern", owner_id=2, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    # Town2 - Ambience Category.Id=6
    sound58 = Sound(sound_url=".mp3", name="Sewer", owner_id=2, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound59 = Sound(sound_url=".mp3", name="Small Tavern", owner_id=2, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound60 = Sound(sound_url=".mp3", name="Town", owner_id=2, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    sound61 = Sound(sound_url=".mp3", name="Town-Night", owner_id=2, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    # Coastal Ambience Category.id=7
    sound62 = Sound(sound_url=".mp3", name="Above Deck", owner_id=2, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)
    sound63 = Sound(sound_url=".mp3", name="Below Deck", owner_id=2, is_public=False, target_volume=7, fade_speed=10, arrangement=0, is_looped=True)
    sound64 = Sound(sound_url=".mp3", name="Sea Storm", owner_id=2, is_public=False, target_volume=5, fade_speed=10, arrangement=0, is_looped=True)
    sound65 = Sound(sound_url=".mp3", name="Under Water", owner_id=2, is_public=False, target_volume=10, fade_speed=100, arrangement=0, is_looped=True)
    sound66 = Sound(sound_url=".mp3", name="Waves", owner_id=2, is_public=False, target_volume=6, fade_speed=50, arrangement=0, is_looped=True)







    db.session.add(sound1)
    db.session.add(sound2)
    db.session.add(sound3)
    db.session.add(sound4)
    db.session.add(sound5)
    db.session.add(sound6)
    db.session.add(sound7)
    db.session.add(sound8)
    db.session.add(sound9)
    db.session.add(sound10)
    db.session.add(sound11)
    db.session.add(sound12)
    db.session.add(sound13)
    db.session.add(sound14)
    db.session.add(sound15)
    db.session.add(sound16)
    db.session.add(sound17)
    db.session.add(sound18)
    db.session.add(sound19)
    db.session.add(sound20)
    db.session.add(sound21)
    db.session.add(sound22)
    db.session.add(sound23)
    db.session.add(sound24)
    db.session.add(sound25)
    db.session.add(sound26)
    db.session.add(sound27)
    db.session.add(sound28)
    db.session.add(sound29)
    db.session.add(sound30)
    db.session.add(sound31)
    db.session.add(sound32)
    db.session.add(sound33)


    db.session.add(sound34)
    db.session.add(sound35)
    db.session.add(sound36)
    db.session.add(sound37)
    db.session.add(sound38)
    db.session.add(sound39)
    db.session.add(sound40)
    db.session.add(sound41)
    db.session.add(sound42)
    db.session.add(sound43)
    db.session.add(sound44)
    db.session.add(sound45)
    db.session.add(sound46)
    db.session.add(sound47)
    db.session.add(sound48)
    db.session.add(sound49)
    db.session.add(sound50)
    db.session.add(sound51)
    db.session.add(sound52)
    db.session.add(sound53)
    db.session.add(sound54)
    db.session.add(sound55)
    db.session.add(sound56)
    db.session.add(sound57)
    db.session.add(sound58)
    db.session.add(sound59)
    db.session.add(sound60)
    db.session.add(sound61)
    db.session.add(sound62)
    db.session.add(sound63)
    db.session.add(sound64)
    db.session.add(sound65)
    db.session.add(sound66)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_sounds():
    db.session.execute('TRUNCATE sounds RESTART IDENTITY CASCADE;')
    db.session.commit()

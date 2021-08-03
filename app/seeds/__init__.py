from flask.cli import AppGroup
from .users import seed_users, undo_users
from .sounds import seed_sounds, undo_sounds
from .scenes import seed_scenes, undo_scenes
# from .joined_snds_cats import seed_joined_snds_cats, undo_joined_snds_cats
from .collections import seed_collections, undo_collections
from .categories import seed_categories, undo_categories
from .quickscenes import seed_quickscenes, undo_quickscenes

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_collections()
    seed_scenes()
    seed_sounds()
    seed_categories()
    seed_quickscenes()
    # seed_joined_snds_cats()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # undo_joined_snds_cats()
    seed_quickscenes()
    undo_categories()
    undo_sounds()
    undo_scenes()
    undo_collections()
    undo_users()

    # Add other undo functions here

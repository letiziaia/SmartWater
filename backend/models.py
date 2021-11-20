from pony.orm import Database, Required, Set, PrimaryKey
from datetime import datetime

db = Database()


class Apartment(db.Entity):
    house_number = Required(int)
    apartment_number = Required(int)
    number_of_people = Required(int)
    devices = Set('Device')
    PrimaryKey(house_number, apartment_number)


class DeviceType(db.Entity):
    name = PrimaryKey(str)
    devices = Set('Device')


class Device(db.Entity):
    device_type = Required('DeviceType')
    apartment = Required('Apartment')
    measurements = Set('Measurement')
    PrimaryKey(device_type, apartment)


class Measurement(db.Entity):
    consumption = Required(float)
    temp = Required(float)
    flow_time = Required(float)
    power_consumption = Required(float)
    timestamp = Required(datetime)
    device = Required('Device')

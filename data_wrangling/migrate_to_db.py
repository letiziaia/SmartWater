import pony.orm.core
from pony.orm import db_session
import json
from datetime import datetime
from pprint import pprint
import backend


def apartment_dict_from_record(record):
    key_mapping = {
        'houses': 'house_number',
        'apartments': 'apartment_number',
        'people': 'number_of_people'
    }
    type_conv = {
        'houses': int,
        'apartments': int,
        'people': int
    }
    return {new_key: type_conv[old_key](record[old_key]) for old_key, new_key in key_mapping.items()}


def device_type_dict_from_record(record):
    key_mapping = {
        'unknown_column_name': 'name'
    }
    type_conv = {
        'unknown_column_name': str
    }
    return {new_key: type_conv[old_key](record[old_key]) for old_key, new_key in key_mapping.items()}


def measurement_dict_from_measurement(measurement):
    key_mapping = {
        'Consumption': 'consumption',
        'Temp': 'temp',
        'FlowTime': 'flow_time',
        'Power_Consumption': 'power_consumption',
        'TimeStamp': 'timestamp'
    }
    type_conv = {
        'Consumption': float,
        'Temp': float,
        'FlowTime': float,
        'Power_Consumption': float,
        'TimeStamp': datetime.fromisoformat
    }
    return {new_key: type_conv[old_key](measurement[old_key]) for old_key, new_key in key_mapping.items()}


# Adapted from https://github.com/ponyorm/pony/issues/131#issuecomment-343869846
def upsert(cls, get, set_attrs=None):
    """
    Interacting with Pony entities.

    :param cls: The actual entity class
    :param get: Identify the object (e.g. row) with this dictionary
    :param set_attrs: Dict of attributes to set or update
    :return:
    """
    # does the object exist
    assert isinstance(cls, pony.orm.core.EntityMeta), "{cls} is not a database entity".format(cls=cls)

    # if no set dictionary has been specified
    set_attrs = set_attrs or {}

    if not cls.exists(**get):
        # make new object
        return cls(**set_attrs)
    else:
        # get the existing object and update attributes
        obj = cls.get(**get)
        obj.set(**set_attrs)
        return obj


@db_session
def process_record(record):
    apartment_dict = apartment_dict_from_record(record)
    pprint(apartment_dict)
    apartment = upsert(backend.models.Apartment, apartment_dict, apartment_dict)
    device_type_dict = device_type_dict_from_record(record)
    device_type = upsert(backend.models.DeviceType, device_type_dict, device_type_dict)
    device_dict = {'device_type': device_type, 'apartment': apartment}
    device = upsert(backend.models.Device, device_dict, device_dict)
    for measurement in record['measurements']:
        measurement_dict = measurement_dict_from_measurement(measurement)
        measurement_dict['device'] = device
        measurement_obj = upsert(backend.models.Measurement, measurement_dict, measurement_dict)


def migrate(json_path):
    with open(json_path, 'r') as f:
        data = json.load(f)
    for record in data:
        process_record(record)


if __name__ == '__main__':
    data_path = 'pretransformed.json'
    migrate(data_path)

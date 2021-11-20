import json
import copy


def next_available_key(base, currently_in_use):
    currently_in_use = set(currently_in_use)
    suggestion = base
    suffix = 1
    while suggestion in currently_in_use:
        suggestion = base + suffix
        suffix += 1
    return suggestion


def add_tuple_to_dict(dct, tpl):
    new_dict = copy.deepcopy(dct)
    new_dict[tpl[0]] = tpl[1]
    return new_dict


# Transform deep JSON formatted data to a flat table of records
def pretransform(data, measurements_key):
    unknown_key_base = "unknown_column_name"

    # Process nested lists to a indices, element format where element is not list
    def _produce_nested_lists_key(lst: list, elem_idxs):
        for i, e in enumerate(lst):
            new_idxs = elem_idxs + [i]
            if isinstance(e, list):
                yield from _produce_nested_lists_key(e, new_idxs)
            else:
                yield new_idxs, e

    records = []

    def _inner(subdict, record: dict):
        # Recurse through data
        # At each level, add key (column name) and value (index or value) to record
        dicts = []
        lists = []
        literals = []
        for item in subdict.items():
            item = {'key': item[0], 'value': item[1]}
            print('item key:', item['key'])
            if isinstance(item['value'], dict):
                dicts.append(item)
            elif isinstance(item['value'], list):
                lists.append(item)
            else:
                literals.append(item)
        for lit_item in literals:
            record[lit_item['key']] = lit_item['value']
        for dct_item in dicts:
            new_item = (next_available_key(unknown_key_base, record.keys()), dct_item['key'])
            new_record = add_tuple_to_dict(record, new_item)
            _inner(dct_item['value'], new_record)
        for lst_item in lists:
            if lst_item['key'] == measurements_key:
                new_record = add_tuple_to_dict(record, list(lst_item.values()))
                records.append(new_record)
                continue
            for i, e in enumerate(lst_item['value']):
                if isinstance(e, dict):
                    new_item = (lst_item['key'], i)
                    new_record = add_tuple_to_dict(record, new_item)
                    _inner(e, new_record)

    _inner(data, {})
    return records


if __name__ == '__main__':
    json_path = r"./db.json"
    new_filename = 'pretransformed.json'
    with open(json_path, 'r') as f:
        data_dict = json.load(f)
    new_json = pretransform(data_dict, 'measurements')
    with open(new_filename, 'w') as f:
        json.dump(new_json, f)
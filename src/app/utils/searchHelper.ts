import _ from 'lodash';

const products = [{ sku: '123', id: 1, name: 'Product 1' }, { sku: '456', id: 2, name: 'Product 2' }];

export const attributeMapper = (objectsArray: object[]): Record<string, unknown> => {
    const attributes: Record<string, unknown> = {};

    if (objectsArray.length === 0) {
        return attributes;
    }

    // Get all keys from the first product (assuming all products have the same structure)
    const keys = _.keys(objectsArray[0]);

    keys.forEach(key => {
        // Use _.map to extract the values for the key, then convert to a Set to remove duplicates, and back to an array
        attributes[key] = Array.from(new Set(_.map(objectsArray, key)));
    });

    return attributes;
}
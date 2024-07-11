import _ from 'lodash';

const products = [{ sku: '123', id: 1, name: 'Product 1' }, { sku: '456', id: 2, name: 'Product 2' }];

export const attributeMapper = (objectsArray: object[]): Record<string, unknown> => {
    const attributes: Record<string, unknown> = {};

    // Check if objectsArray is not empty to avoid errors
    if (objectsArray.length === 0) {
        return attributes;
    }

    // Get all keys from the first product (assuming all products have the same structure)
    const keys = _.keys(objectsArray[0]);

    // Iterate over each key and use _.map to extract that key's value from each product
    keys.forEach(key => {
        attributes[key] = _.map(objectsArray, key);
    });

    return attributes;
}
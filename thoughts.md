## Unfiltered thoughts

- Grabbing all data should be done at the top most level and data should flow down accordingly
- Depending on the size of the DB, an index should be made to improve query time
- Reminder to make sure type safety is done end to end
- What's to be done when a new pricing array is made
  - The default pricing should be the highest price, and that is offered without any prior dealings
    - The product can be duplicated and have it's price modified
    - The product can remain a master, and the adjustments can be made to the price
    - The product can have an optional adjustment value that can be filled to be a positive or negative (e.g. +$5, -$0.50)
      - It could also have a boolean value representing the adjustment being either a percentage or an absolute value
    - The buying party an adjustments mapping that allows the products array to be unchanged, but the final price is discounted

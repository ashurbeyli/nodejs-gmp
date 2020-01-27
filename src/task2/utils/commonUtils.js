export const getItemsByPageAndLimit = (items, page, limit) => items.slice(page * limit, limit);

export const deleteItemById = (items, id) => items.find(user => user.id === id).delete();

// 1. Creating User Profiles:

function printUserProfile(userProfile) {
    for (let key in userProfile) {
        console.log(`${key}: ${userProfile[key]}`);
    }
}

// 2. Updating Inventory:

function addStock(inventory, newInventory) {
    const updated = {};

    for (const key in newInventory) {
        if (inventory[key] !== undefined) {
            updated[key] = newInventory[key] + inventory[key];
        } else {
            updated[key] = newInventory[key];
        }
    }
    for (const key in inventory) {
        if (updated[key]) {
        } else {
            updated[key] = inventory[key];
        }
    }
    return updated;
}

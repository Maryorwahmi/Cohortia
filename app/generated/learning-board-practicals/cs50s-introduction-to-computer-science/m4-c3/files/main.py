# 1. Create the inventory list
inventory = ["Laptop", "Mouse", "Keyboard"]

# 2. Add "Monitor"
# inventory.append(...)

# 3. Remove "Mouse"
# inventory.remove(...)

# 4. Create the item_details dictionary
item_details = {
    "Laptop": {"price": 1200.00, "quantity": 5},
    "Keyboard": {"price": 75.00, "quantity": 10}
}

# 5. Add details for "Monitor"
# item_details["Monitor"] = {...}

# 6. Update quantity of "Laptop"
# item_details["Laptop"]["quantity"] = ...

# 7. Print current inventory and item_details
# print("Current Inventory:", inventory)
# print("Item Details:", item_details)

# 8. Calculate total inventory value
# total_value = 0.0
# for item_name in inventory:
    # Check if item_name exists in item_details to prevent KeyError
    # if item_name in item_details:
        # item = item_details[item_name]
        # total_value += item["price"] * item["quantity"]
# print("Total Inventory Value:", total_value)
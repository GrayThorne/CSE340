--SELECT account_id, account_firstname, account_lastname, account_email, account_password, account_type
--FROM account


-- 1 Insert for Tony Start 
INSERT INTO account(account_firstname, account_lastname, account_email, account_password)
VALUES('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n')
arting pgAdmin 4...
-- 2 Update to Tony Stark
UPDATE account SET account_type = 'Admin' WHERE account_id = 1

-- 3 Delete Tony Stark 
DELETE FROM account WHERE account_id = 1

-- 4 Updated GM Hummer record
UPDATE inventory 
SET inv_description = REPLACE(inv_description, 'the small interiors', 'a huge interior')
WHERE inv_id = 10

-- 5 Inner join for the Sport category
SELECT inv_make, inv_model, classification_name
FROM inventory INNER JOIN	classification 
ON inventory.classification_id = classification.classification_id
WHERE inventory.classification_id = 2

-- 6 Update all records to have vehicles in middle of the file path
UPDATE inventory
SET	inv_image = REPLACE(inventory.inv_image, '/images/', '/images/vehicles/'),
	inv_thumbnail = REPLACE(inventory.inv_thumbnail,'/images/', '/images/vehicles/' )
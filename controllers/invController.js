const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ****************************
* Build inventory by classification view
* ***************************** */
invCont.buildByClassificationId = async function(req, res, next){
    const classification_id = req.params.classificationId
    const data = await invModel.getInventoryByClassificationId(classification_id)
    const grid = await utilities.buildClassificationGrid(data)
    let nav = await utilities.getNav()
    const className = data[0].classification_name
    res.render("./inventory/classification",{
        title: className + "vehicles",
        nav,
        grid,
    })
}

/* ***************************
 *  Build vehicle details page by vehicle view
 * ************************** */
invCont.buildByInvId = async function (req, res, next) {
  const inv_id = req.params.invId
  const data = await invModel.getDetailsById(inv_id)
  const grid = await utilities.buildInvDetailGrid(data)
  let nav = await utilities.getNav()
  const className = data[0].inv_make
  console.log("price: " + data.inv_price)
  res.render("./inventory/details", {
    title: className,
    nav,
    grid,
  })
}

module.exports = invCont;
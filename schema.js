const Joi = require('joi'); //Joi = data validation library hoti hai.
// Form / API me aane wale data ko check karta hai sahi hai ya galat.

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),      // Must be text, cannot be empty
        description: Joi.string().required(),// Must be text, cannot be empty
        location: Joi.string().required(),   // Must be text
        country: Joi.string().required(),    // Must be text
        price: Joi.number().required().min(0), // Must be a number, CANNOT be negative (min 0)
        image: Joi.object({
            url: Joi.string().uri().allow("", null), // Must be a valid URL link, but empty is allowed
        }).optional(),
    }).required(),
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required()
})

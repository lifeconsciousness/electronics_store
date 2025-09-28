export default (async (request, response, next)=>{
    // Add manufacturer to the product update data
    const { body } = request;
    if (body.manufacturer !== undefined) {
        // Validate manufacturer field
        if (typeof body.manufacturer === 'string') {
            body.manufacturer = body.manufacturer.trim();
        }
    }
    next();
});

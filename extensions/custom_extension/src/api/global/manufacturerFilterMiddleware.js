export default async (request, response, next) => {
  // Check if this is a GraphQL request with products query
  if (request.body && request.body.query && request.body.query.includes('products')) {
    // Parse the variables to add manufacturer filter if present in URL
    const urlParams = new URLSearchParams(request.headers.referer ? new URL(request.headers.referer).search : '');
    const manufacturer = urlParams.get('manufacturer');
    
    if (manufacturer) {
      // Add manufacturer filter to GraphQL variables
      if (!request.body.variables) {
        request.body.variables = {};
      }
      
      if (!request.body.variables.filters) {
        request.body.variables.filters = [];
      }
      
      // Add manufacturer filter if not already present
      const hasManufacturerFilter = request.body.variables.filters.some(f => f.key === 'manufacturer');
      if (!hasManufacturerFilter) {
        request.body.variables.filters.push({
          key: 'manufacturer',
          operation: 'eq',
          value: manufacturer
        });
      }
    }
  }
  
  next();
};
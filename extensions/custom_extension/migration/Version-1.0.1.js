export default async function execute({ pool }) {
  // Add manufacturer column to product table
  await pool.query(`
    ALTER TABLE product 
    ADD COLUMN IF NOT EXISTS manufacturer VARCHAR(255)
  `);

  // Create index for better performance when filtering
  await pool.query(`
    CREATE INDEX IF NOT EXISTS idx_product_manufacturer 
    ON product(manufacturer)
  `);

  console.log('✅ Added manufacturer field to product table');
}
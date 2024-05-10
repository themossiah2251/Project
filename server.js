const express = require('express');
const cors = require('cors');
const sql = require('mssql/msnodesqlv8');
const stripe = require('stripe')('sk_test_51OrX5OARYka1w8MTqdbDdvSj7yczlW93s8Y5054X8JF8uaNo0uKP6OH4LN1mzAOeICGWfeOcOgalZItULJFAOOSb00cAwSu0dw');
const app = express();

app.use(cors());
app.use(express.json());

const config = {
    server: 'ENZO',
    database: 'mystore',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
};

sql.connect(config, err => {
    if (err) {
        console.error('Connection Failed:', err);
        return;
    }
    console.log('Connection Established Successfully.');
});

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to SQL Server Successfully!');
        return pool;
    })
    .catch(err => {
        console.error('Database Connection Failed!', err);
        process.exit(1);
    });

app.get('/products', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Products');
        res.json(result.recordset);
    } catch (error) {
        console.error('Failed to fetch products:', error);
        res.status(500).send('Error accessing products data');
    }
});

app.get('/products/:ID', async (req, res) => {
    const productId = req.params.ID;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('productId', sql.Int, productId)
            .query('SELECT * FROM Products WHERE ID = @productId');

        if (result.recordset.length > 0) {
            res.json(result.recordset[0]);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        console.error(`Failed to fetch product with ID ${productId}:`, error);
        res.status(500).json({ error: 'Error accessing product data' });
    }
});
app.post("/checkout", async (req, res) => {
    try {
        const { products } = req.body; // Changed from 'items' to 'products'
        const lineItems = products.map(product => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: product.Title,
                },
                unit_amount: product.Price * 100,
            },
            quantity: product.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: 'http://localhost:3000/success',
            cancel_url: 'http://localhost:3000/cancel',
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Checkout error:', error);
        res.status(500).send('Error processing checkout');
    }
});

app.listen(4023, () => {
    console.log('Server running on http://localhost:4023');
});
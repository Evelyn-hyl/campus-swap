import { Box, Grid2, Card, CardContent, Typography, CardMedia, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState, useRef, useEffect } from 'react';
import './ProductGrid.css';

export function ProductGrid() {
    const [products, setProducts] = useState([]);
    const [isProductsLoaded, setIsProductsLoaded] = useState(false);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('http://localhost:8080/api/products');
                const data = await res.json();
                console.log("Products:", data);
                setProducts(data);
                setIsProductsLoaded(true);
            } catch (err) {
                console.error("Error fetching products:", err);
            }
        }

        fetchProducts();
        setIsProductsLoaded(true);

    }, []);

    return (
        <>
            { isProductsLoaded ? (
                <Grid2 container className='grid-container' rowSpacing={2} columnSpacing={{ xs: 1, md: 2 }} columns={16}>
                    {products.map((product) => (
                        <Grid2 item className='grid' size={{ xs: 12, sm: 6, md: 6, lg: 4 }} key={product.id}>
                        <Card sx={{ 
                            width: '100%',
                            maxWidth: 350,
                            backgroundColor: 'transparent',
                            transition: 'transform 0.3s ease-out, border-color 0.3s ease-out',
                            overflow: 'hidden',
                            boxShadow: 'none',
                            border: '2px solid transparent',
                            borderRadius: '10px',
                            '& .MuiCardMedia-root': {
                                transition: 'transform 0.3s ease-out',
                                borderRadius: '10px',
                            },
                            '&:hover': {
                                borderColor: '#9db7aa', // Green border appears on hover
                                borderRadius: '10px',
                            },
                            '&:hover .MuiCardMedia-root': {
                                transform: 'scale(0.96)',
                            },
                        }}>
                            <Link to={`/product/${product.id}`} className='no-underline'>
                                <Box sx={{ position: 'relative' }}>
                                    <CardMedia 
                                        image={product.images[0]?.imageUrl}
                                        alt={`Image of ${product.name}`}
                                        loading="lazy"
                                        sx={{ height: 280,
                                            cursor: 'pointer',
                                        }}
                                    />

                                    {/* Wishlist Heart Button */}
                                    <IconButton
                                        sx={{
                                        position: 'absolute',
                                        top: 15,
                                        right: 15,
                                        }}>
                                        <IconContext.Provider value={{ className:'heart-icon'}}>
                                            <div>
                                                <FaRegHeart />
                                            </div>
                                        </IconContext.Provider>
                                    </IconButton>

                                    <CardContent sx={{ pt: 2}} className='product-card-content'>
                                    <Typography variant="body1" sx={{ fontFamily: 'LexandDeca', color: '#9db7aa', marginBottom: '2px' }}>{product.name}</Typography>
                                    <Typography variant="body1" sx={{ fontFamily: 'LexandDeca', color: '#9db7aa', marginBottom: '2px' }}>{product.brand}</Typography>
                                    <Typography variant="body1" sx={{ fontFamily: 'TheBoldFont', color: '#484238', marginTop: '-1px', fontSize: '1rem', }}>{product.price}</Typography>
                                    </CardContent> 
                                </Box>
                            </Link>
                        </Card>
                        </Grid2>
                    ))}
                </Grid2>
            ) : (
                <Typography variant="h6" sx={{ fontFamily: 'LexandDeca', color: '#484238', textAlign: 'center', marginTop: '20px' }}>
                    No products found.
                </Typography>
            )}
        </>
    );
}

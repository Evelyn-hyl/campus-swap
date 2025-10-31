import { HeaderBar } from "../../components/HeaderBar/HeaderBar";
import { NavBar } from "../../components/NavBar/NavBar";
import { SidepeekMenu } from "../../components/SidepeekMenu/SidepeekMenu";
import { SidepeekCart } from "../../components/SidepeekCart/SidepeekCart";
import { Footer } from "../../components/Footer/Footer";
import { useEffect, useState } from 'react';
import { Box, Grid2, Fade, CardMedia, IconButton, Typography } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useParams } from "react-router-dom";

import './ProductPage.css';
import products from "../../data/mockProductDb";
import { ItemDetailsAccordion } from "../../components/ItemDetailsAccordion";

export default function ProductPage() {
    const { id } = useParams();
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [isCartOpened, setIsCartOpened] = useState(false);
    const [fadeIn, setFadeIn] = useState(false);

    const [product, setProduct] = useState(null);
    const [productImages, setProductImages] = useState([]);
    const [mainImage, setMainImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`http://localhost:8080/api/products/${id}`);
                if (!response.ok) throw new Error('Product not found');
                const data = await response.json();
                setProduct(data);

                const urls = (data.images || []).map((img) => (typeof img === 'string' ? img : img.imageUrl));
                setProductImages(urls);
                setMainImage(urls[0] ?? null);

                setIsLoading(false);
                console.log('[Product Data]:', urls.slice(0, 3));
            } catch (err) {
                console.error('Error fetching product:', err);
                setIsLoading(false);
            }
        }

        fetchProduct();
        window.scrollTo(0, 0);
        setFadeIn(true);
    }, [id]);

    if (isLoading) {
        return (
            <Typography variant="h6" sx={{ fontFamily: 'LexandDeca', color: '#484238', textAlign: 'center', marginTop: '20px' }}>
                Loading...
            </Typography>
        );
    }

    if (!product) {
        return (
            <Typography variant="h6" sx={{ fontFamily: 'LexandDeca', color: '#484238', textAlign: 'center', marginTop: '20px' }}>
                Product not found.
            </Typography>
        );
    }

    const openMenu = () => {
        setIsMenuOpened(true);
        console.log("menu opened");
    }

    const closeMenu = () => {
        setIsMenuOpened(false);
        console.log("menu closed");
    }

    const handleMenuClick = () => {
        if (isMenuOpened === false) {
            openMenu();
        } 
        if (isMenuOpened === true) {
            closeMenu();
        }
    }

    const closeCart = () => {
        setIsCartOpened(false);
        console.log("cart closed");
    }

    const handleCartClick = () => {
        setIsCartOpened((prev) => !prev); 
        console.log(isCartOpened ? "cart closed" : "cart opened");
    }

    return (
        <>
            <header className='bar-wrapper'>
        
            <div className='top-bar'></div>
    
            {/* Header Bar */}
            <HeaderBar/>
    
            {/* Nav Bar */}
            <NavBar handleMenuClick={handleMenuClick} handleCartClick={handleCartClick}/>
            </header>
    
            {/* Sidepeeks*/}
            <SidepeekMenu isOpened={isMenuOpened} onClose={closeMenu}/>
    
            <SidepeekCart isOpened={isCartOpened} onClose={closeCart}/>
            
    
            {/* Items */}
            <Fade in={fadeIn} timeout={250}>
                <main className={`main-content-wrapper`}>
                    
                    <Grid2 container className='product-image-info-container' rowSpacing={1.5} columnSpacing={6} sx={{ justifyContent: 'center', }}>
                        <Grid2 container size={{xs:12, md:7}} sx={{ position: 'relative',
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    maxWidth: 530,
                                                                    backgroundColor: 'transparent',
                                                                    overflow: 'hidden',
                                                                    boxShadow: 'none',
                                                                    justifyContent: 'flex-end',
                                                                    flexDirection: 'column',
                        }}>
                            <CardMedia 
                                component="img"
                                image={mainImage}
                                loading="lazy"
                                sx={{ aspectRatio: 1 / 1,
                                    cursor: 'pointer',
                                    borderRadius: '20px',
                                }}
                            />

                            <IconButton
                                sx={{
                                position: 'absolute',
                                top: 30,
                                right: 30,
                                }}>
                                <IconContext.Provider value={{ className: 'heart-icon' }}>
                                    <div>
                                        <FaRegHeart size={32} color="white"/>
                                    </div>
                                </IconContext.Provider>
                            </IconButton>

                            <Box display="flex" gap={1} mt={0} sx={{ overflow: 'hidden' }}>
                                {productImages.map((img, index) => {
                                    return (
                                        <CardMedia
                                            key={index}
                                            component="img"
                                            image={img}
                                            sx={{ width: 100,
                                                height: 100,
                                                objectFit: 'cover',
                                                cursor: 'pointer',
                                                border: '2px solid transparent',
                                                borderRadius: '15px',
                                                transition: 'transform 0.3s ease-out, border-color 0.3s ease-out',
                                                '&:hover': {
                                                    borderColor: '#9db7aa',
                                                },
                                            }}
                                            onMouseEnter={() => setMainImage(img)}
                                        />
                                    )
                                })}
                            </Box>
                        </Grid2>

                        <Grid2 container size={{ xs:12, md:4}} sx={{ position: 'relative', justifyContent: 'left' }}>
                            <div className="product-description-wrapper">
                                <h4 className="product-name">{ product.name }</h4>
                                <p className="product-brief-description">{ product.condition } · { product.brand }</p>
                                <p className="product-price">US { product.price }</p>
                                <button className="button">Buy Now</button>
                                <button className="green-button">Add to Cart</button>
                                <button className="green-button">Make Offer</button>
                                <div className="divider"></div>
                                <ItemDetailsAccordion product={product} />
                            </div>
                            
                        </Grid2>
                    </Grid2>

                    <Grid2>
                        
                    </Grid2>
                    
                </main>
            </Fade>
            
    
            <footer className='footer-wrapper'>
            <Footer />
            </footer>
        </>
    );
}
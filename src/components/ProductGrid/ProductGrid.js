import { Box, Grid2, Card, CardContent, Typography, CardMedia, IconButton } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { IconContext } from "react-icons"
import { styled } from '@mui/material/styles';

import './ProductGrid.css'


const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 350,
    border: '2px solid white',
    borderRadius: '8px',
    transition: 'border-color 0.3s ease',
    '&:hover': {
      borderColor: '#9db7aa',
    },
  }));

export function ProductGrid() {
    const products = [
        { id: 1, name: 'Desk Lamp', description: '$ 10.00', image: 'https://rataplan.nl/wp-content/uploads/2024/09/Tafellamp-Lucide-wit-15209886.jpg', },
        { id: 2, name: 'Mini Fridge', description: '$ 30.00', image: 'https://i.ebayimg.com/images/g/lT0AAOSwR3piXY4F/s-l400.jpg', },
        { id: 3, name: 'Microwave', description: '$ 26.00', image: 'https://s3-ap-southeast-1.amazonaws.com/wwwsecondhandmy/items/samsung-microwave-oven-for-sale-0-0-1.jpg', },
        { id: 4, name: 'Bookshelf', description: '$ 10.00', image: 'https://mlhfbr0scq6i.i.optimole.com/cb:E3hE.5f870/w:300/h:300/q:75/rt:fill/g:ce/f:best/https://ergooutlet.co.uk/wp-content/uploads/2025/01/U-BC-7-BE-02-1.jpg', },
        { id: 5, name: 'Office Chair', description: '$ 9.00', image: 'https://www.furniturefinders.com/dboffice/files/small/66851.jpg', },
        { id: 6, name: 'Laundry Basket', description: '$ 4.50', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHb-NhQYsFp5vhF8nF2RyeQytbioRYDI30QA&s', },
        { id: 7, name: 'Storage Bin', description: '$ 2.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQPjMFwm1ceMecqvEq1Yyp2Fiup_vyekQFw&s', },
        { id: 8, name: 'Wall Mirror', description: '$ 2.00', image: 'https://i.etsystatic.com/20262970/r/il/b1d689/2512024758/il_570xN.2512024758_6og6.jpg', },
        { id: 9, name: 'Floor Rug', description: '$ 10.00', image: 'https://imagedelivery.net/ePR8PyKf84wPHx7_RYmEag/0ede88e6-9f35-45f0-20b7-c252a6899d00/86', },
        { id: 10, name: 'Table Fan', description: '$ 5.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQROPuyQjEg3X80aD_9KXCbW19NDU6XUOt4ZFx1flKoiy5EQHPb4je6uygBEV6YoBbqVkk&usqp=CAU', },
        { id: 11, name: 'Bean Bag', description: '$ 35.00', image: 'https://for-sale.used-secondhand.co.uk/media/used/secondhand/images/95583/13x-black-and-white-bean-bags-devon/500/black-leather-bean-bags-for-sale-987.jpg', },
        { id: 12, name: 'Study Desk', description: '$ 50.00', image: 'https://media.karousell.com/media/photos/products/2021/7/20/second_hand_study_desk_table_w_1626778869_2a9f5adc_progressive.jpg', },
        { id: 13, name: 'Bedside Table', description: '$ 24.00', image: 'https://i.ebayimg.com/images/g/R6kAAOSwJoljHkIg/s-l1200.jpg', },
        { id: 14, name: 'Curtains', description: '$ 3.00', image: 'https://pinchbackcurtains.co.uk/wp-content/uploads/Great-quality-second-hand-curtains.jpg', },
        { id: 15, name: 'Shoe Rack', description: '$ 8.00', image: 'https://i.etsystatic.com/14191678/r/il/62c868/5389984390/il_fullxfull.5389984390_f1fj.jpg', },
        { id: 16, name: 'Closet Organizer', description: '$ 3.00', image: 'https://di2ponv0v5otw.cloudfront.net/posts/2022/10/26/635904498d7a3c71adb91f37/m_wp_63590455f8c5da0fb78a7f68.webp', },
        // ...more products
      ];
    
    
    return (
        <>
            <Grid2 container className='grid-container' rowSpacing={2} columnSpacing={{ xs: 1, md: 2 }} columns={16}>
                {products.map((product) => (
                    <Grid2 item className='grid' size={{ xs: 12, sm: 6, md: 6, lg: 4 }} key={product.id}>
                    <StyledCard>
                        <Box sx={{ position: 'relative' }}>
                            <CardMedia 
                                image={product.image}
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
                                bottom: 80,
                                right: 8,
                                }}
                            >
                                <IconContext.Provider value={{ className:'heart-icon'}}>
                                    <div>
                                        <FaRegHeart />
                                    </div>
                                </IconContext.Provider>
                            </IconButton>

                            <CardContent sx={{ pt: 1.5}} className='product-card-content'>
                            <Typography variant="body1" sx={{ fontFamily: 'LexandDeca', color: '#eeaeae', letterSpacing: -0.5 }}>{product.name}</Typography>
                            <Typography variant="body2" sx={{ fontFamily: 'TheBoldFont', color: '#9db7aa'}}>{product.description}</Typography>
                            </CardContent> 
                        </Box>
                    </StyledCard>
                    </Grid2>
                ))}
            </Grid2>
        </>
    );
}

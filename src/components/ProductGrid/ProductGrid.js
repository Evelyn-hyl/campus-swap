import { Grid2, Card, CardContent, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import placeholder from '../../assets/Pink-Placeholder.svg';

import './ProductGrid.css'


const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 350,
    border: '2px solid white',      // Default border
    borderRadius: '8px',            // Rounded corners
    transition: 'border-width 0.3s ease, border-color 0.3s ease', // Smooth animation
    '&:hover': {
      borderWidth: '2px',           // Thicker border on hover
      borderColor: '#9db7aa',       // Optional: Change border color on hover
    },
  }));

export function ProductGrid() {
    const products = [
        { id: 1, name: 'Desk Lamp', description: '$ 10.00' },
        { id: 2, name: 'Mini Fridge', description: '$ 30.00' },
        { id: 3, name: 'Microwave', description: '$ 26.00' },
        { id: 4, name: 'Bookshelf', description: '$ 10.00' },
        { id: 5, name: 'Office Chair', description: '$ 9.00' },
        { id: 6, name: 'Laundry Basket', description: '$ 4.50' },
        { id: 7, name: 'Storage Bin', description: '$ 2.00' },
        { id: 8, name: 'Wall Mirror', description: '$ 2.00' },
        { id: 1, name: 'Floor Rug', description: '$ 10.00' },
        { id: 2, name: 'Table Fan', description: '$ 5.00' },
        { id: 3, name: 'Bean Bag', description: '$ 35.00' },
        { id: 4, name: 'Study Desk', description: '$ 50.00' },
        { id: 5, name: 'Bedside Table', description: '$ 24.00' },
        { id: 6, name: 'Curtains', description: '$ 3.00' },
        { id: 7, name: 'Shoe Rack', description: '$ 8.00' },
        { id: 8, name: 'Closet Organizer', description: '$ 3.00' },
        // ...more products
      ];
    
    
    return (
        <>
            <Grid2 container className='grid-container' rowSpacing={2} columnSpacing={{ xs: 1, md: 2 }} columns={16}>
                {products.map((product) => (
                    <Grid2 item className='grid' size={{ xs: 12, sm: 6, md: 6, lg: 4 }} key={product.id}>
                    <StyledCard>
                        <CardMedia 
                            image={placeholder}
                            alt={`Image of ${product.name}`}
                            loading="lazy"
                            sx={{ height: 200, 
                                  objectFit: 'cover',
                                  border: '10px solid white',
                                  cursor: 'pointer',
                            }}
                        />
                        <CardContent sx={{ pt: 0}} className='product-card-content'>
                        <Typography variant="body1" sx={{ fontFamily: 'LexandDeca', color: '#eeaeae', letterSpacing: -0.5 }}>{product.name}</Typography>
                        <Typography variant="body2" sx={{ fontFamily: 'TheBoldFont', color: '#9db7aa'}}>{product.description}</Typography>
                        </CardContent> 
                    </StyledCard>
                    </Grid2>
                ))}
            </Grid2>
        </>
    );
}

import './ItemDetailsAccordion.scss';
import { Accordion } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { FaAngleDown } from "react-icons/fa";

export function ItemDetailsAccordion({ product }) {
    return (
        <>
            <Accordion disableGutters={true} defaultExpanded={true} elevation={0} sx={{ boxShadow: 'none', backgroundColor: '#fff9ef' }}>
                <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{
                    '& .MuiAccordionSummary-content': {
                        margin: 0,
                        alignItems: 'center'
                    }
                }}
                >
                <Typography variant="body1" sx={{ fontFamily: 'TheBoldFont', color: '#484238', fontWeight: 'bold' }}>Product Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <p className="product-brief-description">{ product.description }</p>
                </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion disableGutters={true} defaultExpanded={true} elevation={0} sx={{ boxShadow: 'none', backgroundColor: '#fff9ef' }}>
                <AccordionSummary
                expandIcon={<FaAngleDown />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{
                    '& .MuiAccordionSummary-content': {
                        margin: 0,
                        alignItems: 'center'
                    }
                }}
                >
                <Typography variant="body1" sx={{ fontFamily: 'TheBoldFont', color: '#484238', fontWeight: 'bold' }}>Shipping Details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <p className="product-brief-description">{ product.description }</p>
                </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
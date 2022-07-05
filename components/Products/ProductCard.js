import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { IoIosArrowDown } from "react-icons/io";

import styles from '../../styles/ProductCard.module.css'



function ProductCard({ id, name, composition, indications, dosage, formulation, packing, image }) {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={styles.card} key={id} data-aos='fade-up'>
            <h1>{name}</h1>
            <div className={styles.container}>
                <div className={styles.card_img}>
                    <Image src={image} alt="" placeholder="blur" priority="true" className={styles.image} layout="fill"/>
                </div>
                <div className={styles.card_content}>
                    <div className={styles.dropdown}>
                        <Accordion 
                            expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
                            disableGutters elevation={0}
                            sx={{ '&:before': {
                                display: 'none',
                            }, background: expanded === 'panel1' ? 'rgba(97, 149, 231, 0.87)' : 'transparent', padding: '0.12rem 1rem', margin: '0.5rem 0', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
                        >
                            <AccordionSummary
                                expandIcon={<IoIosArrowDown className={styles.icon} />}
                                aria-controls='panel1bh-content' id='panel1bh-header'
                                sx={{ padding: 0 }}
                            >
                            <h2 className={styles.dropdown_heading} >Dosage</h2>
                            </AccordionSummary>
                            <AccordionDetails sx={{padding: '0.5rem 0'}}>
                                <p className={styles.dropdown_content} >
                                    {dosage}
                                </p>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion 
                            expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
                            disableGutters elevation={0}
                            sx={{ '&:before': {
                                display: 'none',
                            }, background: expanded === 'panel2' ? 'rgba(97, 149, 231, 0.87)' : 'transparent', padding: '0.12rem 1rem', margin: '0.5rem 0', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
                        >
                            <AccordionSummary
                                expandIcon={<IoIosArrowDown className={styles.icon} />}
                                aria-controls='panel2bh-content' id='panel2bh-header'
                                sx={{ padding: 0 }}
                            >
                            <h2 className={styles.dropdown_heading} >Packing</h2>
                            </AccordionSummary>
                            <AccordionDetails sx={{padding: '0.5rem 0'}}>
                                <p className={styles.dropdown_content}>
                                    {packing}
                                </p>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion 
                            expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
                            disableGutters elevation={0}
                            sx={{ '&:before': {
                                display: 'none',
                            }, background: expanded === 'panel3' ? 'rgba(97, 149, 231, 0.87)' : 'transparent', padding: '0.12rem 1rem', margin: '0.5rem 0', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
                        >
                            <AccordionSummary
                                expandIcon={<IoIosArrowDown className={styles.icon} />}
                                aria-controls='panel3bh-content' id='panel3bh-header'
                                sx={{ padding: 0 }}
                            >
                            <h2 className={styles.dropdown_heading} >Formulation</h2>
                            </AccordionSummary>
                            <AccordionDetails sx={{padding: '0.5rem 0'}}>
                                <p className={styles.dropdown_content}>
                                    {formulation}
                                </p>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion 
                            expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
                            disableGutters elevation={0}
                            sx={{ '&:before': {
                                display: 'none',
                            }, background: expanded === 'panel4' ? 'rgba(97, 149, 231, 0.87)' : 'transparent', padding: '0.12rem 1rem', margin: '0.5rem 0', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
                        >
                            <AccordionSummary
                                expandIcon={<IoIosArrowDown className={styles.icon} />}
                                aria-controls='panel4bh-content' id='panel4bh-header'
                                sx={{ padding: 0 }}
                            >
                            <h2 className={styles.dropdown_heading} >Composition</h2>
                            </AccordionSummary>
                            <AccordionDetails sx={{padding: '0.5rem 0'}}>
                                <div className={styles.dropdown_content}>
                                    <ul>
                                        {composition.map((comp, id) => (
                                            <li key={id}>{comp}</li>
                                        ))}
                                    </ul>
                                </div>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion 
                            expanded={expanded === 'panel5'} onChange={handleChange('panel5')}
                            disableGutters elevation={0}
                            sx={{ '&:before': {
                                display: 'none',
                            }, background: expanded === 'panel5' ? 'rgba(97, 149, 231, 0.87)' : 'transparent', padding: '0.12rem 1rem', margin: '0.5rem 0', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' }}
                        >
                            <AccordionSummary
                                expandIcon={<IoIosArrowDown className={styles.icon} />}
                                aria-controls='panel5bh-content' id='panel5bh-header'
                                sx={{ padding: 0 }}
                            >
                            <h2 className={styles.dropdown_heading} >Indication</h2>
                            </AccordionSummary>
                            <AccordionDetails sx={{padding: '0.5rem 0'}}>
                                <div className={styles.dropdown_content}>
                                    <ul>
                                        {indications.map((ind, id) => (
                                            <li key={id}>{ind}</li>
                                        ))}
                                    </ul>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductCard

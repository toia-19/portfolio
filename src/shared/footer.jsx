import React from "react";
import './style.css';

// Componentes Material-UI
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

export default function Footer() {
    // Corresponde al botón y ventana emergente de Dialog
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <footer className="crumbs">
                <ol>
                    <li className="crumb"><a href="">Inicio</a></li>
                    <li className="crumb"><a href="">Más Información</a></li>
                    <Button variant="text" color="secondary" size="small" onClick={handleClickOpen}>
                        Contacto
                    </Button>
                    <li className="crumb">Copyright © 2024 RN, Argentina</li>
                </ol>
            </footer>


            {/* Diálogo para ver el contacto */}
            <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description" >

                <DialogTitle id="alert-dialog-title">
                    {"Contactame :)"}
                </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <a href="https://github.com/toia-19">GitHub</a> <br />
                        <a href="https://www.linkedin.com/in/victoria-ang%C3%A9lina-diaz/">LinkedIn</a>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    )
}
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QRCode from 'qrcode.react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';

const FeaturesSection = () => {
    const [ips, setIps] = useState([]);
    const [selectedQR, setSelectedQR] = useState(null); // Estado para el QR seleccionado
    const [open, setOpen] = useState(false); // Estado para controlar el modal

    useEffect(() => {
        const fetchIPs = async () => {
            try {
                const simulatedIPs = [
                    '192.168.1.1',
                    '192.168.1.2',
                    '192.168.1.3',
                    '192.168.1.4',
                    '192.168.1.5'
                ];

                const ipWithPort = simulatedIPs.map(ip => `${ip}:5173`);
                setIps(ipWithPort);
            } catch (error) {
                console.error('Error fetching IPs:', error);
            }
        };

        fetchIPs();
    }, []);

    const handleOpen = (ip) => {
        setSelectedQR(ip); // Establecer el QR seleccionado
        setOpen(true); // Abrir el modal
    };

    const handleClose = () => {
        setOpen(false); // Cerrar el modal
        setSelectedQR(null); // Limpiar el QR seleccionado
    };

    return (
        <Box sx={{ padding: '50px 20px', backgroundColor: '#222', color: '#fff' }}>
            <Typography variant="h4" gutterBottom textAlign="center">
                IPs Carousel with QR Codes
            </Typography>
            {ips.length > 0 ? (
                <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
                    {ips.map((ip, index) => (
                        <div key={index} onClick={() => handleOpen(ip)}> {/* Abrir el modal al hacer clic */}
                            <Card sx={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '20px' }}>
                                <QRCode value={ip} size={128} />
                                <CardContent>
                                    <Typography variant="body2" sx={{ marginTop: '10px', wordBreak: 'break-word' }}>
                                        {ip}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </Carousel>
            ) : (
                <Typography variant="h6" textAlign="center" sx={{ color: '#fff', marginTop: '20px' }}>
                    No IPs available
                </Typography>
            )}
            
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        border: 'none',
                        boxShadow: 24,
                        p: 4,
                        outline: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(5px)',
                        borderRadius: '10px',
                    }}
                >
                    {selectedQR && <QRCode value={selectedQR} size={256} />} {/* Mostrar el QR seleccionado */}
                </Box>
            </Modal>
        </Box>
    );
};

export default FeaturesSection;

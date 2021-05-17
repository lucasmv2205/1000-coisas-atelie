import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import WppIcon from '@material-ui/icons/WhatsApp'
import styles from './card.module.scss';

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    minHeight: 300,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
      <div className={styles.card}>
        <Card className={classes.root}>
            <CardContent>
                <h4>
                Colmeia organizadora
                </h4>
                <p>
                    Colmeia organizadora
                </p>
                <Image
                    src="/colmeia.png"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                />
                <p>
                Organizar roupas, meias, roupas íntimas, <br />de atividade física
                <br />
                {'"um armário completamente organizado"'}
                </p>
            </CardContent>
            <div>
                <CardActions>
                    <Fab color="primary" aria-label="add">
                        <Link href="https://api.whatsapp.com/send?phone=5562981401716">
                            <WppIcon />
                        </Link>
                    </Fab>
                </CardActions>
            </div>
        </Card>
    </div>
  );
}
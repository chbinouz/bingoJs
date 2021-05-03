import React, {useCallback} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import sales from '../../folderdisplay/sales';
import styled from 'styled-components';
import {  useHistory } from "react-router-dom";



const Containerr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`



const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    position: 'static'
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



function SalesAndMarketing(props) {
  
  const classes = useStyles();
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/hr/SEMSpecialists'), [history]);
  const handleOnClick1 = useCallback(() => history.push('/hr/SEOSpecialists'), [history]);
  const handleOnClick2 = useCallback(() => history.push('/hr/MarketingAnalysts'), [history]);
  const handleOnClick3 = useCallback(() => history.push('/hr/MarketResearchers'), [history]);
 
 

  
  return (
   
    <React.Fragment>
      <CssBaseline />
      <main>
      <Containerr>
        <Container className={classes.cardGrid} maxWidth="md"  >
          {/* End hero unit */}
          <Grid container spacing={4} >
            {sales.map((file, index) => (
              <Grid item key={file} xs={12} sm={6} md={4}>
                <Card className={classes.files} >
                <span className="close">&times;</span>
                  <CardMedia
                    className={classes.cardMedia}
                    image={file.image}
                    
                  />
                   
            
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                     {file.name}
                    </Typography>
                    <Typography>
                     {file.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button onClick={()=>{
                      if (file.name === "SEM Specialists"){
                        handleOnClick();
                      }else if(file.name === "SEO Specialists") {
                        handleOnClick1();   
                    }else if(file.name === "Marketing Analysts"){
                      handleOnClick2();
                    }else if(file.name === "Market Researchers"){
                      handleOnClick3();
                    }}}  size="small" color="primary">
                      View
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Containerr>
      </main>
    </React.Fragment>
    
  );
}



export default SalesAndMarketing;
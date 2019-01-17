import React, { Component } from 'react';

/**Material UI Components */
import Grid from '@material-ui/core/Grid';
/**CSSTRANSITION */
import { CSSTransition } from 'react-transition-group';

/**css */
import './Contenido.css';

/** Imagenes */
import banner  from '../../imagenes/Banner.jpg';
import oriente from '../../imagenes/oriente.png';
import medellin from '../../imagenes/medellin.png';
import ContenidoOriente from '../../imagenes/contenido_oriente.png';


//<Grid container spacing={24} direction="row" justify="center" alignItems="center">

class Contenido extends Component {

    constructor(props) {
        super(props);

        
        this.state = {
            buttonIsHovered: ''
        }

    }

    /**
     * Funciòn para activar y desactivar el hover
     * @param {*} data //Booleano que establece el valos de buttonIsHovered
     */
    setButtonHovered(data){
        this.setState({
            buttonIsHovered: data,
           
        })
        console.log(this.state.buttonIsHovered);
        
    }
  
    render() {
        return (
            <Grid  container >    
                <Grid item xs={12}>
                    <img src={banner} className="imagen"  alt="logo"/>
                </Grid>
                <Grid item xs={12}>
                    <br/>        
                </Grid>
                <Grid  container className="contenedor_imagenes">
                    <Grid item xs={6} >
                        <img
                            onMouseEnter={() => this.setButtonHovered(true)} 
                            onMouseLeave={() => this.setButtonHovered(false)}
                            className="oriente imagen"
                            src={oriente} 
                        />
                        <img src={ContenidoOriente} 
                        className={ this.state.buttonIsHovered ? 'imagen contenido_oriente contenido_oriente_hover ' : 'contenido_oriente imagen'}    alt="logo"/>
                    </Grid>
                    <Grid item xs={6}>
                        <img src={medellin} 
                        className={ this.state.buttonIsHovered ? 'imagen medellin medellin_hover' : 'imagen medellin'}  alt="logo"/>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Contenido;

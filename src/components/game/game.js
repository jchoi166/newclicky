import React, {Component} from 'react'
import Workers from '../../office.json'
import WorkerCard from './gamecomponents/workerCard'
import shuffle from 'shuffle-array'
import Grid from '@material-ui/core/Grid';
class Game extends Component {
    state={
        worker: [],
        clicked: []
    }

    componentDidMount = () => {
        this.setState({worker: shuffle(Workers)})
    }
    handleClick = name => {
        if (this.state.clicked.indexOf(name) !== -1){
            alert('You Lose!')
        } else {
            let clickedArr = this.state.clicked
            clickedArr.push(name)
            this.setState({worker: shuffle(Workers), clicked: clickedArr})}
    }
    render() {
        return(
            <>
            <h1>Hello I am gayme</h1>
            <Grid container spacing={24}>
            {
                this.state.worker.map(worker => 
                    <Grid item xs={3} onClick={()=>this.handleClick(worker.name)}>
                        <WorkerCard name = {worker.name} image={worker.image} />
                    </Grid>
                )
            }
            </Grid>
            </>
        )
    }
} 

export default Game
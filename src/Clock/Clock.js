import React, {Component} from 'react';
import Clock from './Clock.css';



class clock extends Component {

    state= {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }

    componentWillMount() {
        this.getTimeUntil(this.props.deadline);
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
    }

    leading0(num){
        return num < 10 ? '0' + num : num;
    }

    getTimeUntil(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        

        const seconds = Math.floor((time/1000) % 60);
        const minutes = Math.floor((time/1000/60) % 60);
        const hours = Math.floor(time/(1000* 60 * 60) % 24);
        const days = Math.floor(time/(1000* 60 * 60 * 24));

        this.setState({
            days,
            hours,
            minutes,
            seconds
        })
        
    }


    render(){
        return (
            <div>
                <ul>
                    <li>{this.leading0(this.state.days)} days</li>
                    <li>{this.leading0(this.state.hours)} hours</li>
                    <li>{this.leading0(this.state.minutes)} minutes</li>
                    <li>{this.leading0(this.state.seconds)} seconds</li>
                </ul>
            </div>
        )
    }
}

export default clock;
import React, {Component } from 'react';
import './App.css';

type CounterState = {
  count: number
}
type CounterProps = {
  // readonly title?: string 
  // в новых версиях ТС реадонли ставиться автоматом

  title?: string
}

class Counter extends Component< CounterProps, CounterState  > {
  constructor(props: CounterProps){
    super(props)
    this.state = {
      count: 0 
    }
  }
  static defaultProps: CounterProps = {
    title: "Default counter: "
  }
  static getDerivededStateFromProps(props: CounterProps, state: CounterState): CounterState | null{
    return true ? {count: 2} : null
  }
  componentDidMount():void{

  }

  shouldComponentUpdate(nextprops: CounterProps, nextState: CounterState){
    return true
  }
  handleClick = () => {
    this.setState( ({count} )=>({
      count: ++count
    }))
  }
  render(){
    return (
      <div>
        
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>

    )
  }
}
//типы
type TitleProps = {
  title: string,
  //необязательный параметр
  test?: string
}
//функция должна что то возвращать
const Title = ({title, test = 'react'}: TitleProps ) => <h1>{title} {test}</h1>

const  App =()=> {
  return (
    <div>
    <Title title="test" test="vueact"/>
    <Counter/>
    </div>
  );
}

export default App;

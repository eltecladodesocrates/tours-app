import React from 'react';
import ReactDOM from 'react-dom';

const url = 'https://course-api.com/react-tours-project'

class ToursApp extends React.Component {

  state = {
    tours: []
  }

  componentDidMount() {
    const fetchTours = async () => {
      const response = await fetch(url)
      const tours = await response.json()
      this.setState(() => ({ tours }))
    }
    fetchTours()
  }

  handleRemoveTour = async (id) => {
    const tours = await this.state.tours.filter((tour) => {
      return tour.id !== id
    })
    this.setState(() => ({ tours }))
  }

  render() {
    return (
      <div>
        <Header />
        <Tours
          tours={this.state.tours}
          handleRemoveTour={this.handleRemoveTour}
        />

      </div>
    )
  }
}

const Header = () => (
  <div>
    <h1>Tours App</h1>
  </div>
)

const Tours = (props) => (
  props.tours.map((tour) => {
    return (
      <Tour
        key={tour.id}
        id={tour.id}
        img={tour.image}
        name={tour.name}
        price={tour.price}
        description={tour.description}
        handleRemoveTour={props.handleRemoveTour}
      />
    )
  })
)

const Tour = (props) => {


  return (
    <div>
      <img src={props.img} />
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <p>{props.description}</p>
      <RemoveTour
        handleRemoveTour={props.handleRemoveTour}
        id={props.id}
      />
    </div>
  )
}

class RemoveTour extends React.Component {

  handleRemoveTour = () => {
    console.log('removed')
    this.props.handleRemoveTour(this.props.id)
  }

  render() {
    return (
      <button onClick={this.handleRemoveTour}>Remove Tour</button>
    )
  }
}

ReactDOM.render(
  <ToursApp />,
  document.getElementById('root')
);


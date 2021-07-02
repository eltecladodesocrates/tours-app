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

  render() {
    return (
      <div>
        <Header />
        <Tours
          tours={this.state.tours}
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
        img={tour.image}
        name={tour.name}
        price={tour.price}
        description={tour.description}
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
      <button>Not Interested</button>
    </div>
  )
}

ReactDOM.render(
  <ToursApp />,
  document.getElementById('root')
);


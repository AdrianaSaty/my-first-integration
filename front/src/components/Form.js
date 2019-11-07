import React, { Component } from "react";

class Form extends Component {
    state = {
        showForm: false,
        data: {
            name: '',
            calories: '',
            image: '',
        }
    }

    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm})
    } 

    handleChange = (e) => {
        const { data } = this.state;
        data[e.target.name] = e.target.value;
        this.setState({ data: data})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFood(this.state.data);   
        this.setState({
            data: {
                name: '',
                calories: '',
                image: '',
            },
            showForm: false,
        }) 
    }

    render() {
        const { name, calories, image } = this.state.data;
        return(
            <div>
                <button onClick={() => this.toggleForm()} >Add new foods</button>
                { this.state.showForm ? (
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={(e) => this.handleChange(e)} value={name} type="text" name="name" placeholder="Name" />
                                <input onChange={(e) => this.handleChange(e)} value={calories} type="text" name="calories" placeholder="Calories" />
                                <input onChange={(e) => this.handleChange(e)} value={image} type="text" name="image" placeholder="Image" />
                                <input type="submit" value="Submit" />
                                <button>Cancel</button>
                            </form>
                        </div>
                        ) : undefined }
            </div>
        )
    }

}

export default Form;
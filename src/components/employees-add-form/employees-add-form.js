
import './employees-add-form.css'
import {Component} from "react";


class EmployeesAddForm extends Component{

    constructor(props) {
        super(props);
        this.state={
            name:"",
            salary:""
        }
    }

    onValueChange = (e) =>
        this.setState({
            [e.target.name]: e.target.value
        })

    render() {
    return(
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                       className="form-control new-post-label"
                       placeholder="Как его зовут?"
                        onChange={this.onValueChange}
                       value={this.state.name}
                        name="name"/>

                <input type="number"
                       className="form-control new-post-label"
                       placeholder="З/П в $?"
                       value={this.state.salary}
                       onChange={this.onValueChange}
                       name="salary"/>


                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )}
}

export default EmployeesAddForm;
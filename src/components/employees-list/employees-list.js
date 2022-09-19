import EmployeesListItem from "../employees-list-item/employees-list-item";
import './Employees-list.css'

const EmployeesList = ({data}) => {


    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
          //  <EmployeesListItem  key={id} name= {itemProps.name} salary={itemProps.salary} increase={itemProps.increase }></EmployeesListItem>
             <EmployeesListItem key={id}{...itemProps}></EmployeesListItem>
        )
    })

    return (
        < ul
            className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;